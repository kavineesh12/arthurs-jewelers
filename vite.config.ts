import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works both at a domain root and under a
  // GitHub Pages subpath (username.github.io/<repo>/).
  base: './',
  plugins: [react(), tailwindcss()],
})
