// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://shivs-io.vercel.app',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
//   build: {
//     outDir: 'dist',  // Ensure this matches your deployment settings
//   },
//   base: './', // Adjust the base path if needed
//   plugins: [react()],
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://shivs-io.vercel.app",
        // changeOrigin: true,  // Ensure the origin of the host header is changed to the target URL
        // secure: false,       // Disable SSL verification if needed (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove /api prefix if not needed by the backend
      },
    },
  },
  plugins: [react()],
});
