import { defineStore, StateTree, _GettersTree } from 'pinia';

export const useStudent = defineStore('student', {
  state() {
    return {
      info: null,
    };
  },
  actions: {
    updateUserInfo(info: any) {
      this.$patch((state) => {
        state.info = info;
      });
    },
  },
});
