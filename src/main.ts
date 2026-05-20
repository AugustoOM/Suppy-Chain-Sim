import "./styles.css";
import { renderApp } from "./ui/renderApp";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No se encontró el contenedor principal de la aplicación.");
}

renderApp(root);
