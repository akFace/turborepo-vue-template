<template>
  <div class="coin-animate-box">
    <div class="animate-item" v-for="item in list" :key="item">
      <div class="animate-item-content" :style="animateItemStyle()">
        +{{ +item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
const list = ref([1, 2, 3, 4, 5, 6]);

function randomNum(m: number, n: number) {
  return Math.floor(Math.random() * (n - m + 1)) + m; // 可均衡获取 m 到 n 的随机整数。
}

const animateItemStyle = () => {
  return {
    'animation-duration': `${randomNum(1, 9)}s`,
  };
};
</script>
<style lang="scss" scoped>
.coin-animate-box {
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 100%;
  .animate-item {
    position: relative;
  }
  .animate-item-content {
    position: absolute;
    bottom: 0;
    pointer-events: none;
    transform: translate(-50%, 0);
    animation: blow 2s ease-in infinite;
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
      transform: translate(-50%, -205px);
      opacity: 0;
    }
  }
}
</style>
