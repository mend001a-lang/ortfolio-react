
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuration Vite pour GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/ortfolio-react/',
})
