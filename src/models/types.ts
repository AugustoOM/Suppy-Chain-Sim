export interface MaterialRequirement {
  materialId: string;
  quantityPerUnit: number;
}

export interface ProductionStep {
  resourceId: string;
  processTimeMinutes: number;
}

export interface Product {
  id: string;
  name: string;
  demandPerHour: number;
  targetProduction: number;
  billOfMaterials: MaterialRequirement[];
  route: ProductionStep[];
}

export interface Material {
  id: string;
  name: string;
  unit: string;
  initialStock: number;
  currentStock: number;
  reorderPoint: number;
}

export interface Resource {
  id: string;
  name: string;
  capacityPerHour: number;
  maxUtilization: number;
  currentUtilization: number;
  queue: number;
  maxQueue: number;
}

export interface Alert {
  id: string;
  type: "info" | "warning" | "critical";
  message: string;
  timestamp: number;
}

export interface SimulationMetrics {
  totalCompletedUnits: number;
  completedUnitsByProduct: Record<string, number>;
  demandFulfillmentPercentage: number;
  averageResourceUtilization: number;
  bottleneckResourceId: string | null;
  materialsConsumed: Record<string, number>;
  materialsRemaining: Record<string, number>;
  activeAlerts: number;
  estimatedLostProduction: number;
}

export interface SimulationState {
  isRunning: boolean;
  simulatedMinutes: number;
  speed: number;
  products: Product[];
  materials: Material[];
  resources: Resource[];
  completedUnitsByProduct: Record<string, number>;
  alerts: Alert[];
  metrics: SimulationMetrics;
}

export interface ScenarioData {
  products: Product[];
  materials: Material[];
  resources: Resource[];
}
