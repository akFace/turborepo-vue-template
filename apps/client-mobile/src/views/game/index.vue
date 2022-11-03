<template>
  <div class="game-detail">
    <van-nav-bar class="nav-bar-game" fixed :border="false">
      <template #left>
        <div class="nav-left-box">
          <div class="back" @click="goBack">
            <img :src="iconBack" alt="" />
          </div>
          <div class="user-head" @click="showPrizeAnimate = true">
            <div class="user-img">
              <img
                src="https://img0.baidu.com/it/u=2703585149,4271457684&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
              />
            </div>
            <div class="user-name">
              <div class="name">分而奋斗</div>
              <div class="user-id"></div>
            </div>
          </div>
        </div>
      </template>
      <template #right>
        <div class="nav-right-box">
          <div class="user-btn">
            <span class="coin-num">232343</span>
          </div>
        </div>
      </template>
    </van-nav-bar>
    <div class="game-notice">恭喜xxx获得了xxx</div>
    <div class="game-live">
      <div class="game-live-player">
        <div class="game-bg"></div>
        <Player ref="LivePlayer" :muted="isMuted" :url="playerUrl" />
      </div>
      <div class="game-right">
        <div class="normal-item">
          <div class="action-item" @click="showRulePopup = !showRulePopup">
            <img src="@/assets/image/game/ic_live_qa.svg" alt="" />
          </div>
        </div>
        <div class="show-more" :class="{ 'show-more-active': showActionMore }">
          <div class="action-item" @click="showActionMore = !showActionMore">
            <img src="@/assets/image/game/icon-more.svg" alt="" />
          </div>
          <div class="action-item" @click="isMuted = !isMuted">
            <img :src="isMuted ? iconVoiceDdisabled : iconVoice" alt="" />
          </div>
          <div class="action-item" @click="showBreakPopup = !showBreakPopup">
            <img src="@/assets/image/game/icon-break.svg" alt="" />
          </div>
          <div
            class="action-item"
            @click="showFeedbackPopup = !showFeedbackPopup"
          >
            <img src="@/assets/image/game/icon-feedback.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="game-bottom">
        <div class="countdown-animate-area" v-if="showCountdownAnimate">
          <countdownAnimate :timeout="11" @finish="countDownFinish" />
        </div>
        <div class="animate-up-area">
          <coinAnimate ref="coinAnimateUpdate" />
        </div>
        <div class="my-coin">
          <img src="@/assets/image/game/ic_coins@2x.png" alt="" />
          <span>已中：1673</span>
        </div>
        <div class="action-bar">
          <div class="game-action">
            <div class="my-wallet" @click="showchargePopup = true">
              <img src="@/assets/image/game/icon-wallet.svg" alt="" />
            </div>
            <div class="center-action">
              <van-button
                class="action-btn login"
                round
                type="success"
                @click="loginMachine"
                v-if="buttonStatus === MACHINE_PLAYER_STATUS.INIT"
              ></van-button>
              <van-button
                class="action-btn playing"
                round
                type="success"
                v-longpress="onLongpress"
                @click="playGame"
                v-if="buttonStatus === MACHINE_PLAYER_STATUS.PLAYING"
              ></van-button>
              <van-button
                class="action-btn auto-playing"
                round
                type="success"
                @click="stopAutoPlay"
                v-if="buttonStatus === MACHINE_PLAYER_STATUS.AUTO_PLAY"
              >
                <p>(自动投币中)</p>
                <p>停止</p>
              </van-button>
              <van-button
                class="action-btn used"
                round
                type="success"
                v-if="buttonStatus === MACHINE_PLAYER_STATUS.USED"
              ></van-button>
              <van-button
                class="action-btn repair"
                round
                type="success"
                v-if="buttonStatus === MACHINE_PLAYER_STATUS.REPAIRS"
              ></van-button>
            </div>
            <div class="my-sway" @click="playSwing">
              <img src="@/assets/image/game/icon-sway.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BreakPopup v-model:show="showBreakPopup" />
    <feedback v-model:show="showFeedbackPopup" />
    <rulePopup v-model:show="showRulePopup" />
    <chargePopup v-model:show="showchargePopup" />
    <prizeAnimate v-model:visible="showPrizeAnimate" />
    <!-- <gameDriver /> -->
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch, nextTick } from 'vue';
import Player from '@/components/player/index.vue';
import chargePopup from '@/components/pay/chargePopup.vue';
import BreakPopup from './components/breakPopup.vue';
import feedback from './components/feedback.vue';
import rulePopup from './components/rulePopup.vue';
import prizeAnimate from '@/components/prize/animate.vue';
import coinAnimate from './components/coinAnimate.vue';
import countdownAnimate from './components/countdownAnimate.vue';
import gameDriver from './components/gameDriver.vue';
import iconVoice from '@/assets/image/game/voice.svg';
import iconVoiceDdisabled from '@/assets/image/game/voice-disabled.svg';
import iconBack from '@/assets/image/icon/icon-back.svg';

