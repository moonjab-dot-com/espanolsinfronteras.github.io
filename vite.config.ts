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
    rollupOptions: {
      output: {
        // Split into focused chunks for better long-term caching.
        // Radix UI primitive packages are kept together (they share internals).
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react-router-dom")) return "vendor-react";
            if (id.includes("/react/"))    return "vendor-react";
            if (id.includes("@tanstack")) return "vendor-query";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("sonner") || id.includes("vaul") || id.includes("cmdk")) return "vendor-extras";
            return "vendor-misc";
          }
        },
      },
    },
  },
}));
