import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: process.cwd(),
  configFile: false, // Prevent Vite from looking for config files in parent directories
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
  server: {
    port: 4000,
  },
  build: {
    outDir: 'dist',
  },
}) 