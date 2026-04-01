import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'real-estate': resolve(__dirname, 'real-estate.html'),
        'construction': resolve(__dirname, 'construction.html'),
        'import-export': resolve(__dirname, 'import-export.html'),
        'business-solutions': resolve(__dirname, 'business-solutions.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
