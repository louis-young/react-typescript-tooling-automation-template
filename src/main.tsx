import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./components/Application";
import "./index.css";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");

  worker.start({ onUnhandledRequest: "bypass" });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
