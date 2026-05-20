import type { Alert, Resource, SimulationState } from "../models/types";
import { getBottleneckResource } from "./metrics";

const createAlertId = (prefix: string, timestamp: number): string =>
  `${prefix}-${timestamp}-${Math.random().toString(36).slice(2, 8)}`;

const addAlert = (
  alerts: Alert[],
  type: Alert["type"],
  message: string,
  timestamp: number,
  key: string
): void => {
  const alreadyExists = alerts.some((alert) => alert.message === message && timestamp - alert.timestamp <= 12);
  if (!alreadyExists) {
    alerts.unshift({
      id: createAlertId(key, timestamp),
      type,
      message,
      timestamp
    });
  }
};

const routeCapacityForProduct = (state: SimulationState, productId: string): number => {
  const product = state.products.find((item) => item.id === productId);
  if (!product || product.route.length === 0) {
    return 0;
  }

  return product.route.reduce((minimum, step) => {
    const resource = state.resources.find((item) => item.id === step.resourceId);
    if (!resource) {
      return minimum;
    }

    const stepCapacity = 60 / Math.max(step.processTimeMinutes, 0.1);
    return Math.min(minimum, resource.capacityPerHour, stepCapacity);
  }, Number.POSITIVE_INFINITY);
};

const getQueueRatio = (resource: Resource): number => resource.queue / Math.max(resource.maxQueue, 1);

export const generateAlerts = (state: SimulationState): Alert[] => {
  const nextAlerts = [...state.alerts];
  const timestamp = state.simulatedMinutes;

  state.resources.forEach((resource) => {
    if (resource.currentUtilization >= 95) {
      addAlert(
        nextAlerts,
        "critical",
        `${resource.name} opera al ${resource.currentUtilization.toFixed(0)}% de utilización.`,
        timestamp,
        "utilizacion-critica"
      );
    } else if (resource.currentUtilization >= 85) {
      addAlert(
        nextAlerts,
        "warning",
        `${resource.name} supera el 85% de utilización.`,
        timestamp,
        "utilizacion-alta"
      );
    }

    if (getQueueRatio(resource) >= 0.8) {
      addAlert(
        nextAlerts,
        "warning",
        `La cola de ${resource.name} supera el 80% de su capacidad.`,
        timestamp,
        "cola-alta"
      );
    }
  });

  state.materials.forEach((material) => {
    if (material.currentStock <= 0) {
      addAlert(
        nextAlerts,
        "critical",
        `${material.name} está agotado.`,
        timestamp,
        "stockout"
      );
    } else if (material.currentStock <= material.reorderPoint) {
      addAlert(
        nextAlerts,
        "warning",
        `${material.name} está por debajo del punto de reposición.`,
        timestamp,
        "inventario-bajo"
      );
    }
  });

  state.products.forEach((product) => {
    const routeCapacity = routeCapacityForProduct(state, product.id);
    if (product.demandPerHour > routeCapacity && routeCapacity > 0) {
      addAlert(
        nextAlerts,
        "warning",
        `La demanda de ${product.name} supera la capacidad disponible estimada.`,
        timestamp,
        "demanda-alta"
      );
    }
  });

  const bottleneck = getBottleneckResource(state.resources);
  if (bottleneck && (bottleneck.currentUtilization >= 80 || getQueueRatio(bottleneck) >= 0.55)) {
    addAlert(
      nextAlerts,
      "info",
      `${bottleneck.name} es el principal cuello de botella activo.`,
      timestamp,
      "cuello-botella"
    );
  }

  return nextAlerts.slice(0, 40);
};
