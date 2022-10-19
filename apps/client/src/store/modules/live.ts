import { defineStore, StateTree, _GettersTree } from 'pinia';

export const useLiveDataStore = defineStore<
  'liveData',
  ILiveState,
  ILiveGetter,
  ILiveActions
>('liveData', {
  state: () => {
    return {
      liveInfo: {},
    };
  },
  getters: {
    channel() {
      return this.liveInfo?.channel as string;
    },
    livestreamId() {
      return this.liveInfo?.livestreamId as string;
    },
  },
  actions: {
    async updateLiveInfo(data) {
      this.$patch((state) => {
        state.liveInfo = {
          ...state.liveInfo,
          ...data,
        };
      });
    },
  },
});
export interface liveInfoItf {
  channel?: string;
  role?: number;
  userId?: string | any;
  livestreamId?: string;
}
export interface ILiveState extends StateTree {
  liveInfo: liveInfoItf;
}

export interface ILiveGetter extends _GettersTree<ILiveState> {
  channel(): string;
  livestreamId(): string;
}

export interface ILiveActions {
  /** 更新直播信息 */
  updateLiveInfo(data: liveInfoItf): void;
}
