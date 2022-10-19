import { createApp } from 'vue';
import App from './App.vue';
// 必要的一些模块
import router from '@/router';
import i18n from '@/i18n';
import PiniaStroe from '@/store';

import ElementPlus from 'element-plus';
// 全局CSS
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/index.css';
import './assets/css/animate.css';
import './assets/css/base.scss';
import '@/assets/css/reset.scss';
import './assets/css/common.scss';

import './assets/css/team.scss';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.use(PiniaStroe);
app.mount('#app');
