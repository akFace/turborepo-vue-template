<template>
  <div class="point-item-card">
    <div class="point-cover">
      <img src="@/assets/image/game/bg_recharge1@2x.png" alt="" />
    </div>
    <div class="point-count">
      <img src="@/assets/image/icon/icon-diamond.svg" alt="" />
      <span>1000</span>
    </div>
    <div class="mini-btn btn">
      <img src="@/assets/image/icon/ic_coin.svg" alt="" />
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
  background: linear-gradient(0deg, #db92ff 15%, #eac6ff);
  border-radius: 8px;
  box-shadow: 0px -1px 3px 0px #b58bd4 inset,
    0px 1px 3px 0px rgba(255, 255, 255, 0.5) inset;

  .point-cover {
    text-align: center;
    img {
      width: 100%;
      height: auto;
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
    margin-top: -44px;
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
