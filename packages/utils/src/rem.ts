export function useRem(dw: number = 1440, rootValue: number = 16) {
  let ds = rootValue / dw;
  let ww = window.innerWidth;
  // let wh = window.innerHeight;
  let rem = ww * ds + 'px'; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
  document.documentElement.style.fontSize = rem;
}
