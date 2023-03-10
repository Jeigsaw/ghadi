import { defineConfig } from 'vite';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base:'/ghadi/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        docs: resolve(__dirname, 'docs.html'),
      },
    },
  },
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },

      manifest: {
        "name": "ghadi",
        "short_name": "ghadi",
        "description": "A clock without numbers",
        "id": "/ghadi/",
        "scope": "/ghadi/",
        "start_url": "/ghadi/",
        "orientation": "portrait-primary",
        "icons": [
            {
              "src": "/ghadi/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/ghadi/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
            },
            {
              "src": "/ghadi/icon-max.png",
              "sizes": "1024x1024",
              "type": "image/png",
              "purpose": "maskable"
            }
        ],
        "theme_color": "#1a2825",
        "background_color": "#1a2825",
        "display": "standalone"
      }
    
    })
  ]
});
