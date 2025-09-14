import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@features': '/src/features',
      '@config': '/src/config',
      '@types': '/src/types',
      '@lib': '/src/lib/',
      '@hooks': '/src/hooks',
      '@styles': '/src/styles',
      '@store': '/src/store'
    }
  }
})
