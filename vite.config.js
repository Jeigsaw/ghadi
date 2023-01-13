import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  base:'/ghadi/',
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
                "type": "image/png"
            }
        ],
        "theme_color": "#1a2825",
        "background_color": "#1a2825",
        "display": "standalone"
      }
    
    })
  ]
});
