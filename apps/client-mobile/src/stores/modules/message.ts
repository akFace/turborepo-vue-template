import { defineStore, StateTree, _GettersTree } from 'pinia';
import {
  createClient,
  CustomMsgAction,
  CustomMsgType,
  ICreateClientOptions,
  ICustomMessage,
  IMClient,
} from '@shixiyi/im-core';
import { showToast } from '@shixiyi/utils';
import config from '@/config';
export const useMessage = defineStore<
  'message',
  ImStoreState,
  ImStoreGetters,
  ImStoreActions
>('message', {
  state: () => {
    return {
      client: null,
      messageList: [],
      isLoginIm: false,
      userNetWorkState: null,
    };
  },
  actions: {
    // 初始化soket
    async initTimClient(options) {
      if (this.client) {
        return Promise.reject(false);
      }
      const { sdkAppId, userId, userSig, channel } = options;
      this.client = await createClient({
        sdkAppId,
        userId,
        userSig,
        channel,
      });
      this.initTimEvent();
    },
    async initTimEvent() {
      if (this.client) {
        try {
          const needJoinGroup = false;
          await this.client.login(needJoinGroup);
        } catch (e) {
          this.isLoginIm = false;
          showToast('IM登录失败');
          return;
        }
        this.isLoginIm = true;
        // 收到消息
        this.client.on('MESSAGE_RECEIVED', this.handleReceived);
        // 收到用户中奖
        // this.client.on('PRIZE', this.handlePrize);
        // 被踢出
        this.client.on('KICKED_OUT', this.handleKickedOut);
        // 监听网络变化
        this.client.on('NETWORK_STATE_CHANGE', this.handleNetWorkStateChange);
      }
    },
    handleReceived(data) {
      this.messageList.push(data);
    },
    handlePrize(data) {
      console.log('🚀 ~ file: message.ts ~ line 65 ~ handlePrize ~ data', data);
    },
    handleKickedOut(event) {
      showToast('您已被踢出群聊');
    },
    handleNetWorkStateChange(event) {
      this.userNetWorkState = event;
    },
  },
});

export interface ImStoreState extends StateTree {
  /** 直播间信息源数据 */
  client: IMClient | null;
  /** 消息列表 */
  messageList: Array<ICustomMessage>;
  /** 是否已登录 */
  isLoginIm: boolean;
  /** 网络质量 */
  userNetWorkState: 'connecting' | 'connected' | 'disconnected' | null;
}

export interface ImStoreGetters extends _GettersTree<ImStoreState> {
  /* 是否已初始化 */
  isInit(): Boolean;
}
export interface ImStoreActions {
  /** 初始化timEvent */
  initTimEvent(): Promise<void>;
  /** 初始化tim客户端 */
  initTimClient(options: ICreateClientOptions): Promise<void>;
  /** 收到消息 */
  handleReceived(data: ICustomMessage): void;
  /** 被踢出 */
  handleKickedOut(event: any): void;
  /** 监听网络变化 */
  handleNetWorkStateChange(event: any): void;
  /** 收到奖品 */
  handlePrize(data: any): void;
}

export interface Imessage {}
