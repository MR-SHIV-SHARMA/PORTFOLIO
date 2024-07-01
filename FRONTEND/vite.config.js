import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://backend-theta-taupe.vercel.app",
      },
    },
  },
  plugins: [react()],
});
