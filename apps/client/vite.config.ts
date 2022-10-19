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
    port: 9002,
    open: false,
    proxy: {
      '/livefront/': {
        // target: 'http://live-front-api.inet', // 开发内网环境
        target: 'https://t.fruitmedia-hk.com', // 测试环境
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
