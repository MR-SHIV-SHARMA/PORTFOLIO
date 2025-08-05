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
        target: "https://shivs-io.vercel.app/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom', 'react-router-hash-link'],
          icons: ['react-icons', 'react-social-icons'],
          animations: ['framer-motion']
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    cssMinify: true
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'react-router-hash-link',
      'react-icons/fi',
      'react-icons/fa',
      'react-social-icons',
      'framer-motion'
    ]
  }
});
