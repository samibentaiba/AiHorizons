import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginSvgr from "vite-plugin-svgr";
import svgr from "vite-plugin-svgr";
export default defineConfig({
  plugins: [react(), vitePluginSvgr(), svgr()],
  css: {
    postcss: "postcss.config.js",
  }, server: {
    allowedHosts: ['839c-41-109-64-25.ngrok-free.app', 'localhost'],
  },
});
