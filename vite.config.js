import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lax-hospital-management-/', // <-- your repo name
  plugins: [react()],
})
