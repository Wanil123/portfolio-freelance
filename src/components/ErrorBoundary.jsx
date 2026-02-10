// src/components/ErrorBoundary.jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const isFr = typeof document !== "undefined" && document.documentElement.lang === "fr";
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-8">
          <div className="text-center max-w-md">
            <div className="text-5xl mb-6">⚠️</div>
            <h1 className="text-2xl font-bold mb-3">
              {isFr ? "Une erreur est survenue" : "An error occurred"}
            </h1>
            <p className="text-slate-400 mb-6">
              {isFr
                ? "Veuillez rafraîchir la page. Si le problème persiste, contactez-moi."
                : "Please refresh the page. If the problem persists, contact me."}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 transition-all"
            >
              {isFr ? "Rafraîchir la page" : "Refresh the page"}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
