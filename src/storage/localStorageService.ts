import type { ScenarioData, SimulationState } from "../models/types";

const scenarioKey = "production-chain-simulator:scenario";
const resultsKey = "production-chain-simulator:last-results";

export const saveScenarioToLocalStorage = (state: SimulationState): void => {
  const scenario: ScenarioData = {
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
  };
  localStorage.setItem(scenarioKey, JSON.stringify(scenario));
};

export const loadScenarioFromLocalStorage = (): ScenarioData | null => {
  const rawScenario = localStorage.getItem(scenarioKey);
  if (!rawScenario) {
    return null;
  }

  try {
    return JSON.parse(rawScenario) as ScenarioData;
  } catch {
    return null;
  }
};

export const saveResultsToLocalStorage = (state: SimulationState): void => {
  localStorage.setItem(resultsKey, JSON.stringify(state.metrics));
};

export const exportResultsAsJson = (state: SimulationState): void => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `resultados-simulacion-${Date.now()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
};
