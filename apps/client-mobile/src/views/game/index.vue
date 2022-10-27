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
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="game-live">
      <div class="game-live-player"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import navBar from '@/layout/navBar.vue';
</script>
<style lang="scss" scoped>
.nav-bar-game {
  background: transparent;
}
.game-detail {
  position: relative;
  height: 100vh;
  overflow: hidden;
  color: #fff;
  .game-live-player {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://img2.baidu.com/it/u=1483173994,3145449881&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666976400&t=553eb1f2da7a42f1e460939127a3eb59');
    background-repeat: no-repeat;
    background-size: cover;
  }
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
}
</style>
