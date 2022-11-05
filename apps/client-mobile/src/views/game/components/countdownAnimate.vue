<template>
  <div class="count-down-animate" :class="{ active: activeEnter }">
    {{ parseInt(`${timeoutNum / 2}`) }}
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, defineProps } from 'vue';
const props = defineProps({
  timeout: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['finish', 'change']);
let timer: any = null;
const timeoutNum = ref(0);
const activeEnter = ref(false);

const initAnimate = () => {
  // 乘以2为了动画开始和结束倒数能对接得上
  timeoutNum.value = props.timeout * 2;
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(() => {
    timeoutNum.value--;
    activeEnter.value = !activeEnter.value;
    emits('change', timeoutNum.value);
    if (timeoutNum.value <= 1) {
      clearInterval(timer);
      emits('finish', timeoutNum.value);
      return;
    }
  }, 700);
};

watch(
  () => props.timeout,
  () => {
    if (props.timeout) {
      initAnimate();
    }
  },
  {
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.count-down-animate {
  font-size: 45px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.2s;
  &.active {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
