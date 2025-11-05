import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/soccer-dashboard-repo/', // 👈 must match your GitHub repo name exactly
})
