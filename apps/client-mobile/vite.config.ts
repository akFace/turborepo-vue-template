import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias';
import postCssPxToRem from 'postcss-pxtorem';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 8846,
    open: false,
    host: '0.0.0.0',
    proxy: {
      '/livefront/': {
        // target: 'http://43.129.181.111',
        target: 'https://m.fruitmedia-hk.com',
        // target: 'http://livestream.inet',
        changeOrigin: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: ({ file }) => {
            // 处理vant-ui的样式
            return 37.5;
          },
          propList: ['*'],
          // 过滤掉的样式转换
          selectorBlackList: ['toastify'],
          minPixelValue: 3,
        }),
        require('autoprefixer')({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            '> 1%',
          ],
          grid: true,
        }),
        require('postcss-flexbugs-fixes'),
      ],
    },
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        // 全局样式变量
        additionalData: '@import "./src/assets/css/variables.scss";',
      },
    },
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    }),
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
});
