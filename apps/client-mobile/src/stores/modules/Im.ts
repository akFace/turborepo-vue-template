import { defineStore, StateTree, _GettersTree } from 'pinia';
import Ws from '@/plugins/socket/ws';
import config from '@/config';
interface IsocketOption {
  url?: string;
  userId?: string;
  options?: any;
}

export const useIm = defineStore<
  'im',
  ImStoreState,
  ImStoreGetters,
  ImStoreActions
>('im', {
  state: () => {
    return {
      client: null,
      messageList: [],
    };
  },
  actions: {
    // 初始化soket
    initWebSocket(data: IsocketOption) {
      if (this.client) {
        return console.error('请勿重复初始化websocket');
      }
      const wsURL = data?.url || `${config.ws}/${data.userId}`;
      const wWS = new Ws(wsURL, {
        hasHeartBeat: true,
        ...data?.options,
      });
      this.client = wWS;
    },
    handleMessage() {
      const handleChat = (event: any) => {
        const msg = event.data;
        if (msg) {
          this.messageList.push(msg);
        }
      };
      // 订阅收到的消息
      this.client?.subscribe('message', handleChat);
    },
    // 退出登录
    logoutSoket() {
      this.client?.destroy();
    },
    sendMessage(msg: any) {
      this.client?.send(msg);
    },
  },
});

export interface ImStoreState extends StateTree {
  /** 直播间信息源数据 */
  client: Ws | null;
  /** 网络质量 */
  messageList: Array<Imessage>;
}

export interface ImStoreGetters extends _GettersTree<ImStoreState> {
  /* 是否已初始化 */
  isInit(): Boolean;
}
export interface ImStoreActions {
  /** 修改水印配置 */
  initWebSocket(data: IsocketOption): void;
  handleMessage(): void;
  logoutSoket(): void;
  sendMessage(msg: Imessage): void;
}

export interface Imessage {}
