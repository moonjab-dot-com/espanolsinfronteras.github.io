import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL — "/" for custom domain (espanolsinfronteras.org)
  base: "/",

  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    // Development-only: lovable component tagger
    mode === "development" && (() => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { componentTagger } = require("lovable-tagger");
        return componentTagger();
      } catch {
        return null; // silently skip if not installed
      }
    })(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Prevent duplicate React instances when using local packages
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  build: {
    target: "es2020",
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 800,
    // Let Vite/Rollup handle chunk splitting automatically.
    // Custom manualChunks caused circular-dependency initialization errors
    // (vendor-misc called React.createContext before React finished initialising).
  },
}));
