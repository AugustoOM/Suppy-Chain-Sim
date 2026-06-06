import type { Material, Product, Resource, SimulationState } from "../models/types";

export interface RouteStepEdit {
  productId: string;
  stepIndex: number;
}

const formatNumber = (value: number): string =>
  new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 }).format(value);

const productOptions = (products: Product[]): string =>
  products.map((product) => `<option value="${product.id}">${product.name}</option>`).join("");

const materialOptions = (materials: Material[]): string =>
  materials.map((material) => `<option value="${material.id}">${material.name}</option>`).join("");

const resourceOptions = (resources: Resource[]): string =>
  resources.map((resource) => `<option value="${resource.id}">${resource.name}</option>`).join("");

const icon = (name: string): string => `<i data-lucide="${name}"></i>`;

const getResourceName = (resources: Resource[], resourceId: string): string =>
  resources.find((resource) => resource.id === resourceId)?.name ?? "Estación no encontrada";

const renderResourceOptions = (resources: Resource[], selectedId: string): string =>
  resources.map((resource) => `
    <option value="${resource.id}" ${resource.id === selectedId ? "selected" : ""}>${resource.name}</option>
  `).join("");

const renderProductTable = (products: Product[]): string => `
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Receta</th>
          <th>Demanda/h</th>
          <th>Objetivo</th>
        </tr>
      </thead>
      <tbody>
        ${products.map((product) => `
          <tr>
            <td>${product.name}</td>
            <td>${formatNumber(product.demandPerHour)}</td>
            <td>${formatNumber(product.targetProduction)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderMaterialTable = (materials: Material[]): string => `
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>Stock</th>
          <th>Reposición</th>
        </tr>
      </thead>
      <tbody>
        ${materials.map((material) => `
          <tr>
            <td>${material.name}</td>
            <td>${formatNumber(material.currentStock)} ${material.unit}</td>
            <td>${formatNumber(material.reorderPoint)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderResourceTable = (resources: Resource[]): string => `
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Estación</th>
          <th>Capacidad/h</th>
          <th>Cola max.</th>
        </tr>
      </thead>
      <tbody>
        ${resources.map((resource) => `
          <tr>
            <td>${resource.name}</td>
            <td>${formatNumber(resource.capacityPerHour)}</td>
            <td>${formatNumber(resource.maxQueue)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`;

const renderRouteEditor = (
  state: SimulationState,
  editingStep: RouteStepEdit | null
): string => {
  if (!editingStep) {
    return `<p class="flow-hint">Seleccioná un nodo del flujo para editarlo. Arrastrá los nodos para cambiar el orden de las etapas.</p>`;
  }

  const product = state.products.find((item) => item.id === editingStep.productId);
  const step = product?.route[editingStep.stepIndex];
  if (!product || !step) {
    return `<p class="flow-hint">La etapa seleccionada ya no está disponible.</p>`;
  }

  return `
    <form id="route-edit-form" class="route-edit-form">
      <input name="productId" type="hidden" value="${product.id}" />
      <input name="stepIndex" type="hidden" value="${editingStep.stepIndex}" />
      <div>
        <strong>${product.name}</strong>
        <span>Etapa ${editingStep.stepIndex + 1}</span>
      </div>
      <label class="field">
        <span>Estación</span>
        <select name="resourceId" required>${renderResourceOptions(state.resources, step.resourceId)}</select>
      </label>
      <label class="field">
        <span>Minutos de proceso</span>
        <input name="processTimeMinutes" type="number" min="0.1" step="0.1" value="${step.processTimeMinutes}" required />
      </label>
      <button class="button primary" type="submit">${icon("check")}Guardar etapa</button>
      <button id="cancel-route-edit" class="button secondary" type="button">${icon("x")}Cancelar</button>
    </form>
  `;
};

const renderProductionFlowConfig = (
  state: SimulationState,
  editingStep: RouteStepEdit | null
): string => `
  <section class="config-section flow-config-section">
    <h3>${icon("workflow")}Flujo de producción</h3>
    <div class="config-flow-list">
      ${state.products.map((product) => `
        <article class="config-flow-row">
          <strong>${product.name}</strong>
          <div class="config-flow-line" data-flow-product-id="${product.id}">
            ${product.route.length
              ? product.route.map((step, index) => `
                <button
                  class="config-flow-node ${editingStep?.productId === product.id && editingStep.stepIndex === index ? "editing" : ""}"
                  type="button"
                  draggable="true"
                  data-product-id="${product.id}"
                  data-step-index="${index}"
                >
                  ${icon("grip-vertical")}
                  <span>${getResourceName(state.resources, step.resourceId)}</span>
                  <small>${formatNumber(step.processTimeMinutes)} min</small>
                </button>
              `).join("")
              : `<span class="config-flow-empty">Sin etapas definidas</span>`}
          </div>
        </article>
      `).join("")}
    </div>
    ${renderRouteEditor(state, editingStep)}
  </section>
`;

export const renderConfigPanel = (state: SimulationState, editingStep: RouteStepEdit | null): string => `
  <aside class="config-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Configuración</p>
        <h2>Obrador de scones</h2>
      </div>
    </div>

    <div class="config-actions">
      <button id="load-demo" class="button secondary" type="button">${icon("cookie")}Cargar demo</button>
      <button id="save-scenario" class="button secondary" type="button">${icon("save")}Guardar</button>
      <button id="load-scenario" class="button secondary" type="button">${icon("folder-open")}Cargar</button>
      <button id="reset-demo" class="button secondary" type="button">${icon("refresh-cw")}Reset demo</button>
    </div>

    <section class="config-section">
      <h3>${icon("chef-hat")}Agregar receta</h3>
      <form id="product-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Scone de queso" />
        </label>
        <label class="field">
          <span>Demanda por hora</span>
          <input name="demandPerHour" type="number" min="0" step="1" required />
        </label>
        <label class="field">
          <span>Objetivo</span>
          <input name="targetProduction" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">${icon("plus")}Agregar receta</button>
      </form>
      ${renderProductTable(state.products)}
    </section>

    <section class="config-section">
      <h3>${icon("wheat")}Agregar ingrediente</h3>
      <form id="material-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Queso rallado" />
        </label>
        <label class="field">
          <span>Unidad</span>
          <input name="unit" required placeholder="unidades" />
        </label>
        <label class="field">
          <span>Stock inicial</span>
          <input name="initialStock" type="number" min="0" step="0.1" required />
        </label>
        <label class="field">
          <span>Punto de reposición</span>
          <input name="reorderPoint" type="number" min="0" step="0.1" required />
        </label>
        <button class="button primary" type="submit">${icon("plus")}Agregar ingrediente</button>
      </form>
      ${renderMaterialTable(state.materials)}
    </section>

    <section class="config-section">
      <h3>${icon("factory")}Agregar estación</h3>
      <form id="resource-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Laminado" />
        </label>
        <label class="field">
          <span>Capacidad por hora</span>
          <input name="capacityPerHour" type="number" min="1" step="1" required />
        </label>
        <label class="field">
          <span>Cola máxima</span>
          <input name="maxQueue" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">${icon("plus")}Agregar estación</button>
      </form>
      ${renderResourceTable(state.resources)}
    </section>

    <section class="config-section">
      <h3>${icon("workflow")}Conectar proceso</h3>
      <form id="bom-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${productOptions(state.products)}</select>
        </label>
        <label class="field">
          <span>Ingrediente</span>
          <select name="materialId" required>${materialOptions(state.materials)}</select>
        </label>
        <label class="field">
          <span>Cantidad por unidad</span>
          <input name="quantityPerUnit" type="number" min="0.01" step="0.01" required />
        </label>
        <button class="button primary" type="submit">${icon("link")}Agregar ingrediente</button>
      </form>

      <form id="route-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${productOptions(state.products)}</select>
        </label>
        <label class="field">
          <span>Estación</span>
          <select name="resourceId" required>${resourceOptions(state.resources)}</select>
        </label>
        <label class="field">
          <span>Minutos de proceso</span>
          <input name="processTimeMinutes" type="number" min="0.1" step="0.1" required />
        </label>
        <button class="button primary" type="submit">${icon("list-plus")}Agregar etapa</button>
      </form>
    </section>

    ${renderProductionFlowConfig(state, editingStep)}
  </aside>
`;
