<template>
  <van-nav-bar
    :title="props.title"
    :left-text="props.leftText"
    :fixed="props.fixed"
    :right-text="props.rightText"
    :border="props.border"
    :left-arrow="props.leftArrow"
    :placeholder="props.placeholder"
    :z-index="props.zIndex"
    :safe-area-inset-top="props.safeAreaInsetTop"
    @click-left="clickLeft"
    @click-right="clickRight"
  >
    <div slot="left" v-if="leftIcoin" @click="clickLeft">
      <img src="" alt="" />
    </div>
    <div slot="right" v-if="rightIcoin" @click="clickRight">
      <img src="" alt="" />
    </div>
  </van-nav-bar>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
export interface Props {
  leftIcoin?: string;
  rightIcoin?: string;
  title?: string;
  fixed?: boolean;
  border?: boolean;
  leftArrow?: boolean;
  placeholder?: boolean;
  safeAreaInsetTop?: boolean;
  zIndex?: string | number | undefined;
  leftText?: string | undefined;
  rightText?: string | undefined;
}
const props = withDefaults(defineProps<Props>(), {
  fixed: true,
  title: '',
  border: false,
  zIndex: 999,
});
const emit = defineEmits(['click-left', 'click-right']);
const clickLeft = (event: MouseEvent) => {
  emit('click-left', event);
};
const clickRight = (event: MouseEvent) => {
  emit('click-right', event);
};
</script>
<style lang="scss" scoped></style>
