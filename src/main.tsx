/**
 * main.tsx
 * ---------------------------------------------------------------------------
 * App entry. Imports the stylesheets, applies the theme tokens to :root (so a
 * future builder can swap themes at runtime), then mounts the router app.
 * ---------------------------------------------------------------------------
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/theme.css";
import "./styles/globals.css";

import { applyTheme } from "./lib/applyTheme";
import { themeConfig } from "./config/themeConfig";
import App from "./App";

// Write theme tokens as CSS variables before first paint.
applyTheme(themeConfig);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