import { showDialog } from '@/components/common/dialog/index';
import { showToast } from '@shixiyi/utils';
import {
  getCurrentClient as useImClient,
  IMClient,
  ICustomMessage,
} from '@shixiyi/im-core';
import { useGlobalStore } from '@/stores/global';
import {
  postApiFinanceMachinesLogin,
  postApiFinanceMachinesPlay,
  postApiFinanceMachinesSwing,
} from '@/services';
import {
  MACHINE_OPERATE_TYPE,
  MACHINE_PLAYER_STATUS,
  STATUS_CODE,
} from '@/utils/constant';
import { useMessage } from '@/stores/modules/message';
const LivePlayer = ref<InstanceType<typeof Player>>();
const coinAnimateUpdate = ref<InstanceType<typeof coinAnimate>>();
const showchargePopup = ref(false);
const showBreakPopup = ref(false);
const showFeedbackPopup = ref(false);
const showRulePopup = ref(false);
const showActionMore = ref(false);
const showPrizeAnimate = ref(false);
const showCountdownAnimate = ref(false);
const isMuted = ref(true);
const buttonStatus = ref(MACHINE_PLAYER_STATUS.INIT); // 默认空闲状态
const loginMachineInfo = ref<any>(null);
const playerUrl = computed(() => {
  return 'https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/62656d94387702300542496289/v.f100240.m3u8'; // 'webrtc://saas-live-pull.xiehou360.com/live/1018test?txSecret=91cacd32dc42d59c13191b01c0b34714&txTime=635CECE2';
});

let TimClient: IMClient | null = null;

let countDownTime = 60; // 倒计时之后不投币则关掉机器
let playTimer: any = null;

const { showLoading, hideLoading } = useGlobalStore();
const isloginTim = computed(() => {
  return useMessage().isLoginIm;
});

watch(
  isloginTim,
  (val) => {
    if (val) {
      // 登录完IM后初始化监听
      initTimEvent();
    }
  },
  {
    immediate: true,
  }
);

const initTimEvent = () => {
  TimClient = useImClient();
  // 收到用户中奖
  TimClient?.on('PRIZE', onPrize);
};

const onPrize = (data: ICustomMessage) => {
  console.log('🚀 ~ file: index.vue ~ line 167 ~ onPrize ~ data', data);
};

const swaySubmit = () => {
  const coin = Math.floor(Math.random() * 100) + 20;
  coinAnimateUpdate.value?.addCoin({
    id: `${Date.now()}`,
    content: `+${coin}`,
  });
  // cionList.value.push(coin);
  // showLoading();
  // setTimeout(() => {
  //   hideLoading();
  // }, 1500);
};

const goBack = () => {
  history.back();
};

const onLongpress = () => {
  console.log('长按触发');
  autoPlay();
};

// 登录机器
const loginMachine = async () => {
  try {
    const params = { machineId: 23211 };
    const res: any = await postApiFinanceMachinesLogin(params, {
      showLoading: true,
      showErrorMsg: false,
      hasResolve: true,
    });
    if (res.code === STATUS_CODE.SUCCESS) {
      loginMachineInfo.value = res.info;
      buttonStatus.value = MACHINE_PLAYER_STATUS.PLAYING;
      setCountdown();
    } else {
      showDialog(res.tip);
    }
  } catch (error) {
    showToast(error as string);
  }
};

// 开始投币
const playGame = async () => {
  showCountdownAnimate.value = false;
  const res = await postApiFinanceMachinesPlay({
    machineId: 23211,
  });
  setCountdown();
};
// 摇摆
const playSwing = async () => {
  const res = await postApiFinanceMachinesSwing({
    machineId: 23211,
    operateId: loginMachineInfo.value?.operateId,
  });
};

// 设置倒计时
let timeCount = countDownTime;
const setCountdown = () => {
  if (playTimer) {
    clearInterval(playTimer);
  }
  timeCount = countDownTime;
  playTimer = setInterval(() => {
    timeCount--;
    if (timeCount <= 10) {
      showCountdownAnimate.value = true;
      clearInterval(playTimer);
    }
  }, 1000);
};

