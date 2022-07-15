import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Application } from "./components/Application";
import "./styles/index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;

const root = createRoot(container);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>,
);
