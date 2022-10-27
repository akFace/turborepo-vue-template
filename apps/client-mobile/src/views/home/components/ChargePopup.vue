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
        <div class="point-box">
          <div class="point-num">
            <div class="point-left">
              <img src="" alt="" />
              <span>23423</span>
            </div>
            <div class="point-right">
              <img src="" alt="" />
              <span>23423</span>
            </div>
          </div>
          <div class="point-list" v-if="currentTab.type === 'charge'">
            <PointItem />
            <PointItem />
            <PointItem />
            <PointItem />
            <PointItem />
            <PointItem />
          </div>
          <div class="point-list" v-else>
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
            <GoodsItem />
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import { reactive, ref, defineEmits, computed } from 'vue';
import PointItem from './pointItem.vue';
import GoodsItem from './goodsItem.vue';
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
  background-color: transparent !important;
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
    background-color: $secBgColor;
    height: calc(100% - 60px);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  .tab-box {
    position: relative;
    display: flex;
    align-items: center;
    &::after {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      content: '';
      width: 20px;
      height: 20px;
      background-color: #32146c;
    }
    .tab-item {
      position: relative;
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
      font-size: 18px;
      &.active {
        position: relative;
        z-index: 1;
        color: #ffc53d;
        font-size: 20px;
        border-top: 1px solid #777;
      }
    }
    .tab-item-1 {
      &.active {
        background-color: $secBgColor;
        border-radius: 8px 14px 0 0;
      }
      &.not-active {
        background-color: #32146c;
        border-radius: 0 0 14px 0;
        border-bottom: 1px solid #777;
      }
    }
    .tab-item-2 {
      &.active {
        background-color: $secBgColor;
        border-radius: 14px 8px 0 0;
      }
      &.not-active {
        background-color: #32146c;
        border-radius: 0 0 0 14px;
        border-bottom: 1px solid #777;
      }
    }
  }
  .point-box {
    overflow-y: auto;
    height: calc(100% - 40px);
  }
  .point-num {
    margin: 16px;
    display: flex;
    align-items: center;
    height: 36px;
    background: rgb(50, 20, 108, 0.5);
    border-radius: 8px;
    .point-left,
    .point-right {
      flex: 1;
      text-align: center;
    }
    .point-left {
      position: relative;
      &::after {
        width: 1px;
        height: 16px;
        background: $secBgColor;
        border-radius: 1px;
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -8px;
        display: inline-block;
      }
    }
  }
  .point-list {
    margin: 16px;
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
