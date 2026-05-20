import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 69'],
      renderLegacyChunks: true,
    }),
    tailwindcss(),
  ],
})