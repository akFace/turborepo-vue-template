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
    <template #left>
      <div slot="left" v-if="leftIcoin" @click="clickLeft">
        <img :src="props.leftIcoin" alt="" />
      </div>
    </template>
    <template #right>
      <div slot="right" v-if="rightIcoin" @click="clickRight">
        <img :src="props.rightIcoin" alt="" />
      </div>
    </template>
  </van-nav-bar>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, defineEmits } from 'vue';
import iconBack from '@/assets/image/icon/icon-back.svg';
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
  leftIcoin: iconBack,
});
const emit = defineEmits(['click-left', 'click-right']);
const clickLeft = (event: MouseEvent) => {
  history.back();
  emit('click-left', event);
};
const clickRight = (event: MouseEvent) => {
  emit('click-right', event);
};
</script>
<style lang="scss" scoped></style>
