<template>
  <van-popup
    class="vant-popup-box"
    v-model:show="show"
    position="bottom"
    :style="{ height: '70%' }"
    closeable
    @closed="close"
  >
    <div class="popup-wrap">
      <div class="title">充值</div>
      <div class="point-list">
        <GoodsItem />
        <GoodsItem />
        <GoodsItem />
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import { reactive, ref, defineEmits, computed } from 'vue';
import GoodsItem from '@/components/pay/goodsItem.vue';
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const fromData = reactive({
  content: '',
  phone: '',
});
const emits = defineEmits(['update:show']);

const close = () => {
  emits('update:show', false);
};

const onSubmit = () => {};
</script>
<style lang="scss" scoped>
.popup-wrap {
  padding: 0 $padding;
  height: 100%;
  .title {
    padding: 16px 0;
    text-align: center;
    font-size: 20px;
  }
  .point-list {
    background: #773ce7;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.5) inset;
    padding: $padding;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
}
</style>
