import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react({
    babel: {
      plugins: [['babel-plugin-react-compiler']],
    },
  }), flowbiteReact()],
  base: process.env.VITE_BASE_PATH || "/portofolio_randie_sasongko_2026"
})