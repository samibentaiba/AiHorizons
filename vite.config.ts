import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "postcss.config.js",
  }, server: {
    allowedHosts: ['839c-41-109-64-25.ngrok-free.app', 'localhost'],
  },
});