// 自动投币
let autoPlayTimer: any = null;
const autoPlay = () => {
  clearInterval(autoPlayTimer);
  buttonStatus.value = MACHINE_PLAYER_STATUS.AUTO_PLAY;
  autoPlayTimer = setInterval(() => {
    // 循环调用投币接口
    postApiFinanceMachinesPlay({
      machineId: 23211,
    });
  }, 300);
};

const stopAutoPlay = () => {
  buttonStatus.value = MACHINE_PLAYER_STATUS.PLAYING;
  clearInterval(autoPlayTimer);
};

const countDownFinish = () => {
  // 倒计时结束还原机器状态
  showCountdownAnimate.value = false;
  buttonStatus.value = MACHINE_PLAYER_STATUS.INIT;
  showToast('由于您长时间未操作机器，已为您自动下机', {
    duration: 4000,
  });
};

watch(isMuted, (val) => {
  console.log('🚀 ~ file: index.vue ~ line 93 ~ watch ~ val', val);
  if (val) {
    LivePlayer.value?.setVolume(0);
  } else {
    LivePlayer.value?.setVolume(70);
  }
});
</script>
<style lang="scss" scoped>
.nav-bar-game {
  top: 10px;
  background: transparent;
  .nav-left-box {
    display: flex;
    align-items: center;
    .user-head {
      margin-left: 4px;
      display: flex;
      align-items: center;
      width: 110px;
      height: 32px;
      background: rgba(84, 57, 140, 0.43);
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
      width: 34px;
      height: 14px;
      display: flex;
      align-items: center;
      font-size: 10px;
      background: url('../../assets/image/game/tab_vip.svg') no-repeat;
      background-size: 100%;
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
      background: url('../../assets/image/game/bg_coin@2x.png') no-repeat;
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
  max-width: 750px;
  margin: 0 auto;
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
      background: $bgColor url('../../assets/image/bg@2x.png') no-repeat;
      background-attachment: fixed;
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
  .animate-up-area {
    position: relative;
    max-width: 70%;
    margin: 0 auto;
    height: 205px;
    font-size: 16px;
  }

  .countdown-animate-area {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .game-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    .my-coin {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      img {
        width: 22px;
        height: 22px;
        background: #652a13;
        border-radius: 50%;
        margin-right: 4px;
      }
    }
    .action-bar {
      padding: 0 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .game-action {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
    }
    .my-wallet,
    .my-sway {
      position: absolute;
      left: 0;
      width: 56px;
      height: 56px;
    }
    .my-sway {
      left: auto;
      right: 0;
    }
    .center-action {
      width: 170px;
      margin: 0 auto;
    }
    .action-btn {
      width: 170px;
      height: 62px;
      margin: 0 auto;
      font-size: 18px;
      font-weight: normal;
      text-align: center;
      color: #ffffff;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 100%;
      border: none;
      &.login {
        background-image: url('../../assets/image/game/btn-start@2x.png');
      }
      &.playing {
        background-image: url('../../assets/image/game/btn-put-coin@2x.png');
      }
      &.used {
        background-image: url('../../assets/image/game/btn-used@2x.png');
      }
      &.repair {
        background-image: url('../../assets/image/game/btn-repair@2x.png');
      }
    }
  }
  .game-right {
    position: absolute;
    top: 20%;
    right: 10px;
    .action-item {
      position: relative;
      z-index: 1;
      margin-top: 10px;
      border-radius: 50%;
      img {
        width: 36px;
        height: 36px;
      }
    }
    .normal-item,
    .show-more {
      padding: 0 7px;
    }
    .show-more {
      transition: all 200ms;
      height: 52px;
      overflow: hidden;
      &.show-more-active {
        position: relative;
        height: auto;
        overflow: visible;
        &::after {
          display: block;
          content: '';
          position: absolute;
          top: -7px;
          left: 0;
          right: 0;
          bottom: -7px;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 40px;
        }
      }
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
.action-btn-test {
  display: block;
  width: 190px;
  height: 70px;
  margin: 0 auto;
  background: linear-gradient(360deg, #f9b809 0%, #fad302 100%);
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.5) inset,
    0px -3px 1px 0px #f57813 inset;
  border: none;
  font-weight: bold;
  font-size: 34px;
  /* prettier-ignore */
  text-shadow: #d36833 1px 4px 1px, #d36833 1px 4px 1px;
  /* prettier-ignore */
  text-shadow: #d36833 -3PX -4PX 2PX, #d36833 3PX 5PX 1PX;
}
</style>
