import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pour GitHub Pages sur un repo utilisateur `aywanfass.github.io`, base doit rester "/"
  base: "/",
  server: {
    port: 5173,
    open: true,
    proxy: {
      // Proxy des appels API vers le backend Spring en dev
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: "dist"
  }
});