import {
  getApiFinanceUsersInfo,
  GetApiFinanceUsersInfoResponse,
} from '@/services';
import { defineStore, StateTree, _GettersTree } from 'pinia';

export const useUser = defineStore('userInfo', {
  state() {
    return {
      info: {} as GetApiFinanceUsersInfoResponse,
    };
  },
  actions: {
    updateUserInfo(info: any) {
      this.$patch((state) => {
        state.info = info;
      });
    },
    async login() {},
    async getUserInfo() {
      const { info }: any = await getApiFinanceUsersInfo();
      if (info) {
        this.updateUserInfo(info);
      }
    },
  },
});
