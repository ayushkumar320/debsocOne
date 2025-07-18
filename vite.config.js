<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
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
>>>>>>> 27746fea2ce12bb3d21566277ec6af8fa8b680c8
