import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./components/Application";
import { Providers } from "./components/Providers";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");

  worker.start({ onUnhandledRequest: "bypass" });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Application />
    </Providers>
  </React.StrictMode>,
);
