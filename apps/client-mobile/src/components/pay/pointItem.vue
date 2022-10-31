<template>
  <div class="point-item-card">
    <div class="point-cover">
      <img
        src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
    </div>
    <div class="point-count">
      <img
        src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
      <span>1000</span>
    </div>
    <div class="btn">
      <img
        src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
      <span>1000</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
</script>
<style lang="scss" scoped>
.point-item-card {
  position: relative;
  padding-bottom: 26px;
  width: 100%;
  background: linear-gradient(180deg, #ffdf7c, #f39e29);
  border-radius: 8px;
  box-shadow: 0px -1px 3px 0px #e16b2c inset,
    0px 1px 3px 0px rgba(255, 255, 255, 0.5) inset;

  .point-cover {
    padding-top: 5px;
    text-align: center;
    img {
      width: 99px;
      height: 66px;
      box-shadow: 0px 2px 8px 0px rgba(200, 72, 10, 0.6);
      object-fit: cover;
    }
  }
  .point-count,
  .btn {
    text-align: center;
    font-size: 16px;
    img {
      width: 14px;
      height: 14px;
    }
  }
  .point-count {
    margin: 10px 0;
  }
  .btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #95ff75, #00c516);
    border-radius: 8px;
    box-shadow: 0px 2px 0px 0px #009707,
      0px 1px 1px 0px rgba(219, 255, 234, 0.5) inset,
      0px -1px 1px 0px rgba(255, 255, 255, 0.5) inset;
  }
}
</style>
