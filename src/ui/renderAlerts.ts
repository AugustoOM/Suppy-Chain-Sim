import type { Alert, SimulationState } from "../models/types";

const formatAlertTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const alertLabel = (type: Alert["type"]): string => {
  if (type === "critical") {
    return "Crítica";
  }
  if (type === "warning") {
    return "Advertencia";
  }
  return "Info";
};

export const renderAlerts = (state: SimulationState): string => `
  <aside class="alerts-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Monitoreo</p>
        <h2>Alertas</h2>
      </div>
      <span class="alert-counter">${state.alerts.length}</span>
    </div>
    <div class="alerts-list">
      ${state.alerts.length
        ? state.alerts.map((alert) => `
          <article class="alert-card ${alert.type}">
            <div>
              <span>${alertLabel(alert.type)}</span>
              <time>${formatAlertTime(alert.timestamp)}</time>
            </div>
            <p>${alert.message}</p>
          </article>
        `).join("")
        : `<p class="empty-state">No hay alertas activas.</p>`}
    </div>
  </aside>
`;
