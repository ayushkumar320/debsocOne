import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        resolve(__dirname),           // allow root project folder
        resolve(__dirname, 'public'), // allow public explicitly
      ],
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/DebateTimer\/.*$/, to: '/DebateTimer/index.html' },
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        debateTimer: resolve(__dirname, 'index.html'),
      },
    },
  },
});
