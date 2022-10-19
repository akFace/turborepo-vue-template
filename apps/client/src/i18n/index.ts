import { useUrlSearchParams } from '@vueuse/core';
import { createI18n } from 'vue-i18n';
import { getLangTypeName, getLangType } from '@ssb/utils';

import EN_US from './lang/en-us';
import ZH_TW from './lang/zh-tw';
/** 语言类型 */
export enum LanguageType {
  ZH_TW = 'zh-tw',
  EN_US = 'en-us',
}

const { languageType, language } = useUrlSearchParams<{
  languageType: string;
  language?: 'zh-tw' | 'en-us';
}>();
console.log('languageType', languageType);

export type ZHTWMessageSchema = typeof ZH_TW;
export type ENUSessageSchema = typeof ZH_TW;

const getLanguageType = () => {
  if (languageType) {
    return getLangTypeName(languageType);
  }
  return language || localStorage.getItem('lang') || 'zh-tw';
};
localStorage.setItem('lang', getLanguageType());
// 通过选项创建 VueI18n 实例
const i18n = createI18n({
  locale: getLanguageType(),
  legacy: false,
  messages: {
    [LanguageType.ZH_TW]: ZH_TW,
    [LanguageType.EN_US]: EN_US,
  },
  globalInjection: true,
});

export function setLangage(langage: LanguageType) {
  const params = useUrlSearchParams('history');
  params.languageType = getLangType(langage);
  localStorage.setItem('lang', langage);
}

export default i18n;
