import EventCenter from "./eventCenter";

function isJsonString(str) {
  try {
    if (typeof JSON.parse(str) == "object") {
      return true;
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return false;
}

function isObject(data) {
  return Object.prototype.toString.call(data) === "[object Object]";
}

function JsonParse(data) {
  return isJsonString(data) ? JSON.parse(data) : data;
}
class Ws {
  // 要连接的URL
  url;

  // 配置
  options = {
    // 一个协议字符串或一个协议字符串数组。
    // 这些字符串用来指定子协议，这样一个服务器就可以实现多个WebSocket子协议
    protocols: null,
    hasHeartBeat: false, // 是否需要心跳
    heartBeat: null, // 外部传进来的配置
  };

  // 心跳默认配置
  heartBeat = {
    code: 11, // 心跳code码
    time: 15 * 1000, // 心跳时间间隔
    timeout: 3 * 1000, // 心跳超时间隔
    message: {
      code: 10,
    }, // 心跳发送的内容
  };

  // WebSocket 实例
  ws;
  // 是否在重连中
  isReconnectionLoading = false;
  // 延时重连的 id
  timeId = null;
  // 是否是用户手动关闭连接
  isCustomClose = false;
  // 错误消息队列
  errorStack = [];
  // 消息管理中心
  eventCenter = new EventCenter();

  // soket链接状态
  webSocketState = false;

  constructor(url, options) {
    this.url = url;
    const opt = options || {};
    this.options = {
      ...this.options,
      ...opt,
    };
    this.heartBeat = {
      ...this.heartBeat,
      ...opt.heartBeat,
    };
    this.createWs();
  }

  createWs() {
    if ("WebSocket" in window) {
      // 实例化
      if (this.options.protocols) {
        this.ws = new WebSocket(this.url, this.options.protocols);
      } else {
        this.ws = new WebSocket(this.url);
      }
      // 监听事件
      this.onopen();
      this.onerror();
      this.onclose();
      this.onmessage();
      this.startHeartBeat();
    } else {
      console.error("你的浏览器不支持 WebSocket");
    }
  }

  // 监听成功
  onopen() {
    this.ws.onopen = () => {
      console.log(this.ws, "onopen");
      // 发送成功连接之前所发送失败的消息
      this.errorStack.forEach((message) => {
        this.send(message);
      });
      this.errorStack = [];
      this.isReconnectionLoading = false;
    };
  }

  // 监听错误
  onerror() {
    this.ws.onerror = (err) => {
      console.error(err, "onerror");
      this.reconnection();
      this.isReconnectionLoading = false;
    };
  }

  // 监听关闭
  onclose() {
    this.ws.onclose = () => {
      console.log("onclose");

      // 用户手动关闭的不重连
      if (this.isCustomClose) return;

      this.reconnection();
      this.isReconnectionLoading = false;
    };
  }

  // 接收 WebSocket 消息
  async onmessage() {
    this.ws.onmessage = (event) => {
      try {
        const data = JsonParse(event.data);
        if (!isObject(data)) {
          return;
        }
        switch (data.code) {
          case this.heartBeat.code: //心跳
            this.webSocketState = true;
            break;
          default:
            console.log("收到消息", data);
            this.eventCenter.emit("message", data);
            break;
        }
      } catch (error) {
        console.log(error, "error");
      }
    };
  }

  // 重连
  reconnection() {
    // 防止重复
    if (this.isReconnectionLoading) return;

    this.isReconnectionLoading = true;
    clearTimeout(this.timeId);
    this.timeId = setTimeout(() => {
      this.createWs();
    }, 3000);
  }

  // 发送消息
  send(message) {
    if (!this.ws) {
      return new Error("websocket is not init");
    }
    // 连接失败时的处理
    if (this.ws.readyState !== 1) {
      this.errorStack.push(message);
      return;
    }
    const sendData = JSON.stringify(message);
    this.ws.send(sendData);
  }

  /*
   * 心跳初始函数
   * @param time：心跳时间间隔
   */
  startHeartBeat() {
    if (!this.options.hasHeartBeat) {
      return;
    }
    setTimeout(() => {
      this.send(this.heartBeat.message);
      this.waitingServer();
    }, this.heartBeat.time);
  }
  waitingServer() {
    this.webSocketState = false; //在线状态
    setTimeout(() => {
      if (this.webSocketState) {
        this.startHeartBeat(this.heartBeat.time);
        return;
      }
      console.log("心跳无响应，已断线");
      this.close();
      //重连操作
    }, this.heartBeat.timeout);
  }

  // 手动关闭
  close() {
    this.isCustomClose = true;
    this.ws && this.ws.close();
  }

  // 手动开启
  start() {
    this.isCustomClose = false;
    this.reconnection();
  }

  // 订阅
  subscribe(eventName, cb) {
    this.eventCenter.on(eventName, cb);
  }

  // 取消订阅
  unsubscribe(eventName, cb) {
    this.eventCenter.off(eventName, cb);
  }

  // 销毁
  destroy() {
    this.close();
    this.errorStack = null;
    this.eventCenter = null;
    this.ws = null;
  }
}

export default Ws;
