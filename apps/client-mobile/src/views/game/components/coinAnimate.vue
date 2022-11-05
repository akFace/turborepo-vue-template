<template>
  <div :id="id" class="coin-animate-box"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const allList = ref<any>([]);
const moveList = ref<any>([]);
interface IcoinAnimate {
  /*id唯一性*/
  id: string;
  /*id内容*/
  content: string;
}
const props = defineProps({
  // 节点id
  id: {
    type: String,
    default: 'danmu--box--wrap',
  },
  // 最多显示个数, 0 表示不限制
  trackNum: {
    type: Number,
    default: 0,
  },
});

function randomNum(m: number, n: number) {
  return Math.floor(Math.random() * (n - m + 1)) + m; // 可均衡获取 m 到 n 的随机整数。
}
const addCoin = (item: IcoinAnimate) => {
  allList.value.push(item);
  if (props.trackNum && moveList.value.length >= props.trackNum) {
    return;
  }
  const danmuId = document.getElementById(props.id);
  const boxWidth = danmuId?.clientWidth || 300;
  const boxHeight = danmuId?.clientHeight || 200;
  const duration = randomNum(3, boxHeight / 30);
  const left = `${randomNum(1, boxWidth)}px`;
  const fontSize = `${randomNum(25, 40)}px`;
  const el = document.createElement(`div`);
  danmuId?.style.setProperty('--dm-height-offset', `-${boxHeight}px`);
  const style = `animation-duration: ${duration}s; left: ${left}; font-size: ${fontSize}`;
  const text = `${item.content}`;
  el.setAttribute('style', style);
  el.setAttribute('class', 'animate-item');
  el.setAttribute('data-id', `${item.id}`);
  el.innerHTML = text;
  danmuId?.appendChild(el);
  moveList.value.push(item);
  el.addEventListener('animationend', () => {
    const moveId = el.getAttribute('data-id');
    moveList.value = moveList.value.filter(
      (m: IcoinAnimate) => m.id !== moveId
    );
    allList.value = allList.value.filter((m: IcoinAnimate) => m.id !== moveId);
    danmuId?.removeChild(el);
    if (allList.value.length) {
      allList.value.forEach((val: IcoinAnimate) => {
        const has = moveList.value.find((n: IcoinAnimate) => n.id === val.id);
        if (!has) addCoin(val);
      });
    }
  });
};

defineExpose({
  addCoin,
});
</script>
<style lang="scss">
.coin-animate-box {
  position: relative;
  display: flex;
  height: 100%;
  .animate-item {
    position: absolute;
    bottom: 0;
    pointer-events: none;
    transform: translate(-50%, 0);
    animation: blow 2s ease-in running;
    transition: all 400ms ease;
  }
  @keyframes blow {
    0% {
      transform: translate(-50%, 0) scale(0.1);
      opacity: 0;
    }
    10% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, var(--dm-height-offset));
      opacity: 0;
    }
  }
}
</style>
