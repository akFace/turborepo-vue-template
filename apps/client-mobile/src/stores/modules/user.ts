import { getUsersInfo, GetUsersInfoResponse } from '@/services';
import { defineStore, StateTree, _GettersTree } from 'pinia';

export const useUser = defineStore('userInfo', {
  state() {
    return {
      userInfo: {} as GetUsersInfoResponse['info'],
    };
  },
  actions: {
    updateUserInfo(info: any) {
      this.$patch((state) => {
        state.userInfo = info;
      });
    },
    async login() {},
    async getUserInfoByApi() {
      const { info }: any = await getUsersInfo();
      if (info) {
        this.updateUserInfo(info);
      }
    },
  },
});
