import type { ScenarioData } from "../models/types";

export const demoScenario: ScenarioData = {
  products: [
    {
      id: "scone-clasico",
      name: "Scone clásico",
      demandPerHour: 90,
      targetProduction: 720,
      billOfMaterials: [
        { materialId: "harina", quantityPerUnit: 0.075 },
        { materialId: "manteca", quantityPerUnit: 0.018 },
        { materialId: "leche", quantityPerUnit: 0.028 },
        { materialId: "huevo", quantityPerUnit: 0.08 },
        { materialId: "azucar", quantityPerUnit: 0.012 },
        { materialId: "polvo-hornear", quantityPerUnit: 0.003 }
      ],
      route: [
        { resourceId: "pesado", processTimeMinutes: 0.45 },
        { resourceId: "mezclado", processTimeMinutes: 0.7 },
        { resourceId: "formado", processTimeMinutes: 0.55 },
        { resourceId: "horneado", processTimeMinutes: 1.25 },
        { resourceId: "enfriado", processTimeMinutes: 0.5 },
        { resourceId: "empaque", processTimeMinutes: 0.35 }
      ]
    },
    {
      id: "scone-arandanos",
      name: "Scone con arándanos",
      demandPerHour: 64,
      targetProduction: 480,
      billOfMaterials: [
        { materialId: "harina", quantityPerUnit: 0.072 },
        { materialId: "manteca", quantityPerUnit: 0.02 },
        { materialId: "leche", quantityPerUnit: 0.026 },
        { materialId: "huevo", quantityPerUnit: 0.08 },
        { materialId: "azucar", quantityPerUnit: 0.015 },
        { materialId: "polvo-hornear", quantityPerUnit: 0.003 },
        { materialId: "arandanos", quantityPerUnit: 0.022 }
      ],
      route: [
        { resourceId: "pesado", processTimeMinutes: 0.5 },
        { resourceId: "mezclado", processTimeMinutes: 0.8 },
        { resourceId: "formado", processTimeMinutes: 0.65 },
        { resourceId: "horneado", processTimeMinutes: 1.35 },
        { resourceId: "enfriado", processTimeMinutes: 0.55 },
        { resourceId: "empaque", processTimeMinutes: 0.4 }
      ]
    }
  ],
  materials: [
    {
      id: "harina",
      name: "Harina 0000",
      unit: "kg",
      initialStock: 95,
      currentStock: 95,
      reorderPoint: 28
    },
    {
      id: "manteca",
      name: "Manteca fría",
      unit: "kg",
      initialStock: 24,
      currentStock: 24,
      reorderPoint: 7
    },
    {
      id: "leche",
      name: "Leche",
      unit: "litros",
      initialStock: 36,
      currentStock: 36,
      reorderPoint: 10
    },
    {
      id: "huevo",
      name: "Huevo batido",
      unit: "unidades",
      initialStock: 130,
      currentStock: 130,
      reorderPoint: 36
    },
    {
      id: "azucar",
      name: "Azúcar",
      unit: "kg",
      initialStock: 18,
      currentStock: 18,
      reorderPoint: 5
    },
    {
      id: "polvo-hornear",
      name: "Polvo de hornear",
      unit: "kg",
      initialStock: 4.2,
      currentStock: 4.2,
      reorderPoint: 1.2
    },
    {
      id: "arandanos",
      name: "Arándanos",
      unit: "kg",
      initialStock: 12,
      currentStock: 12,
      reorderPoint: 4
    }
  ],
  resources: [
    {
      id: "pesado",
      name: "Pesado de ingredientes",
      capacityPerHour: 180,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 160
    },
    {
      id: "mezclado",
      name: "Mezclado de masa",
      capacityPerHour: 118,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 120
    },
    {
      id: "formado",
      name: "Formado y corte",
      capacityPerHour: 130,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 130
    },
    {
      id: "horneado",
      name: "Horneado",
      capacityPerHour: 92,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 100
    },
    {
      id: "enfriado",
      name: "Enfriado",
      capacityPerHour: 150,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 140
    },
    {
      id: "empaque",
      name: "Empaque",
      capacityPerHour: 170,
      maxUtilization: 100,
      currentUtilization: 0,
      queue: 0,
      maxQueue: 150
    }
  ]
};
