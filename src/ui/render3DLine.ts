import "aframe";
import type { Product, Resource, SimulationState } from "../models/types";

const formatNumber = (value: number): string =>
  new Intl.NumberFormat("es-ES", { maximumFractionDigits: 1 }).format(value);

const escapeAttribute = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const getSelectedProduct = (products: Product[], selectedProductId: string | null): Product | null =>
  products.find((product) => product.id === selectedProductId) ?? products[0] ?? null;

const getResourceName = (resources: Resource[], resourceId: string): string =>
  resources.find((resource) => resource.id === resourceId)?.name ?? "Estación no encontrada";

const productOptions = (products: Product[], selectedProductId: string | null): string =>
  products.map((product) => `
    <option value="${product.id}" ${product.id === selectedProductId ? "selected" : ""}>${product.name}</option>
  `).join("");

const stationX = (index: number, total: number): number => {
  const spacing = 4;
  return index * spacing - (total - 1) * spacing / 2;
};

const renderConnectors = (product: Product): string =>
  product.route.slice(0, -1).map((_, index) => {
    const startX = stationX(index, product.route.length) + 1.35;
    const endX = stationX(index + 1, product.route.length) - 1.35;
    const arrowX = endX - 0.16;
    return `
      <a-entity line="start: ${startX} 0.82 0; end: ${endX} 0.82 0; color: #7B5434"></a-entity>
      <a-cone
        radius-bottom="0.18"
        radius-top="0"
        height="0.46"
        color="#7B5434"
        position="${arrowX} 0.82 0"
        rotation="0 0 -90"
      ></a-cone>
    `;
  }).join("");

const renderStations = (product: Product, resources: Resource[]): string =>
  product.route.map((step, index) => {
    const x = stationX(index, product.route.length);
    const stationName = escapeAttribute(getResourceName(resources, step.resourceId));
    const stepLabel = escapeAttribute(`${index + 1}. ${getResourceName(resources, step.resourceId)}`);
    return `
      <a-entity position="${x} 0 0">
        <a-box
          width="2.5"
          height="1.1"
          depth="1.55"
          position="0 0.75 0"
          color="#E2864A"
          material="roughness: 0.65; metalness: 0.05"
          shadow
        ></a-box>
        <a-box
          width="2.65"
          height="0.12"
          depth="1.7"
          position="0 1.36 0"
          color="#7B5434"
          shadow
        ></a-box>
        <a-text
          value="${stationName}"
          align="center"
          width="3.7"
          color="#FBF4E4"
          position="0 1.47 0.82"
          rotation="-20 0 0"
        ></a-text>
        <a-text
          value="${formatNumber(step.processTimeMinutes)} min"
          align="center"
          width="3"
          color="#7B5434"
          position="0 0.16 1.02"
          rotation="-80 0 0"
        ></a-text>
        <a-text
          value="${stepLabel}"
          align="center"
          width="4.2"
          color="#332315"
          position="0 0.03 -1.35"
          rotation="-90 0 0"
        ></a-text>
      </a-entity>
    `;
  }).join("");

const renderFloorGrid = (routeLength: number): string => {
  const width = Math.max(12, routeLength * 4 + 4);
  const halfWidth = width / 2;
  const halfDepth = 4;
  const lines: string[] = [];

  for (let x = -halfWidth; x <= halfWidth; x += 2) {
    lines.push(`<a-entity line="start: ${x} 0.012 -${halfDepth}; end: ${x} 0.012 ${halfDepth}; color: #C4B687"></a-entity>`);
  }

  for (let z = -halfDepth; z <= halfDepth; z += 2) {
    lines.push(`<a-entity line="start: -${halfWidth} 0.012 ${z}; end: ${halfWidth} 0.012 ${z}; color: #C4B687"></a-entity>`);
  }

  return lines.join("");
};

const renderRouteSummary = (product: Product, resources: Resource[]): string => `
  <ol class="line3d-sequence">
    ${product.route.map((step, index) => `
      <li>
        <span>${index + 1}</span>
        <strong>${getResourceName(resources, step.resourceId)}</strong>
        <small>${formatNumber(step.processTimeMinutes)} min</small>
      </li>
    `).join("")}
  </ol>
`;

export const render3DLine = (state: SimulationState, selectedProductId: string | null): string => {
  const selectedProduct = getSelectedProduct(state.products, selectedProductId);
  if (!selectedProduct) {
    return `
      <section class="line3d-page">
        <div class="line3d-toolbar">
          <p class="empty-state">Agregá una receta para visualizar su línea de producción en 3D.</p>
        </div>
      </section>
    `;
  }

  const sceneWidth = Math.max(12, selectedProduct.route.length * 4 + 4);
  const cameraZ = Math.max(9, selectedProduct.route.length * 1.55 + 6);

  return `
    <section class="line3d-page">
      <div class="line3d-toolbar">
        <div>
          <p class="eyebrow">Módulo 3D</p>
          <h2><i data-lucide="boxes"></i>Línea de producción</h2>
        </div>
        <label class="field line3d-selector">
          <span>Receta</span>
          <select id="product-3d-selector">
            ${productOptions(state.products, selectedProduct.id)}
          </select>
        </label>
      </div>

      <div class="line3d-layout">
        <div class="line3d-stage">
          ${selectedProduct.route.length
            ? `
              <a-scene
                embedded
                renderer="colorManagement: true; antialias: true"
                background="color: #FBF4E4"
                shadow="type: pcfsoft"
                vr-mode-ui="enabled: false"
              >
                <a-assets></a-assets>
                <a-entity light="type: ambient; color: #FBF4E4; intensity: 0.62"></a-entity>
                <a-entity light="type: directional; color: #ffffff; intensity: 0.92" position="-2 6 4" shadow></a-entity>
                <a-plane
                  width="${sceneWidth}"
                  height="8"
                  rotation="-90 0 0"
                  color="#FBF4E4"
                  material="roughness: 0.9"
                  shadow
                ></a-plane>
                ${renderFloorGrid(selectedProduct.route.length)}
                ${renderConnectors(selectedProduct)}
                ${renderStations(selectedProduct, state.resources)}
                <a-entity
                  camera
                  look-controls
                  wasd-controls
                  position="0 5.4 ${cameraZ}"
                  rotation="-28 0 0"
                ></a-entity>
              </a-scene>
            `
            : `<div class="line3d-empty">La receta seleccionada todavía no tiene etapas conectadas.</div>`}
        </div>

        <aside class="line3d-details">
          <h3>${selectedProduct.name}</h3>
          <p>${selectedProduct.route.length} estaciones conectadas según el flujo configurado.</p>
          ${selectedProduct.route.length
            ? renderRouteSummary(selectedProduct, state.resources)
            : `<p class="flow-hint">Agregá etapas desde Configuración para construir la línea 3D.</p>`}
        </aside>
      </div>
    </section>
  `;
};
