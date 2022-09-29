import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./components/Application";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
