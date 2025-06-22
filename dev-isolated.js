import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function startIsolatedDevServer() {
  try {
    console.log('🚀 Starting isolated development server...')
    
    // Create a completely isolated config
    const config = {
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
        host: 'localhost',
      },
      optimizeDeps: {
        // Force esbuild to only look in our project directory
        entries: [path.resolve(__dirname, 'index.html')],
      },
      build: {
        // Prevent esbuild from looking up the directory tree
        rollupOptions: {
          external: [],
        },
      },
    }
    
    const server = await createServer(config)
    
    await server.listen()
    
    console.log('✅ Isolated development server running at:')
    console.log(`   Local: http://localhost:4000/`)
    console.log('\n📝 Press Ctrl+C to stop the server')
    
    // Keep the process alive
    process.on('SIGINT', async () => {
      console.log('\n🛑 Shutting down server...')
      await server.close()
      process.exit(0)
    })
    
  } catch (error) {
    console.error('❌ Failed to start isolated development server:', error.message)
    process.exit(1)
  }
}

startIsolatedDevServer() 