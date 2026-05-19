import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) =>{
  const isGithubPages = process.env.BUILD_TARGET === 'raspberry';

  return{
    base: command === "serve" ? "/" : "/steno-hjerte2/",
  plugins: [react(), legacy({
      targets: ['chrome >= 69'],   // BrightSign HD5 OS9 kører Chromium ~69-94
      renderLegacyChunks: true,
    }), tailwindcss()],
  }
  
})