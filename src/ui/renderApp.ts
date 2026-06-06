import {
  Activity,
  Bell,
  ChefHat,
  CircleAlert,
  ClipboardCheck,
  Cookie,
  Check,
  createIcons,
  Download,
  Factory,
  Flame,
  FolderOpen,
  Gauge,
  GripVertical,
  Info,
  Link,
  ListPlus,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Settings,
  Target,
  Timer,
  TriangleAlert,
  Wheat,
  Workflow,
  X
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
import { renderConfigPanel, type RouteStepEdit } from "./renderConfigPanel";
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

type AppView = "configuration" | "execution";

const lucideIcons = {
  Activity,
  Bell,
  ChefHat,
  CircleAlert,
  ClipboardCheck,
  Cookie,
  Check,
  Download,
  Factory,
  Flame,
  FolderOpen,
  Gauge,
  GripVertical,
  Info,
  Link,
  ListPlus,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Settings,
  Target,
  Timer,
  TriangleAlert,
  Wheat,
  Workflow,
  X
};

const icon = (name: string): string => `<i data-lucide="${name}"></i>`;

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

const updateRouteStep = (state: SimulationState, form: HTMLFormElement): SimulationState => {
  const productId = formValue(form, "productId");
  const stepIndex = numericFormValue(form, "stepIndex");
  const resourceId = formValue(form, "resourceId");
  const processTimeMinutes = numericFormValue(form, "processTimeMinutes");
  const products = state.products.map((product) => {
    if (product.id !== productId) {
      return product;
    }

    return {
      ...product,
      route: product.route.map((step, index) => index === stepIndex
        ? { ...step, resourceId, processTimeMinutes }
        : step)
    };
  });

  return addSystemAlert(
    resetWithScenario(state, { ...scenarioFromState(state), products }),
    "info",
    "Etapa del flujo actualizada."
  );
};

const reorderRouteStep = (
  state: SimulationState,
  productId: string,
  fromIndex: number,
  toIndex: number
): SimulationState => {
  if (fromIndex === toIndex) {
    return state;
  }

  const products = state.products.map((product) => {
    if (product.id !== productId) {
      return product;
    }

    const route = [...product.route];
    const [movedStep] = route.splice(fromIndex, 1);
    if (!movedStep) {
      return product;
    }
    route.splice(toIndex, 0, movedStep);
    return { ...product, route };
  });

  return addSystemAlert(
    resetWithScenario(state, { ...scenarioFromState(state), products }),
    "info",
    "Flujo de producción reordenado."
  );
};

export const renderApp = (root: HTMLElement): void => {
  let state = loadScenario(demoScenario);
  let activeView: AppView = "configuration";
  let editingRouteStep: RouteStepEdit | null = null;
  let draggedRouteStep: RouteStepEdit | null = null;
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
    root.querySelector<HTMLButtonElement>("#view-configuration")?.addEventListener("click", () => {
      activeView = "configuration";
      render();
    });

    root.querySelector<HTMLButtonElement>("#view-execution")?.addEventListener("click", () => {
      activeView = "execution";
      render();
    });

    root.querySelector<HTMLButtonElement>("#load-demo")?.addEventListener("click", () => {
      setState({ ...loadScenario(demoScenario), speed: state.speed });
    });

    root.querySelector<HTMLButtonElement>("#reset-demo")?.addEventListener("click", () => {
      setState({ ...loadScenario(demoScenario), speed: state.speed });
    });

    root.querySelector<HTMLButtonElement>("#start-simulation")?.addEventListener("click", () => {
      activeView = "execution";
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

    const editForm = root.querySelector<HTMLFormElement>("#route-edit-form");
    editForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      editingRouteStep = null;
      setState(updateRouteStep(state, editForm));
    });

    root.querySelector<HTMLButtonElement>("#cancel-route-edit")?.addEventListener("click", () => {
      editingRouteStep = null;
      render();
    });

    root.querySelectorAll<HTMLButtonElement>(".config-flow-node").forEach((node) => {
      node.addEventListener("click", () => {
        editingRouteStep = {
          productId: node.dataset.productId ?? "",
          stepIndex: Number(node.dataset.stepIndex)
        };
        render();
      });

      node.addEventListener("dragstart", (event) => {
        draggedRouteStep = {
          productId: node.dataset.productId ?? "",
          stepIndex: Number(node.dataset.stepIndex)
        };
        event.dataTransfer?.setData("text/plain", JSON.stringify(draggedRouteStep));
        event.dataTransfer?.setDragImage(node, 16, 16);
      });

      node.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      node.addEventListener("drop", (event) => {
        event.preventDefault();
        const targetProductId = node.dataset.productId ?? "";
        const targetStepIndex = Number(node.dataset.stepIndex);
        if (!draggedRouteStep || draggedRouteStep.productId !== targetProductId) {
          return;
        }

        const moved = draggedRouteStep;
        draggedRouteStep = null;
        editingRouteStep = { productId: targetProductId, stepIndex: targetStepIndex };
        setState(reorderRouteStep(state, targetProductId, moved.stepIndex, targetStepIndex));
      });

      node.addEventListener("dragend", () => {
        draggedRouteStep = null;
      });
    });
  };

  const renderViewNavigation = (): string => `
    <nav class="view-tabs" aria-label="Secciones del simulador">
      <button
        id="view-configuration"
        class="view-tab ${activeView === "configuration" ? "active" : ""}"
        type="button"
        aria-current="${activeView === "configuration" ? "page" : "false"}"
      >
        ${icon("settings")}Configuración
      </button>
      <button
        id="view-execution"
        class="view-tab ${activeView === "execution" ? "active" : ""}"
        type="button"
        aria-current="${activeView === "execution" ? "page" : "false"}"
      >
        ${icon("activity")}Ejecución
      </button>
    </nav>
  `;

  const renderExecutionControls = (): string => `
    <section class="execution-controls">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Ejecución</p>
          <h2>${icon("workflow")}Proceso de producción</h2>
        </div>
        <span class="status-pill ${state.isRunning ? "status-running" : "status-paused"}">
          ${icon(state.isRunning ? "play" : "pause")}${state.isRunning ? "En marcha" : "Pausado"}
        </span>
      </div>
      <div class="control-grid execution-grid">
        <button id="start-simulation" class="button success" type="button">${icon("play")}Iniciar</button>
        <button id="pause-simulation" class="button warning" type="button">${icon("pause")}Pausar</button>
        <button id="reset-simulation" class="button danger" type="button">${icon("rotate-ccw")}Reiniciar</button>
        <button id="export-results" class="button secondary" type="button">${icon("download")}Exportar</button>
      </div>
      <label class="field speed-field">
        <span>Velocidad</span>
        <select id="speed-selector">
          ${[1, 5, 10, 30].map((speed) => `
            <option value="${speed}" ${state.speed === speed ? "selected" : ""}>${speed}x</option>
          `).join("")}
        </select>
      </label>
    </section>
  `;

  const renderCurrentView = (): string => {
    if (activeView === "configuration") {
      return `
        <div class="config-page">
          ${renderConfigPanel(state, editingRouteStep)}
        </div>
      `;
    }

    return `
      <div class="execution-page">
        <div class="execution-main">
          ${renderExecutionControls()}
          ${renderDashboard(state)}
        </div>
        ${renderAlerts(state)}
      </div>
    `;
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
        ${renderViewNavigation()}
        ${renderCurrentView()}
      </div>
    `;
    bindActions();
    refreshIcons();
  }

  render();
};
