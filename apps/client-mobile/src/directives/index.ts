// import directives
import { App } from 'vue';
import copy from './copy';
import longpress from './longpress';
import draggable from './draggable';

const directivesList: any = {
  // Custom directives
  copy,
  longpress,
  draggable,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      // 注册自定义指令
      app.directive(key, directivesList[key]);
    });
  },
};

export default directives;
