# Nutriscone - Simulador de Producción de Scones

Aplicación web para simular el flujo de producción de alimentos, enfocada en scones. Permite modelar recetas, ingredientes, estaciones de trabajo, consumo de inventario, utilización de recursos, colas y alertas operativas.

## Funcionalidades

- Simulación de producción por minuto para distintas recetas de scones.
- Configuración de demanda por hora y objetivo de producción.
- Inventario de ingredientes con stock inicial, stock actual y punto de reposición.
- Rutas de proceso con etapas como pesado, mezclado, formado, horneado, enfriado y empaque.
- Métricas de producción total, cumplimiento de demanda, utilización promedio y cuello de botella.
- Alertas por bajo inventario, sobreutilización, colas altas y capacidad insuficiente.
- Guardado, carga y exportación de escenarios desde el navegador.
- Vista 3D con A-Frame para visualizar la línea de producción configurada.

## Paleta visual

La interfaz utiliza la paleta definida para el proyecto:

- `#FBF4E4`
- `#7B5434`
- `#E2864A`
- `#C4B687`

Los iconos se implementan con la librería `lucide` y la visualización 3D con `aframe`.

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

La app se sirve con Vite en `127.0.0.1`. La terminal mostrará el puerto disponible.

## Compilar para producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Estructura principal

```text
src/
  data/demoScenario.ts          Escenario inicial de producción de scones
  models/types.ts               Tipos de recetas, ingredientes, estaciones y estado
  simulation/                   Motor de simulación, métricas y alertas
  storage/                      Persistencia local y exportación JSON
  ui/                           Renderizado de paneles, dashboard y alertas
  ui/render3DLine.ts            Módulo 3D de línea productiva con A-Frame
  styles.css                    Estilos visuales de la aplicación
```

## Escenario demo

El escenario inicial incluye recetas como:

- Scone clásico
- Scone con arándanos

También incluye ingredientes como harina, manteca, leche, huevo, azúcar, polvo de hornear y arándanos, además de estaciones productivas para representar el flujo real del obrador.

## Notas

La simulación usa una lógica genérica de cadena productiva adaptada al proceso alimentario. Cada receta consume ingredientes según su lista de materiales y avanza por estaciones con tiempos de proceso definidos.

## Vista 3D

La pestaña `3D Línea` muestra las estaciones de la receta seleccionada como cajas conectadas entre sí, siguiendo el flujo definido en `Configuración`. Por ahora las estaciones son placeholders con nombre y tiempo de proceso; sus diseños específicos pueden incorporarse más adelante.
