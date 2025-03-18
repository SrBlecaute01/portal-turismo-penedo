import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log("using base path: " + env.VITE_BASE_URL)
  return {
    plugins: [react(), svgr()],
    base: env.VITE_BASE_URL,
  };
});