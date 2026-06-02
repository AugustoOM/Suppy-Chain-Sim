import {
  Bell,
  ChefHat,
  CircleAlert,
  ClipboardCheck,
  Cookie,
  createIcons,
  Download,
  Factory,
  Flame,
  FolderOpen,
  Gauge,
  Info,
  Link,
  ListPlus,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Target,
  Timer,
  TriangleAlert,
  Wheat,
  Workflow
} from "lucide";
import logoUrl from "../../Logo-nutriscone.jpeg";
import { demoScenario } from "../data/demoScenario";
import type { Alert, Material, Product, Resource, ScenarioData, SimulationState } from "../models/types";
import { loadScenario, resetSimulation, runSimulationTick } from "../simulation/simulationEngine";
import {
  exportResultsAsJson,
  loadScenarioFromLocalStorage,
  saveResultsToLocalStorage,
  saveScenarioToLocalStorage
} from "../storage/localStorageService";
import { renderAlerts } from "./renderAlerts";
import { renderConfigPanel } from "./renderConfigPanel";
import { renderDashboard } from "./renderDashboard";

const createId = (name: string): string => {
  const base = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${base || "item"}-${Math.random().toString(36).slice(2, 7)}`;
};

const formValue = (form: HTMLFormElement, name: string): string => {
  const value = new FormData(form).get(name);
  return typeof value === "string" ? value.trim() : "";
};

const numericFormValue = (form: HTMLFormElement, name: string): number =>
  Number(formValue(form, name));

const lucideIcons = {
  Bell,
  ChefHat,
  CircleAlert,
  ClipboardCheck,
  Cookie,
  Download,
  Factory,
  Flame,
  FolderOpen,
  Gauge,
  Info,
  Link,
  ListPlus,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Target,
  Timer,
  TriangleAlert,
  Wheat,
  Workflow
};

const refreshIcons = (): void => {
  createIcons({
    icons: lucideIcons,
    attrs: {
      "aria-hidden": "true",
      "stroke-width": "2.2"
    }
  });
};

const addSystemAlert = (
  state: SimulationState,
  type: Alert["type"],
  message: string
): SimulationState => ({
  ...state,
  alerts: [
    {
    id: createId("alerta"),
      type,
      message,
      timestamp: state.simulatedMinutes
    },
    ...state.alerts
  ].slice(0, 40)
});

const scenarioFromState = (state: SimulationState): ScenarioData => ({
  products: state.products,
  materials: state.materials,
  resources: state.resources
});

const resetWithScenario = (state: SimulationState, scenario: ScenarioData): SimulationState => ({
  ...loadScenario(scenario),
  speed: state.speed
});

const addProduct = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const product: Product = {
    id: createId(formValue(form, "name")),
    name: formValue(form, "name"),
    demandPerHour: numericFormValue(form, "demandPerHour"),
    targetProduction: numericFormValue(form, "targetProduction"),
    billOfMaterials: [],
    route: []
  };

  return addSystemAlert(
    resetWithScenario(state, {
      ...scenarioFromState(state),
      products: [...state.products, product]
    }),
    "info",
    `${product.name} agregado al plan de producción.`
  );
};

const addMaterial = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const initialStock = numericFormValue(form, "initialStock");
  const material: Material = {
    id: createId(formValue(form, "name")),
    name: formValue(form, "name"),
    unit: formValue(form, "unit"),
    initialStock,
    currentStock: initialStock,
    reorderPoint: numericFormValue(form, "reorderPoint")
  };

  return addSystemAlert(
    resetWithScenario(state, {
      ...scenarioFromState(state),
      materials: [...state.materials, material]
    }),
    "info",
    `${material.name} agregado al inventario de ingredientes.`
  );
};

const addResource = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const resource: Resource = {
    id: createId(formValue(form, "name")),
    name: formValue(form, "name"),
    capacityPerHour: numericFormValue(form, "capacityPerHour"),
    maxUtilization: 100,
    currentUtilization: 0,
    queue: 0,
    maxQueue: numericFormValue(form, "maxQueue")
  };

  return addSystemAlert(
    resetWithScenario(state, {
      ...scenarioFromState(state),
      resources: [...state.resources, resource]
    }),
    "info",
    `${resource.name} agregado como estación del obrador.`
  );
};

const connectMaterial = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const productId = formValue(form, "productId");
  const materialId = formValue(form, "materialId");
  const quantityPerUnit = numericFormValue(form, "quantityPerUnit");
  const products = state.products.map((product) => {
    if (product.id !== productId) {
      return product;
    }

    const withoutExisting = product.billOfMaterials.filter((requirement) => requirement.materialId !== materialId);
    return {
      ...product,
      billOfMaterials: [...withoutExisting, { materialId, quantityPerUnit }]
    };
  });

  return addSystemAlert(
    resetWithScenario(state, { ...scenarioFromState(state), products }),
    "info",
    "Ingrediente conectado a la receta."
  );
};

const connectResource = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const productId = formValue(form, "productId");
  const resourceId = formValue(form, "resourceId");
  const processTimeMinutes = numericFormValue(form, "processTimeMinutes");
  const products = state.products.map((product) => product.id === productId
    ? {
      ...product,
      route: [...product.route, { resourceId, processTimeMinutes }]
    }
    : product);

  return addSystemAlert(
    resetWithScenario(state, { ...scenarioFromState(state), products }),
    "info",
    "Etapa agregada al proceso de la receta."
  );
};

export const renderApp = (root: HTMLElement): void => {
  let state = loadScenario(demoScenario);
  let timerId: number | null = null;

  const stopTimer = (): void => {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const scheduleTimer = (): void => {
    stopTimer();
    if (!state.isRunning) {
      return;
    }

    timerId = window.setInterval(() => {
      state = runSimulationTick(state);
      saveResultsToLocalStorage(state);
      render();
      scheduleTimer();
    }, Math.max(40, 1000 / state.speed));
  };

  const setState = (nextState: SimulationState): void => {
    state = nextState;
    render();
    scheduleTimer();
  };

  const handleForm = (
    id: string,
    reducer: (currentState: SimulationState, form: HTMLFormElement) => SimulationState
  ): void => {
    const form = root.querySelector<HTMLFormElement>(`#${id}`);
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      setState(reducer(state, form));
    });
  };

  const bindActions = (): void => {
    root.querySelector<HTMLButtonElement>("#load-demo")?.addEventListener("click", () => {
      setState({ ...loadScenario(demoScenario), speed: state.speed });
    });

    root.querySelector<HTMLButtonElement>("#reset-demo")?.addEventListener("click", () => {
      setState({ ...loadScenario(demoScenario), speed: state.speed });
    });

    root.querySelector<HTMLButtonElement>("#start-simulation")?.addEventListener("click", () => {
      setState({ ...state, isRunning: true });
    });

    root.querySelector<HTMLButtonElement>("#pause-simulation")?.addEventListener("click", () => {
      setState({ ...state, isRunning: false });
    });

    root.querySelector<HTMLButtonElement>("#reset-simulation")?.addEventListener("click", () => {
      setState({ ...resetSimulation(state), speed: state.speed });
    });

    root.querySelector<HTMLButtonElement>("#save-scenario")?.addEventListener("click", () => {
      saveScenarioToLocalStorage(state);
      setState(addSystemAlert(state, "info", "Plan del obrador guardado en el navegador."));
    });

    root.querySelector<HTMLButtonElement>("#load-scenario")?.addEventListener("click", () => {
      const savedScenario = loadScenarioFromLocalStorage();
      setState(savedScenario
        ? addSystemAlert({ ...loadScenario(savedScenario), speed: state.speed }, "info", "Plan del obrador cargado desde el navegador.")
        : addSystemAlert(state, "warning", "No hay un plan guardado."));
    });

    root.querySelector<HTMLButtonElement>("#export-results")?.addEventListener("click", () => {
      exportResultsAsJson(state);
      setState(addSystemAlert(state, "info", "Resultados del obrador exportados como JSON."));
    });

    root.querySelector<HTMLSelectElement>("#speed-selector")?.addEventListener("change", (event) => {
      const speed = Number((event.currentTarget as HTMLSelectElement).value);
      setState({ ...state, speed });
    });

    handleForm("product-form", addProduct);
    handleForm("material-form", addMaterial);
    handleForm("resource-form", addResource);
    handleForm("bom-form", connectMaterial);
    handleForm("route-form", connectResource);
  };

  function render(): void {
    root.innerHTML = `
      <div class="app-shell">
        <header class="app-header">
          <div class="brand-lockup">
            <img src="${logoUrl}" alt="Nutriscone" />
            <div>
              <p class="eyebrow">Simulador de producción alimentaria</p>
              <h1>Producción de Scones</h1>
            </div>
          </div>
          <div class="header-summary">
            <span><i data-lucide="chef-hat"></i>${state.products.length} recetas</span>
            <span><i data-lucide="wheat"></i>${state.materials.length} ingredientes</span>
            <span><i data-lucide="factory"></i>${state.resources.length} estaciones</span>
          </div>
        </header>
        <div class="workspace">
          ${renderConfigPanel(state)}
          ${renderDashboard(state)}
          ${renderAlerts(state)}
        </div>
      </div>
    `;
    bindActions();
    refreshIcons();
  }

  render();
};
