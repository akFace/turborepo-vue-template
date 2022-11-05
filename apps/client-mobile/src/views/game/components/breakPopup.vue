<template>
  <van-popup
    class="vant-popup-box"
    v-model:show="show"
    position="bottom"
    @closed="close"
  >
    <div class="popup-wrap">
      <div class="question-item" v-for="item in questionList" :key="item.value">
        {{ item.name }}
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import { reactive, ref, defineEmits, computed } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['update:show']);
const questionList = computed(() => {
  return [
    {
      name: '機器不能投幣',
      value: 1,
    },
    {
      name: '屏幕卡幣',
      value: 2,
    },
    {
      name: '推盤不動',
      value: 3,
    },
    {
      name: '雨刷搖擺故障',
      value: 4,
    },
    {
      name: '出獎中設備故障',
      value: 5,
    },
    {
      name: '抽獎遊戲運作故障',
      value: 6,
    },
  ];
});

const close = () => {
  emits('update:show', false);
};
</script>
<style lang="scss" scoped>
.popup-wrap {
  padding: 0 $padding;
  height: 100%;
  .question-item {
    margin: 12px 0;
    padding: 15px;
    background: #ffffff;
    border-radius: 8px;
    color: #333;
    font-size: 16px;
    text-align: center;
  }
}
</style>
