/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  base: './',
  server: {
    port: 8847,
    open: false,
    proxy: {
      '/api/': {
        target: 'http://172.23.16.1:8700', // 测试环境
        changeOrigin: true,
      },
    },
    cors: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      // scss: {},
    },
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    }),
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
});
