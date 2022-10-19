import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    lang: localStorage.getItem('lang') || 'zh-tw',
    isLogin: false,
    loading: false,
  }),
  actions: {
    setLang(lang: string) {
      this.$patch((state) => {
        state.lang = lang;
      });
    },
    setIsLogin(isLogin: boolean) {
      this.$patch((state) => {
        state.isLogin = isLogin;
      });
    },
    showLoading() {
      this.$patch((state) => {
        state.loading = true;
      });
    },
    hideLoading() {
      this.$patch((state) => {
        state.loading = false;
      });
    },
  },
});
