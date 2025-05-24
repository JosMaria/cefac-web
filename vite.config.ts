import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@styles-utils': path.resolve(__dirname, 'src/styles/utils'),
      '@cefac/services': path.resolve(__dirname, 'src/services'),
      '@cefac/config': path.resolve(__dirname, 'src/config'),
    },
  },
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  }
})
