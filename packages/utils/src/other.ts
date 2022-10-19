export function getUrlParam(name: string, url?: string) {
  var re = new RegExp('[\\?&#]' + name + '=([^&#]+)', 'gi');
  var ma = (url || window.location.href).match(re);
  var strArr;
  if (ma && ma.length > 0) {
    strArr = ma[ma.length - 1];
    var _index = strArr.indexOf('=');
    return strArr.substring(_index + 1);
  }
  return '';
}

// 用于加载水印图片
function loadImage(imageUrl: string) {
  // @ts-ignore
  return new Promise((resolve) => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => resolve(image);
  });
}

let sourceVideoTrack: any = null;
let sourceStream = null;
let intervalId: any = 0;
let video: any = null;
interface WaterMark {
  localStream?: any;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  imageUrl?: string;
}

export async function startWaterMark({
  localStream,
  x,
  y,
  width,
  height,
  imageUrl,
}: WaterMark) {
  // 2. 创建 video 标签播放视频流
  sourceStream = localStream;
  const video = document.createElement('video');
  sourceVideoTrack = localStream.getVideoTrack();
  const mediaStream = new MediaStream();
  mediaStream.addTrack(sourceVideoTrack);
  video.srcObject = mediaStream;
  await video.play();
  // 3. 加载水印图片
  const image: any = await loadImage(imageUrl as string);
  // 4. 创建 canvas 标签，并使用 setInterval 将视频和水印绘制到 canvas 画布中
  const canvas = document.createElement('canvas');
  const ctx: any = canvas.getContext('2d');
  const settings = sourceVideoTrack.getSettings();
  canvas.width = settings.width;
  canvas.height = settings.height;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = 0;
  }

  const imageWidth = width || image.width;
  const imageHeight = height || image.height;
  intervalId = setInterval(() => {
    // 将视频绘制到画布中
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // 将水印图片绘制到画布中，可以控制水印的位置和大小
    if ((x as number) < 0) {
      x = canvas.width - imageWidth + (x as number);
    }
    ctx.drawImage(image, x, y, imageWidth, imageHeight);
  }, Math.floor(1000 / settings.frameRate)); // 根据帧率计算每次绘制的时间间隔
  // 5. 使用 canvas.captureStream 从画布中采集视频流，使用 LocalStream.replaceTrack 替换视频流
  const canvasStream = canvas.captureStream();
  await localStream.replaceTrack(canvasStream.getVideoTracks()[0]);
}

// 关闭水印
export async function stopWaterMark(stream: any) {
  if (intervalId && sourceVideoTrack) {
    clearInterval(intervalId);
    intervalId = 0;
    if (stream) {
      await stream.replaceTrack(sourceVideoTrack);
    }
    if (video) {
      video.srcObject = null;
      video = null;
    }
  }
}

export const getTimestamp = (dateTime: string) => {
  dateTime = dateTime || '';
  return new Date(dateTime.replace(/\-/g, '/')).getTime();
};

export const timeFormat = (dateTime: string, format: string) => {
  dateTime = dateTime.replace(/\-/g, '/');
  format = format || 'yyyy-MM-dd hh:mm:ss';
  var dateObj = new Date(dateTime);
  var date: any = {
    'M+': dateObj.getMonth() + 1,
    'd+': dateObj.getDate(),
    'h+': dateObj.getHours(),
    'm+': dateObj.getMinutes(),
    's+': dateObj.getSeconds(),
    'q+': Math.floor((dateObj.getMonth() + 3) / 3),
    'S+': dateObj.getMilliseconds(),
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (var k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ('00' + date[k]).substr(('' + date[k]).length)
      );
    }
  }
  return format;
};

export const languageIntroduce = (list = [], type: any) => {
  type = type || '1';
  for (let introduce of list) {
    if ((introduce as any).languageType == type) {
      return introduce;
    }
  }
  return { introduction: '', name: '', languageType: '' };
};

export function getTime(date: any, withSecond = false) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return withSecond
    ? `${addZeroPrefix(hour)}:${addZeroPrefix(minute)}:${addZeroPrefix(second)}`
    : `${hour}:${addZeroPrefix(minute)}`;
}
function addZeroPrefix(number: number) {
  return number < 10 ? `0${number}` : number;
}

export function uuid() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0; // d是随机种子
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

/** 传入messageBody（群系统消息SystemMessage，群提示消息GroupTip除外）
 * payload = {
 *  msgType: 'TIMTextElem',
 *  msgContent: {
 *    text: 'AAA[龇牙]AAA[龇牙]AAA[龇牙AAA]'
 *  }
 *}
 **/
// export function decodeText(payload: any) {
//   let renderDom = [];
//   // 文本消息
//   let temp = payload;
//   if (typeof payload != 'string') {
//     temp = payload.text;
//   }
//   let left = -1;
//   let right = -1;
//   while (temp !== '') {
//     left = temp.indexOf('[');
//     right = temp.indexOf(']');
//     switch (left) {
//       case 0:
//         if (right === -1) {
//           renderDom.push({
//             name: 'text',
//             text: temp,
//           });
//           temp = '';
//         } else {
//           let _emoji = temp.slice(0, right + 1);
//           if (emojiMap[_emoji]) {
//             renderDom.push({
//               name: 'img',
//               src: emojiUrl + emojiMap[_emoji],
//             });
//             temp = temp.substring(right + 1);
//           } else {
//             renderDom.push({
//               name: 'text',
//               text: '[',
//             });
//             temp = temp.slice(1);
//           }
//         }
//         break;
//       case -1:
//         renderDom.push({
//           name: 'text',
//           text: temp,
//         });
//         temp = '';
//         break;
//       default:
//         renderDom.push({
//           name: 'text',
//           text: temp.slice(0, left),
//         });
//         temp = temp.substring(left);
//         break;
//     }
//   }
//   return renderDom;
// }

/** 将base64转换为文件对象
 *  @param {String} base64 base64字符串
 * @param type
 * */
export function b64toBlob(base64: string, type: string = 'image/png') {
  let base64Arr = base64.split(',');
  let base64String = '';
  if (base64Arr.length > 1) {
    //如果是图片base64，去掉头信息
    base64String = base64Arr[1];
    type = base64Arr[0].substring(
      base64Arr[0].indexOf(':') + 1,
      base64Arr[0].indexOf(';')
    );
  }
  // 将base64解码
  const bytes = atob(base64String);
  //const bytes = base64;
  const bytesCode = new ArrayBuffer(bytes.length);
  // 转换为类型化数组
  const byteArray = new Uint8Array(bytesCode);

  // 将base64转换为ascii码
  for (let i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i);
  }
  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type });
}

/** 深拷貝
 * @param obj
 * */
export function deepClone(obj: any) {
  // 判断是否需要递归
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result: any;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

export function getLangType(langName?: string) {
  const langTypeMap: any = {
    'zh-cn': '1',
    'zh-tw': '2',
    'en-us': '3',
  };
  const lang = langName || localStorage.getItem('lang');
  return langTypeMap[lang || 'zh-tw'];
}

export function getLangTypeName(type: any) {
  const types = parseInt(type);
  let name = '';
  switch (types) {
    case 1:
      name = 'zh-cn';
      break;
    case 2:
      name = 'zh-tw';
      break;
    case 3:
      name = 'en-us';
      break;
  }
  return name;
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function JsonParse(data: any) {
  return isObject(data) ? data : JSON.parse(data);
}
