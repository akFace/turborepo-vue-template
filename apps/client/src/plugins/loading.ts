import { ElLoading } from 'element-plus';
import _ from 'lodash';

let loading: any = null;
let needRequestCount = 0;

//开启loading状态
const startLoading = (text?: string) => {
  loading = ElLoading.service({
    lock: true, //是否锁定屏幕的滚动
    background: 'rgba(0,0,0, 0.5)',
    text: text || '',
  });
};

//关闭loading状态
//在关闭loading为了防止loading的闪动，采用防抖的方法，防抖计时一般采用300-600ms
//在关闭loading之后，我们需注意全局变量导致的V8垃圾回收机制，把没用的变量清空为null
const endLoading = _.debounce(() => {
  loading?.close();
  loading = null;
}, 300);

export const showLoading = (text?: string) => {
  if (needRequestCount == 0 && !loading) {
    startLoading(text);
  }
  needRequestCount++;
};

export const hideLoading = () => {
  if (needRequestCount <= 0) return;
  needRequestCount--;
  needRequestCount = Math.max(needRequestCount, 0);
  if (needRequestCount === 0) {
    endLoading();
  }
};
