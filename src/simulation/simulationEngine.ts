import { demoScenario } from "../data/demoScenario";
import type { Product, ScenarioData, SimulationState } from "../models/types";
import { generateAlerts } from "./alertSystem";
import { calculateMetrics, createEmptyMetrics } from "./metrics";

const createId = (prefix: string): string => `${prefix}-${crypto.randomUUID()}`;

let materialsConsumed: Record<string, number> = {};

const cloneScenario = (scenario: ScenarioData): ScenarioData => ({
  products: structuredClone(scenario.products),
  materials: structuredClone(scenario.materials),
  resources: structuredClone(scenario.resources)
});

export const createInitialState = (scenario: ScenarioData = demoScenario): SimulationState => {
  const clonedScenario = cloneScenario(scenario);
  materialsConsumed = {};

  const state: SimulationState = {
    isRunning: false,
    simulatedMinutes: 0,
    speed: 1,
    products: clonedScenario.products,
    materials: clonedScenario.materials,
    resources: clonedScenario.resources,
    completedUnitsByProduct: Object.fromEntries(clonedScenario.products.map((product) => [product.id, 0])),
    alerts: [
      {
        id: createId("info"),
        type: "info",
        message: "Obrador listo para simular la producción de scones.",
        timestamp: 0
      }
    ],
    metrics: createEmptyMetrics()
  };

  return {
    ...state,
    metrics: calculateMetrics(state, materialsConsumed)
  };
};

const getProductPriority = (state: SimulationState, product: Product): number => {
  const completed = state.completedUnitsByProduct[product.id] ?? 0;
  const targetGap = Math.max(product.targetProduction - completed, 0);
  const demandPerMinute = product.demandPerHour / 60;
  return demandPerMinute + targetGap / Math.max(product.targetProduction, 1);
};

const getMaterialLimitedUnits = (state: SimulationState, product: Product): number => {
  if (product.billOfMaterials.length === 0) {
    return Number.POSITIVE_INFINITY;
  }

  return product.billOfMaterials.reduce((minimum, requirement) => {
    const material = state.materials.find((item) => item.id === requirement.materialId);
    if (!material) {
      return 0;
    }
    return Math.min(minimum, Math.floor(material.currentStock / Math.max(requirement.quantityPerUnit, 0.001)));
  }, Number.POSITIVE_INFINITY);
};

const getRouteLimitedUnitsPerMinute = (state: SimulationState, product: Product): number => {
  if (product.route.length === 0) {
    return 0;
  }

  return product.route.reduce((minimum, step) => {
    const resource = state.resources.find((item) => item.id === step.resourceId);
    if (!resource) {
      return 0;
    }

    const stepCapacity = 60 / Math.max(step.processTimeMinutes, 0.1);
    return Math.min(minimum, resource.capacityPerHour, stepCapacity);
  }, Number.POSITIVE_INFINITY) / 60;
};

const consumeMaterials = (state: SimulationState, product: Product, units: number): void => {
  product.billOfMaterials.forEach((requirement) => {
    const material = state.materials.find((item) => item.id === requirement.materialId);
    if (!material) {
      return;
    }

    const consumed = requirement.quantityPerUnit * units;
    material.currentStock = Math.max(0, material.currentStock - consumed);
    materialsConsumed[material.id] = (materialsConsumed[material.id] ?? 0) + consumed;
  });
};

const updateResourceLoad = (state: SimulationState, product: Product, unitsProduced: number, desiredUnits: number): void => {
  product.route.forEach((step) => {
    const resource = state.resources.find((item) => item.id === step.resourceId);
    if (!resource) {
      return;
    }

    const effectiveCapacityPerHour = Math.min(resource.capacityPerHour, 60 / Math.max(step.processTimeMinutes, 0.1));
    const demandedUnitsPerHour = desiredUnits * 60;
    const queuedUnits = Math.max(0, desiredUnits - unitsProduced);
    resource.currentUtilization = Math.min(
      resource.maxUtilization,
      resource.currentUtilization + demandedUnitsPerHour / Math.max(effectiveCapacityPerHour, 0.1) * 100
    );
    resource.queue = Math.min(resource.maxQueue, resource.queue + queuedUnits * step.processTimeMinutes / Math.max(step.processTimeMinutes, 1));
  });
};

const relaxResources = (state: SimulationState): void => {
  state.resources.forEach((resource) => {
    resource.currentUtilization = Math.max(0, Math.min(resource.maxUtilization, resource.currentUtilization * 0.68));
    const processedQueue = resource.capacityPerHour / 60;
    resource.queue = Math.max(0, resource.queue - processedQueue);
  });
};

const updateCompletedUnits = (state: SimulationState, product: Product, units: number): void => {
  state.completedUnitsByProduct[product.id] = (state.completedUnitsByProduct[product.id] ?? 0) + units;
};

const simulateProduct = (state: SimulationState, product: Product): void => {
  const completed = state.completedUnitsByProduct[product.id] ?? 0;
  if (completed >= product.targetProduction) {
    return;
  }

  const desiredUnits = Math.min(product.demandPerHour / 60, product.targetProduction - completed);
  const materialLimitedUnits = getMaterialLimitedUnits(state, product);
  const routeLimitedUnits = getRouteLimitedUnitsPerMinute(state, product);
  const unitsProduced = Math.max(0, Math.min(desiredUnits, materialLimitedUnits, routeLimitedUnits));

  if (unitsProduced > 0) {
    consumeMaterials(state, product, unitsProduced);
    updateCompletedUnits(state, product, unitsProduced);
  }

  updateResourceLoad(state, product, unitsProduced, desiredUnits);
};

export const runSimulationTick = (state: SimulationState): SimulationState => {
  const nextState: SimulationState = {
    ...state,
    simulatedMinutes: state.simulatedMinutes + 1,
    products: structuredClone(state.products),
    materials: structuredClone(state.materials),
    resources: structuredClone(state.resources),
    completedUnitsByProduct: { ...state.completedUnitsByProduct },
    alerts: [...state.alerts],
    metrics: { ...state.metrics }
  };

  relaxResources(nextState);

  [...nextState.products]
    .sort((left, right) => getProductPriority(nextState, right) - getProductPriority(nextState, left))
    .forEach((product) => simulateProduct(nextState, product));

  nextState.alerts = generateAlerts(nextState);
  nextState.metrics = calculateMetrics(nextState, materialsConsumed);

  return nextState;
};

export const resetSimulation = (state: SimulationState): SimulationState =>
  createInitialState({
    products: state.products,
    materials: state.materials.map((material) => ({
      ...material,
      currentStock: material.initialStock
    })),
    resources: state.resources.map((resource) => ({
      ...resource,
      currentUtilization: 0,
      queue: 0
    }))
  });

export const loadScenario = (scenario: ScenarioData): SimulationState => createInitialState(scenario);

export const addProductToState = (state: SimulationState, product: Product): SimulationState => ({
  ...resetSimulation(state),
  products: [...state.products, product],
  completedUnitsByProduct: {
    ...state.completedUnitsByProduct,
    [product.id]: 0
  }
});
