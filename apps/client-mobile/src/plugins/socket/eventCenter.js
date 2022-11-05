class EventCenter {
  // 通过事件类型作为属性来管理不通的事件回调
  eventStack = {};

  constructor() {
    this.eventStack = {};
  }

  on(eventName, cb) {
    const { eventStack } = this;
    const eventValue = eventStack[eventName];

    eventValue ? eventValue.push(cb) : (eventStack[eventName] = [cb]);
  }

  once(eventName, cb) {
    const { eventStack } = this;
    const eventValue = eventStack[eventName];
    // 利用闭包的形式 来模拟一次性监听的功能函数
    const tempCb = () => {
      let isOutOfDate = false;

      return () => {
        if (isOutOfDate) return;
        cb();
        isOutOfDate = true;
      };
    };

    eventValue
      ? eventValue.push(tempCb())
      : (eventStack[eventName] = [tempCb()]);
  }

  off(eventName, cb) {
    const { eventStack } = this;
    const eventValue = eventStack[eventName];

    if (!eventValue) return;

    (eventValue || []).forEach((eventCb, index) => {
      if (eventCb === cb) {
        eventValue.splice(index, 1);
      }
    });
  }

  emit(eventName, data) {
    const { eventStack } = this;
    const eventValue = eventStack[eventName];

    if (!eventValue) return;

    (eventValue || []).forEach((eventCb) => {
      eventCb(data);
    });
  }
}

export default EventCenter;
