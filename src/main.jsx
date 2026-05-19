import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import "@fontsource-variable/inter";
import "./index.css";

// Plausible event-queue stub — buffers any window.plausible() calls fired before
// the async analytics script finishes loading. When the real script lands, it
// drains this queue. Lives here (in a CSP-`self`-allowed bundle) instead of as
// an inline <script> so we can keep a strict CSP without `'unsafe-inline'`.
if (typeof window !== "undefined") {
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
