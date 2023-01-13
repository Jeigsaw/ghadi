import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  base:'/ghadi/',
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
  })
  ]
});
