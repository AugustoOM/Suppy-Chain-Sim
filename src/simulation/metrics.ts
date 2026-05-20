import type { Resource, SimulationMetrics, SimulationState } from "../models/types";

export const createEmptyMetrics = (): SimulationMetrics => ({
  totalCompletedUnits: 0,
  completedUnitsByProduct: {},
  demandFulfillmentPercentage: 0,
  averageResourceUtilization: 0,
  bottleneckResourceId: null,
  materialsConsumed: {},
  materialsRemaining: {},
  activeAlerts: 0,
  estimatedLostProduction: 0
});

export const getBottleneckResource = (resources: Resource[]): Resource | null => {
  if (resources.length === 0) {
    return null;
  }

  return resources.reduce((highest, resource) => {
    const highestScore = highest.currentUtilization + highest.queue / Math.max(highest.maxQueue, 1) * 100;
    const resourceScore = resource.currentUtilization + resource.queue / Math.max(resource.maxQueue, 1) * 100;
    return resourceScore > highestScore ? resource : highest;
  });
};

export const calculateMetrics = (
  state: SimulationState,
  materialsConsumed: Record<string, number>
): SimulationMetrics => {
  const totalCompletedUnits = Object.values(state.completedUnitsByProduct).reduce((sum, units) => sum + units, 0);
  const elapsedHours = Math.max(state.simulatedMinutes / 60, 1 / 60);
  const totalDemand = state.products.reduce((sum, product) => sum + product.demandPerHour * elapsedHours, 0);
  const averageResourceUtilization = state.resources.length
    ? state.resources.reduce((sum, resource) => sum + resource.currentUtilization, 0) / state.resources.length
    : 0;
  const bottleneckResource = getBottleneckResource(state.resources);
  const productiveCapacity = state.products.reduce((sum, product) => {
    const routeCapacity = product.route.reduce((minimum, step) => {
      const resource = state.resources.find((item) => item.id === step.resourceId);
      if (!resource) {
        return minimum;
      }
      const stepCapacity = 60 / Math.max(step.processTimeMinutes, 0.1);
      return Math.min(minimum, resource.capacityPerHour, stepCapacity);
    }, Number.POSITIVE_INFINITY);

    return sum + (Number.isFinite(routeCapacity) ? routeCapacity : 0);
  }, 0);
  const demandedCapacity = state.products.reduce((sum, product) => sum + product.demandPerHour, 0);

  return {
    totalCompletedUnits,
    completedUnitsByProduct: { ...state.completedUnitsByProduct },
    demandFulfillmentPercentage: totalDemand > 0 ? Math.min(100, totalCompletedUnits / totalDemand * 100) : 100,
    averageResourceUtilization,
    bottleneckResourceId: bottleneckResource?.id ?? null,
    materialsConsumed: { ...materialsConsumed },
    materialsRemaining: Object.fromEntries(state.materials.map((material) => [material.id, material.currentStock])),
    activeAlerts: state.alerts.length,
    estimatedLostProduction: Math.max(0, demandedCapacity - productiveCapacity) * elapsedHours
  };
};
