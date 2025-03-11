// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3030,
    strictPort: true, // exit if port is already in use
  },
});
