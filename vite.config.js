import { defineConfig } from 'vite';

export default defineConfig({
  base: '/SpaceShooter/', // Gebruik de repository naam als base URL
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
