import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@themes': '/src/themes',
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
});
