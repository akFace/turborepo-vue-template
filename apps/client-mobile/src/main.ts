import { createApp } from 'vue';
import 'lib-flexible';
import App from './App.vue';
// 必要的一些模块
import router from '@/router';
import i18n from '@/i18n';
import store from '@/stores';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/vant-theme.scss';
// 全局CSS
import './assets/css/base.scss';
import './assets/css/mobile/common.scss';
import './assets/css/team.scss';

import LoadImg from '@/components/common/loadImg.vue';

import { initSentry } from './plugins/sentry';

const app = createApp(App);
initSentry(app, router);
app.use(router);
app.use(i18n);
app.use(store);
app.component('load-img', LoadImg);
app.use(Vant);
app.mount('#app');
