import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Esta es la carpeta que Vite creará automáticamente
    emptyOutDir: true,
    manifest: true // Genera un manifest.json para mejor cache
  },
  server: {
    historyApiFallback: true // Importante para SPA
  }
})