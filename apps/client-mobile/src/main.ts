import { createApp, Directive } from 'vue';
import 'lib-flexible';
import App from './App.vue';
// 必要的一些模块
import router from '@/router';
import i18n from '@/i18n';
import store from '@/stores';
// 自定义指令
import directives from '@/directives';
import Vant from 'vant';
import 'vant/lib/index.css';
// 全局CSS
import './assets/css/base.scss';
import './assets/css/mobile/common.scss';
import './assets/css/team.scss';
import './assets/css/vant-theme.scss';

import { initSentry } from './plugins/sentry';
import LoadImg from '@/components/common/loadImg.vue';

const app = createApp(App);
initSentry(app, router);
app.use(router);
app.use(i18n);
app.use(store);
app.use(directives);
app.component('load-img', LoadImg);
app.use(Vant);
app.mount('#app');
