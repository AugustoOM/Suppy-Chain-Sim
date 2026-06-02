import type { Material, Product, Resource, SimulationState } from "../models/types";

const formatNumber = (value: number): string =>
  new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 }).format(value);

const formatTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}`;
};

const getProductName = (products: Product[], productId: string): string =>
  products.find((product) => product.id === productId)?.name ?? productId;

const getResourceName = (resources: Resource[], resourceId: string | null): string =>
  resources.find((resource) => resource.id === resourceId)?.name ?? "Sin datos";

const icon = (name: string): string => `<i data-lucide="${name}"></i>`;

const inventoryStatus = (material: Material): string => {
  if (material.currentStock <= 0) {
    return "critical";
  }
  if (material.currentStock <= material.reorderPoint) {
    return "warning";
  }
  return "success";
};

const renderMetricCards = (state: SimulationState): string => `
  <section class="metrics-grid">
    <article class="metric-card">
      <span>${icon("timer")}Tiempo simulado</span>
      <strong>${formatTime(state.simulatedMinutes)}</strong>
    </article>
    <article class="metric-card">
      <span>${icon("cookie")}Scones terminados</span>
      <strong>${formatNumber(state.metrics.totalCompletedUnits)}</strong>
    </article>
    <article class="metric-card">
      <span>${icon("target")}Cumplimiento demanda</span>
      <strong>${formatNumber(state.metrics.demandFulfillmentPercentage)}%</strong>
    </article>
    <article class="metric-card">
      <span>${icon("flame")}Cuello de botella</span>
      <strong>${getResourceName(state.resources, state.metrics.bottleneckResourceId)}</strong>
    </article>
    <article class="metric-card">
      <span>${icon("gauge")}Utilización promedio</span>
      <strong>${formatNumber(state.metrics.averageResourceUtilization)}%</strong>
    </article>
    <article class="metric-card">
      <span>${icon("bell")}Alertas activas</span>
      <strong>${state.alerts.length}</strong>
    </article>
    <article class="metric-card">
      <span>${icon("triangle-alert")}Merma estimada</span>
      <strong>${formatNumber(state.metrics.estimatedLostProduction)}</strong>
    </article>
  </section>
`;

const renderInventory = (state: SimulationState): string => `
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${icon("wheat")}Ingredientes</h2>
      <span>Stock restante y consumo por receta</span>
    </div>
    <div class="inventory-list">
      ${state.materials.map((material) => {
        const initialStock = Math.max(material.initialStock, 1);
        const remainingPercentage = Math.max(0, Math.min(100, material.currentStock / initialStock * 100));
        const consumed = state.metrics.materialsConsumed[material.id] ?? 0;
        return `
          <article class="inventory-item ${inventoryStatus(material)}">
            <div>
              <strong>${material.name}</strong>
              <span>${formatNumber(material.currentStock)} ${material.unit} restantes</span>
            </div>
            <div class="progress-track">
              <span style="width: ${remainingPercentage}%"></span>
            </div>
            <small>Consumido: ${formatNumber(consumed)} ${material.unit}</small>
          </article>
        `;
      }).join("")}
    </div>
  </section>
`;

const utilizationClass = (utilization: number): string => {
  if (utilization >= 95) {
    return "critical";
  }
  if (utilization >= 85) {
    return "warning";
  }
  return "success";
};

const renderResources = (state: SimulationState): string => `
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${icon("factory")}Estaciones</h2>
      <span>Utilización y colas del obrador</span>
    </div>
    <div class="resource-list">
      ${state.resources.map((resource) => {
        const utilization = Math.max(0, Math.min(100, resource.currentUtilization));
        const queuePercentage = Math.max(0, Math.min(100, resource.queue / Math.max(resource.maxQueue, 1) * 100));
        return `
          <article class="resource-row">
            <div class="resource-label">
              <strong>${resource.name}</strong>
              <span>${formatNumber(resource.queue)} / ${formatNumber(resource.maxQueue)} en cola</span>
            </div>
            <div class="utilization-block">
              <div class="progress-track ${utilizationClass(utilization)}">
                <span style="width: ${utilization}%"></span>
              </div>
              <b>${formatNumber(utilization)}%</b>
            </div>
            <div class="queue-track">
              <span style="width: ${queuePercentage}%"></span>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  </section>
`;

const renderCompletedByProduct = (state: SimulationState): string => `
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${icon("clipboard-check")}Lotes completados</h2>
      <span>Scones terminados por receta</span>
    </div>
    <div class="product-output-grid">
      ${Object.entries(state.completedUnitsByProduct).map(([productId, units]) => `
        <article class="output-card">
          <span>${getProductName(state.products, productId)}</span>
          <strong>${formatNumber(units)}</strong>
        </article>
      `).join("")}
    </div>
  </section>
`;

const renderProductionFlow = (state: SimulationState): string => `
  <section class="dashboard-section flow-section">
    <div class="section-heading">
      <h2>${icon("workflow")}Flujo de producción</h2>
      <span>Pesado, mezclado, horneado y empaque por receta</span>
    </div>
    <div class="flow-list">
      ${state.products.map((product) => `
        <article class="flow-row">
          <strong>${product.name}</strong>
          <div class="flow-line">
            ${product.route.length
              ? product.route.map((step, index) => `
                <span class="flow-node ${state.metrics.bottleneckResourceId === step.resourceId ? "bottleneck" : ""}">
                  ${getResourceName(state.resources, step.resourceId)}
                  <small>${formatNumber(step.processTimeMinutes)} min</small>
                </span>
                ${index < product.route.length - 1 ? "<i></i>" : ""}
              `).join("")
              : `<span class="flow-node empty">Sin proceso</span>`}
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`;

export const renderDashboard = (state: SimulationState): string => `
  <main class="dashboard">
    ${renderMetricCards(state)}
    <div class="dashboard-grid">
      ${renderInventory(state)}
      ${renderResources(state)}
    </div>
    ${renderCompletedByProduct(state)}
    ${renderProductionFlow(state)}
  </main>
`;
