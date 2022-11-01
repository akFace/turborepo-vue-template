import { createApp } from 'vue';
import 'lib-flexible';
import App from './App.vue';
import Vue3Tour from 'vue3-tour';
import 'vue3-tour/dist/vue3-tour.css';
// 必要的一些模块
import router from '@/router';
import i18n from '@/i18n';
import store from '@/stores';
import Vant from 'vant';
import 'vant/lib/index.css';
// 全局CSS
import './assets/css/base.scss';
import './assets/css/mobile/common.scss';
import './assets/css/team.scss';
import './assets/css/vant-theme.scss';

import LoadImg from '@/components/common/loadImg.vue';

import { initSentry } from './plugins/sentry';

const app = createApp(App);
initSentry(app, router);
app.use(router);
app.use(i18n);
app.use(store);
app.use(Vue3Tour);
app.component('load-img', LoadImg);
app.use(Vant);
app.mount('#app');
