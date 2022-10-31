<template>
  <div
    class="live-viewer-award-box"
    :class="{
      'animate-play-end': !isPlaying,
      'animate-end-visible': !isAnimateFlag && props.visible,
    }"
    v-show="props.visible"
  >
    <div class="award-content">
      <div id="award-animate-dom" class="award-animate"></div>
      <p v-if="isPlaying && props.awardName">{{ props.awardName }}</p>
    </div>
    <div class="award-animate-end">
      <img :src="animateOption?.coverImage || coverImage" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineEmits,
  defineProps,
  nextTick,
  ref,
  watch,
  defineExpose,
} from 'vue';
import Vap from 'video-animation-player';
import animateVideo from './animate/cup/video.mp4';
import animateConfig from './animate/cup/vapc.json';
import coverImage from './animate/cup/award-cup.png';
interface animateOptionItf {
  animateVideo: string;
  animateConfig: string;
  /*拓展参数*/
  animateExt?: any;
  /*最后动画封面图*/
  coverImage?: string;
}
const props = defineProps<{
  visible: boolean;
  animateOption?: animateOptionItf;
  awardName?: string;
}>();
let vap: any = null;
const isPlaying = ref(false);
const isAnimateFlag = ref(true);
const emit = defineEmits([
  'update:visible',
  'animatePlaying',
  'animatePlayEnd',
  'animatePlayFrame',
  'animatePlayError',
]);
const closeAward = () => {
  isAnimateFlag.value = true;
  emit('update:visible', false);
};
watch(props, ({ visible }) => {
  if (visible) {
    const video = props.animateOption?.animateVideo || animateVideo;
    const config = props.animateOption?.animateConfig || animateConfig;
    const ext = props.animateOption?.animateExt || null;
    nextTick(() => {
      playAnimate(video, config as unknown as JSON, ext);
    });
  }
});
const playAnimate = (url: string, config: JSON, ext?: any) => {
  if (vap) {
    return;
  }
  vap = new Vap(
    Object.assign(
      {},
      {
        container: document.getElementById('award-animate-dom'),
        // 素材视频链接
        src: url,
        // 素材配置json对象
        config: config,
        width: 200,
        height: 200,
        // 同素材生成工具中配置的保持一致
        fps: 20,
        // 是否循环
        loop: false,
        // 起始播放时间点
        beginPoint: 0,
        // 精准模式
        accurate: true,
        // 预加载(边下边播)
        precache: true,
      },
      ext ? ext : { type: 1 }
    )
  );
  vap.on('playing', () => {
    isAnimateFlag.value = true;
    isPlaying.value = true;
    emit('animatePlaying');
  });
  vap.on('ended', () => {
    isAnimateFlag.value = false;
    isPlaying.value = false;
    vap.destroy();
    vap = null;
    setTimeout(() => closeAward(), 1000);
    emit('animatePlayEnd');
  });
  vap.on('onLoadError', (error: any) => {
    emit('animatePlayError', error);
    console.error('加载失败====>>', error);
  });
  vap.on('frame', (frame: number, timestamp: number) => {
    // frame: 当前帧(从0开始)  timestamp: (播放时间戳)
    emit('animatePlayFrame', { frame, timestamp });
  });
};
defineExpose({ playAnimate });
</script>

<style lang="scss" scoped>
.live-viewer-award-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  .award-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .award-animate {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    margin-top: 10px;
    text-align: center;
    color: #fff;
    font-size: 16px;
  }
  .award-animate-end {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -80px;
    margin-top: -80px;
    opacity: 0;
    transition: all 0.7s;
    img {
      width: 160px;
      height: 160px;
      transition: all 0.7s;
    }
  }
  &.animate-play-end {
    position: static;
    z-index: 9;
    .award-animate-end {
      position: absolute;
      top: -64px;
      left: 50%;
      margin-top: 0;
      margin-left: 11vw;
      @media screen and (min-width: 1920px) {
        margin-left: 16vw;
      }
      @media screen and (max-width: 768px) {
        top: 30px;
        left: 77%;
      }
      @media screen and (max-width: 375px) {
        top: 30px;
        left: 72%;
      }
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
  &.animate-end-visible {
    .award-animate-end {
      opacity: 1;
    }
  }
}
</style>
