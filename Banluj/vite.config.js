import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    include: ['pouchdb-browser'],
  },
  build: {
    sourcemap: true, // Habilita sourcemaps para depuración
    commonjsOptions: {
      include: [/pouchdb-browser/, /node_modules/],
    },
  },
});