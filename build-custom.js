import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function customBuild() {
  try {
    console.log('Starting custom build...')
    
    await build({
      root: __dirname,
      configFile: false,
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
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
      base: '/',
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      clearScreen: false,
      logLevel: 'info'
    })
    
    console.log('✅ Build completed successfully!')
  } catch (error) {
    console.error('❌ Build failed:', error.message)
    process.exit(1)
  }
}

customBuild() 