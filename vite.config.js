import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { reactRouterPlugin } from '@react-router/dev/plugin-vite';
// import { reactRouter } from '@react-router/dev/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // reactRouterPlugin(),
    // reactRouter(),
  ],
})
