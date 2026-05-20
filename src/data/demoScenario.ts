import type { ScenarioData } from "../models/types";

export const demoScenario: ScenarioData = {
  products: [
    {
      id: "mesa-madera",
      name: "Mesa de madera",
      demandPerHour: 18,
      targetProduction: 150,
      billOfMaterials: [
        { materialId: "madera", quantityPerUnit: 4 },
        { materialId: "tornillos", quantityPerUnit: 20 },
        { materialId: "barniz", quantityPerUnit: 1.2 }
      ],
      route: [
        { resourceId: "corte", processTimeMinutes: 5 },
        { resourceId: "ensamblado", processTimeMinutes: 11 },
        { resourceId: "pintura", processTimeMinutes: 7 },
        { resourceId: "calidad", processTimeMinutes: 3 }
      ]
    },
    {
      id: "silla-madera",
      name: "Silla de madera",
      demandPerHour: 32,
      targetProduction: 260,
      billOfMaterials: [
        { materialId: "madera", quantityPerUnit: 2 },
        { materialId: "tornillos", quantityPerUnit: 12 },
        { materialId: "barniz", quantityPerUnit: 0.7 }
      ],
      route: [
        { resourceId: "corte", processTimeMinutes: 3 },
        { resourceId: "ensamblado", processTimeMinutes: 8 },
        { resourceId: "pintura", processTimeMinutes: 5 },
        { resourceId: "calidad", processTimeMinutes: 2 }
      ]
    }
  ],
  materials: [
    {
      id: "madera",
      name: "Madera",
      unit: "tablas",
      initialStock: 780,
      currentStock: 780,
      reorderPoint: 260
    },
    {
      id: "tornillos",
      name: "Tornillos",
      unit: "unidades",
      initialStock: 4600,
      currentStock: 4600,
      reorderPoint: 1400
    },
    {
      id: "barniz",
      name: "Barniz",
      unit: "litros",
      initialStock: 32,
      currentStock: 32,
      reorderPoint: 24
    }
  ],
  resources: [
    {
      id: "corte",
      name: "Corte",
      capacityPerHour: 52,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 80
    },
    {
      id: "ensamblado",
      name: "Ensamblado",
      capacityPerHour: 34,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 60
    },
    {
      id: "pintura",
      name: "Pintura",
      capacityPerHour: 28,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 46
    },
    {
      id: "calidad",
      name: "Control de calidad",
      capacityPerHour: 60,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 70
    }
  ]
};
