<template>
  <div class="game-detail">
    <van-nav-bar class="nav-bar-game" fixed :border="false">
      <template #left>
        <div class="nav-left-box">
          <div class="back"></div>
          <div class="user-head">
            <div class="user-img">
              <img
                src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
            </div>
            <div class="user-name">
              <div class="name">分而奋斗</div>
              <div class="user-id">232</div>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="nav-right-box">
          <div class="user-btn" @click="showPopup = true">
            <span class="coin-num">232343</span>
          </div>
        </div>
      </template>
    </van-nav-bar>
    <div class="game-notice">恭喜xxx获得了xxx</div>
    <div class="game-live">
      <div class="game-live-player">
        <div class="game-bg"></div>
        <Player
          :muted="true"
          url="webrtc://saas-live-pull.xiehou360.com/live/1018test?txSecret=91cacd32dc42d59c13191b01c0b34714&txTime=635CECE2"
        />
      </div>
      <div class="game-bottom">
        <div class="game-action">
          <div class="my-wallet"></div>
          <van-button class="action-btn" round type="success"
            >開始遊戲</van-button
          >
        </div>
      </div>
      <div class="game-right">
        <div class="action-item"></div>
        <div class="action-item"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Player from '@/components/player/index.vue';
import { showDialog } from '@/components/common/dialog/index';
const showPopup = ref(false);
</script>
<style lang="scss" scoped>
.nav-bar-game {
  top: 10px;
  background: transparent;
  .nav-left-box {
    .user-head {
      display: flex;
      align-items: center;
      width: 110px;
      height: 32px;
      background: rgb(0, 0, 0, 0.4);
      border-radius: 32px;
    }
    .user-img {
      margin-left: 2px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      img {
        border-radius: 50%;
        background-color: #fff;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .user-id {
      padding-left: 5px;
      display: flex;
      align-items: center;
      font-size: 10px;
      background: linear-gradient(90deg, #56d3fa, #7962ff);
      border-radius: 7.5px;
    }
    .user-name {
      margin-left: 8px;
      line-height: normal;
      text-align: left;
      .name {
        font-size: 10px;
      }
    }
  }
  .nav-right-box {
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
  }
}
.game-detail {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: #fff;
  .game-notice {
    position: absolute;
    top: 84px;
    padding: 3px 15px;
    background: rgb(0, 0, 0, 0.5);
    border-radius: 20px;
    z-index: 1;
    text-align: center;
    font-size: 11px;
    animation: moveScroll 8s linear infinite;
  }
  .game-live-player {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .game-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('https://img2.baidu.com/it/u=1483173994,3145449881&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666976400&t=553eb1f2da7a42f1e460939127a3eb59');
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      &::after {
        display: block;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(0, 0, 0, 0.4);
      }
    }
  }
  .game-bottom {
    padding: 0 22px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .game-action {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
    }
    .my-wallet {
      position: absolute;
      left: 0;
      width: 54px;
      height: 54px;
      background: #d7d1ff;
      border-radius: 50%;
      box-shadow: 0px 1px 1px 0px #33148c,
        0px 1px 2px 0px rgba(255, 255, 255, 0.5) inset;
    }
    .action-btn {
      width: 160px;
      margin: 0 auto;
      font-size: 18px;
      font-weight: normal;
      text-align: center;
      color: #ffffff;
    }
  }
  .game-right {
    position: absolute;
    top: 20%;
    right: 22px;
    .action-item {
      width: 32px;
      height: 32px;
      background: #d7d1ff;
      margin-bottom: 10px;
      border-radius: 50%;
      box-shadow: 0px 1px 1px 0px #33148c,
        0px 1px 2px 0px rgba(255, 255, 255, 0.5) inset;
    }
  }
  @keyframes moveScroll {
    0% {
      transform: translateX(250%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>
