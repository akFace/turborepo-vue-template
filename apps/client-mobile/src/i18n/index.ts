import { createI18n } from 'vue-i18n';

import EnUs from './lang/en-us';
import ZhTw from './lang/zh-tw';
import vantEnUS from 'vant/es/locale/lang/en-US';
import vantZhTW from 'vant/es/locale/lang/zh-TW';
import vantZhCn from 'vant/es/locale/lang/zh-CN';
import { getLangType, getLangTypeName } from '@ssb/utils';
import { Locale } from 'vant';
import { useUrlSearchParams } from '@vueuse/core';

/** 语言类型 */
export enum LanguageType {
  ZH_TW = 'zh-tw',
  EN_US = 'en-us',
}
const vantLocaleMap: any = {
  'zh-tw': vantZhTW,
  'en-us': vantEnUS,
  'zh-cn': vantZhCn,
};
const { languageType, language } = useUrlSearchParams();
const lang: any =
  getLangTypeName(languageType) ||
  language ||
  localStorage.getItem('lang') ||
  'zh-tw';
localStorage.setItem('lang', lang);
// vant國際化
Locale.use(lang, vantLocaleMap[lang]);

// 通过选项创建 VueI18n 实例
const i18n = createI18n({
  locale: lang,
  legacy: false,
  globalInjection: true,
  messages: {
    'en-us': EnUs,
    'zh-tw': ZhTw,
  },
});

export function setLangage(langage: LanguageType) {
  const params = useUrlSearchParams('history');
  params.languageType = getLangType(langage);
  localStorage.setItem('lang', langage);
}

export default i18n;
