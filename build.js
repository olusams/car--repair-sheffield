import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

async function customBuild() {
  try {
    await build({
      root: process.cwd(),
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
    console.log('Build completed successfully!')
  } catch (error) {
    console.error('Build failed:', error.message)
  }
}

customBuild() 