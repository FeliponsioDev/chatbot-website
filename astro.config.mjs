import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  output: 'static',
  server: {
    host: true, // Permite conexiones desde todas las interfaces de red
  },
  vite: {
    // Configuración de Vite para mejorar el desarrollo
    server: {
      watch: {
        usePolling: true, // Mejora la detección de cambios en algunos sistemas
      },
    },
    // Evitar advertencias innecesarias
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
});

