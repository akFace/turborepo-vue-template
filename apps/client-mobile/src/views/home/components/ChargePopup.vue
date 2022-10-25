<template>
  <van-popup
    class="charge-popup-box"
    v-model:show="show"
    position="bottom"
    :style="{ height: '70%' }"
    closeable
    close-icon="close"
    @closed="close"
  >
    <div class="popup-wrap">
      <div class="popup-head"></div>
      <div class="popup-content">
        <div class="tab-box">
          <div
            class="tab-item"
            :class="`${
              tab.type === currentTab.type ? 'active' : 'not-active'
            } tab-item-${index + 1}`"
            v-for="(tab, index) in tabList"
            :key="tab.type"
            @click="change(tab)"
          >
            {{ tab.name }}
          </div>
        </div>
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
const tabList = computed(() => {
  return [
    {
      name: '充值',
      type: 'charge',
    },
    {
      name: '兑换',
      type: 'exchange',
    },
  ];
});
const currentTab = ref({
  type: 'charge',
});
const close = () => {
  emits('update:show', false);
};
const change = (tab: any) => {
  currentTab.value = tab;
};
</script>
<style lang="scss" scoped>
:global(.charge-popup-box) {
  background-color: transparent;
}
:global(.charge-popup-box .van-icon-close) {
  font-size: 30px;
  color: #fff;
  font-weight: lighter;
}
.popup-wrap {
  height: 100%;
  .popup-head {
    height: 60px;
  }
  .popup-content {
    background-color: #663dad;
    height: calc(100% - 60px);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  .tab-box {
    position: relative;
    display: flex;
    align-items: center;
    // &::after {
    //   position: absolute;
    //   top: 0;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   display: block;
    //   content: '';
    //   width: 10px;
    //   height: 10px;
    //   background-color: #32146c;
    // }
    .tab-item {
      position: relative;
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
      font-size: 18px;
      &.active {
        color: #ffc53d;
        font-size: 20px;
      }
    }
    .tab-item-1 {
      &.active {
        background-color: #663dad;
        border-radius: 0 8px 0 0;
      }
      &.not-active {
        background-color: #32146c;
        border-radius: 0 0 14px 0;
      }
    }
    .tab-item-2 {
      &.active {
        background-color: #663dad;
        border-radius: 0 8px 0 0;
      }
      &.not-active {
        background-color: #32146c;
        border-radius: 0 0 0 14px;
      }
    }
  }
}
</style>
