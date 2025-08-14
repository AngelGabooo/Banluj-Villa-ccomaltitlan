import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Asegúrate que es '/'
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /\/api\/.*$/, to: (context) => context.parsedUrl.pathname }
      ]
    }
  }
})