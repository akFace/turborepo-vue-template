declare interface Window {
  TcPlayer: any;
  lifecycle: any;
}
// 第三方库没有types的引用
declare module 'page-lifecycle' {
  export {
    addEventListener,
    removeEventListener,
    addUnsavedChanges,
    removeUnsavedChanges,
  } from 'page-lifecycle';
}
declare module 'js-image-compressor';
