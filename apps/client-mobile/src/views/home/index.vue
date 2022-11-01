<template>
  <div class="container">
    <nav-bar title="推幣機" />
    <div class="box-hd">
      <div class="user-info">
        <div class="user-head" @click="doShowDialog">
          <div class="user-img">
            <img
              src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
              alt=""
            />
          </div>
          <div class="user-name">
            <div class="name">分而奋斗</div>
            <div class="user-id">23232</div>
          </div>
        </div>
        <div class="user-btn" @click="showPopup = true">
          <span class="coin-num">232343</span>
        </div>
      </div>
      <div class="notice-box">
        <img
          class="icon-sound"
          src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
        <div class="notice-content">
          <img
            class="user-img-mini"
            src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
          <span
            ><i>买买买</i>在<strong>15号机</strong>获得了<strong
              >343金币</strong
            ></span
          >
        </div>
      </div>
      <div class="banner-box">
        <img
          src="https://img1.baidu.com/it/u=3402112896,279242652&fm=253&app=138&size=w931&n=0&f=JPG&fmt=auto?sec=1666803600&t=cc5cee4f1c330de9e6cfd20aae041ae1"
          alt=""
        />
      </div>
    </div>
    <div class="game-list">
      <game-item />
      <game-item />
      <game-item />
      <game-item />
      <game-item />
    </div>
    <exchangePopup v-model:show="showPopup" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import navBar from '@/layout/navBar.vue';
import GameItem from './components/gameItem.vue';
import exchangePopup from '@/components/pay/exchangePopup.vue';
import { showDialog } from '@/components/common/dialog/index';
const showPopup = ref(false);
const doShowDialog = () => {
  showDialog(
    `已兑换出<img style="width: 20px;height: 20px;margin: 0 3px;" src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />1000`,
    '这是标题',
    {
      allowHtml: true,
    }
  ).then(() => {
    console.log(222222);
  });
};
</script>
<style lang="scss" scoped>
.container {
  .box-hd {
    padding: $padding;
    .user-info {
      display: flex;
      align-items: center;
    }
    .user-head {
      display: flex;
      align-items: center;
      flex: 1;
    }
    .user-img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(221deg, #9f63ff 12%, #ee87ff 88%);
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        background-color: #fff;
        width: 90%;
        height: 90%;
        object-fit: cover;
      }
    }
    .user-id {
      font-size: 12px;
      color: #999999;
    }
    .user-name {
      margin-left: 8px;
      .name {
        padding-bottom: 4px;
        font-size: 16px;
      }
    }
    .user-btn {
      width: 108px;
      height: 32px;
      background: url('../../assets/image/home/cion-btn@2x.png') no-repeat;
      line-height: 32px;
      background-size: 100%;
      text-align: center;
      .coin-num {
        padding-left: 10px;
        font-size: 12px;
      }
    }

    .notice-box {
      padding: 0 11px;
      margin-top: 20px;
      height: 30px;
      background: rgb(84, 57, 140, 0.43);
      border-radius: 25px;
      display: flex;
      align-items: center;
      .icon-sound {
        width: 18px;
        height: 15px;
        margin-right: 11px;
      }
      .user-img-mini {
        margin-right: 4px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        overflow: hidden;
      }
      i {
        font-style: normal;
        color: #ffd04c;
      }
      strong {
        font-weight: normal;
        color: #fa3860;
      }
    }
    .banner-box {
      margin-top: 20px;
      margin-bottom: 4px;
      border-radius: 4px;
      overflow: hidden;
      img {
        max-width: 100%;
      }
    }
  }
  .game-list {
    padding: 0 $padding;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 15px;
    grid-column-gap: 15px;
  }
}
</style>
