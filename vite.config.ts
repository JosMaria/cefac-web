import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@styles-utils': path.resolve(__dirname, 'src/styles/utils'),
    },
  },
  plugins: [react()],
})
