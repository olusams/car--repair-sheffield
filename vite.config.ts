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
  preview: {
    port: 4000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  // Prevent Vite from looking outside the project directory
  clearScreen: false,
  logLevel: 'info'
}) 