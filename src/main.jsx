import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";
import "@fontsource-variable/inter";
import "./index.css";

// Plausible analytics is bootstrapped from the inline <script> in index.html
// (CSP-whitelisted via SHA-256 hash). No further setup needed here — the
// useLanguage hook and QualificationModal just call window.plausible(...) directly.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
