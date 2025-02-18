import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "postcss.config.js",
  }, server: {
    allowedHosts: ['88a9-41-104-12-16.ngrok-free.app', 'localhost'],
  },
});
