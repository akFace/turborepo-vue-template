import { ElLoading } from 'element-plus';
import { nextTick } from 'vue';
import _ from 'lodash';
let loadingInstance: any = null; //loading 实例
let needLoadingRequestCount = 0; //当前正在请求的数量

//防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
//因为有时会碰到在一次请求完毕后又立刻又发起一个新的请求的情况（比如删除一个表格一行后立刻进行刷新）
//这种情况会造成连续 loading 两次，并且中间有一次极短的闪烁。通过防抖可以让 300ms 间隔内的 loading 便合并为一次，避免闪烁的情况。
const hideLoading = _.debounce(() => {
  loadingInstance.close();
  loadingInstance = null;
}, 300);

export function showLoading(text?: string) {
  if (needLoadingRequestCount === 0 && !loadingInstance) {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      lock: false, //是否锁定屏幕的滚动
      background: 'rgba(0,0,0, 0.5)',
      text: text || '',
    });
  }
  needLoadingRequestCount++;
}
export function closeLoading() {
  nextTick(() => {
    // 以服务的方式调用的 Loading 需要异步关闭
    needLoadingRequestCount--;
    needLoadingRequestCount = Math.max(needLoadingRequestCount, 0); // 保证大于等于0
    if (needLoadingRequestCount === 0) {
      if (loadingInstance) {
        hideLoading();
      }
    }
  });
}
