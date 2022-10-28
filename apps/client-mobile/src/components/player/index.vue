<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  withDefaults,
  defineExpose,
  onMounted,
  ref,
  onUnmounted,
  watch,
  computed,
  nextTick,
} from 'vue';
import { INIT_PLAYER_CONFIG } from './const';
import { IPlayer, PlayerType, TCPlayerEvent } from './interface';

interface Props {
  muted?: boolean;
  url: string;
  type?: PlayerType;
  autoplay?: boolean;
  /** 播放器id */
  id?: string;
  /** 显示控制器 */
  showControl?: boolean;
  /** Tcplayer默认配置 */
  TcPlayerConfig?: any;
  /** 播放结束是否退出全屏 */
  endedExitFullscreen?: boolean;
  /** 是否使用虚拟全屏 */
  virtualFullscreen?: boolean;
  /** 自定义全屏按钮点击 */
  customFullscreen?(): void | undefined;
}
const props = withDefaults(defineProps<Props>(), {
  muted: false,
  url: '',
  autoplay: true,
  /** 播放器id */
  id: 'id-player-container',
  /** 显示控制器 */
  showControl: true,
  TcPlayerConfig: null,
  endedExitFullscreen: false,
  virtualFullscreen: false,
  customFullscreen: undefined,
});

const emits = defineEmits([
  'can-play',
  'ended',
  'waiting',
  'error',
  'fullscreenchange',
  'pause',
  'startPlay',
  'onPlaying',
  'volumechange',
  'onPlayerReady',
  'timeupdate',
]);
let player: IPlayer | null = null;

const playerController = ref();
const playerId = computed(() => {
  return props.id;
});
/** 直播状态 */
enum LiveStatus {
  normal = 'normal',
  publish = 'publish',
  unPublish = 'unPublish',
  over = 'over',
  begin = 'begin',
}
const liveStatus = ref(LiveStatus.normal);

/** 录播状态 */
enum VideoStatus {
  normal = 'normal',
  playing = 'playing',
  pause = 'pause',
}
const videoStatus = ref(VideoStatus.normal);

const isPlaying = ref(false); // 是否播放中
const playerLoaded = ref(false); // 标记播放器是否加载完成

const onPlayerReady = () => {
  // 播放器准备好之后才可以添加控制器
  playerLoaded.value = true;
  emits('onPlayerReady');
};

const totalVideoDuration = ref(0);
setTimeout(() => {
  liveStatus.value = LiveStatus.unPublish;
}, 5000);

/** 监听可以播放事件 */
const onPlayerCanPlay = () => {
  if (player) {
    emits('can-play');
    const duration = player.duration();
    if (duration) {
      totalVideoDuration.value = +player.duration().toFixed(1);
    }
  }
};

const onWaiting = () => {
  console.log('onWaiting');
  emits('waiting');
  isPlaying.value = true;
};

const onPlaying = () => {
  console.log('onPlaying');
  videoStatus.value = VideoStatus.playing;
  isPlaying.value = true;
  emits('onPlaying');
};

const onEnded = () => {
  console.log('onEnded');
  emits('ended');
  isPlaying.value = false;
  if (props.endedExitFullscreen) {
    exitFullscreen();
  }
};

const onError = (err?: { data: { code: number; message: string } }) => {
  emits('error');
  exitFullscreen();
  console.error('player_onError ~ err', err);
};

const toggleDisabledScroll = (hide: boolean) => {
  if (hide) {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
    document.getElementsByTagName('html')[0].style.overflow = '';
    document.body.style.overflow = '';
  }
};

const isFullscreen = ref(false); // 是否处在全屏状态

/** 切换全屏状态 1.用户主动点击按钮和按esc键触发 2.TCPlayer fullscreenchange 事件监听触发 会有延迟所以用了 setTimeout */
const toggleFullscreen = (e?: Event) => {
  if (props.virtualFullscreen) {
    isFullscreen.value = !isFullscreen.value;
    toggleDisabledScroll(isFullscreen.value);
    return;
  }
  // 自定义全屏按钮点击
  if (props.customFullscreen && typeof props.customFullscreen === 'function') {
    isFullscreen.value = !isFullscreen.value;
    props.customFullscreen();
    return;
  }
  if (player) {
    if (e) {
      setTimeout(() => {
        if (player) isFullscreen.value = player.isFullscreen();
      });
    } else {
      if (isFullscreen.value) {
        player.exitFullscreen();
        emits('fullscreenchange', false);
      } else {
        player.requestFullscreen();
        emits('fullscreenchange', true);
      }
    }
  }
};

const exitFullscreen = () => {
  player?.isFullscreen() && player?.exitFullscreen();
  isFullscreen.value = false;
  toggleDisabledScroll(isFullscreen.value);
};

const videoDuration = ref(0);

/** 监听播放进度变化 */
const onCurrentTimeUpdate = () => {
  if (player) {
    const time = player.currentTime();
    if (time) videoDuration.value = +time.toFixed(1);
    emits('timeupdate', time);
  }
};

/** 更新进度 */
const updateDuration = (val: number) => {
  if (player) {
    player.currentTime(val);
  }
};

const rate = ref(1);
/** 设置播放倍速 */
const updateRate = (val: number) => {
  if (player) {
    player.playbackRate(val);
    rate.value = val;
  }
};

/** 暂停播放 */
const onPause = () => {
  if (player) {
    player.pause();
    videoStatus.value = VideoStatus.pause;
    isPlaying.value = false;
  }
  emits('pause');
};

const isMuted = ref(false);

/** 设置音量 */
const updateVolume = (val: number) => {
  if (player) {
    isMuted.value = val === 0;
    player.volume(val);
    player.muted(isMuted.value);
    emits('volumechange', val);
  }
};

const setVolume = (val: number) => {
  if (player) {
    isMuted.value = val === 0;
    player.volume(val);
    player.muted(isMuted.value);
    playerController.value?.setVolume(val);
  }
};

/** 初始化播放器 */
const createPlayer = () => {
  if (player) return;
  nextTick(() => {
    player = window.TCPlayer(playerId.value, {
      ...INIT_PLAYER_CONFIG,
      autoplay: props.autoplay,
      muted: props.muted,
      ...props.TcPlayerConfig,
    });
    if (player) {
      player.src(props.url);
      player.ready(onPlayerReady);
      player.on(TCPlayerEvent.error, onError);
      player.on(TCPlayerEvent.playing, onPlaying);
      player.on(TCPlayerEvent.waiting, onWaiting);
      player.on(TCPlayerEvent.canplay, onPlayerCanPlay);
      player.on(TCPlayerEvent.timeupdate, onCurrentTimeUpdate);
      player.on(TCPlayerEvent.fullscreenchange, toggleFullscreen);
      player.on(TCPlayerEvent.pause, onPause);
      player.on(TCPlayerEvent.ended, onEnded);
      // player.on(TCPlayerEvent.webrtcevent, onWebrtcevent);
    }
  });
};

onMounted(() => {
  // createPlayer();
});

const disposePlayer = () => {
  if (player) {
    player.dispose();
  }
};

onUnmounted(() => {
  disposePlayer();
  // clearInterval(danmuInterVal.value);
});

/** 开始播放，需要再接收到 can-play 事件之后调用才有效 */
const startPlay = () => {
  player?.play();
  isPlaying.value = true;
  emits('startPlay');
};

/** 完全停止播放 */
const stopPlay = () => {};

/** 暂停播放 */
const pausePlay = () => {
  onPause();
};

watch(
  () => props.url,
  (newVal, oldVal) => {
    console.log(`player-id: ${props.id}, url: `, newVal);
    if (newVal && newVal !== oldVal) {
      if (player) {
        player.src(props.url);
        player.play();
      } else {
        createPlayer();
      }
    }
  },
  {
    immediate: true,
  }
);
watch(
  () => props.muted,
  () => {
    isMuted.value = props.muted;
  },
  {
    immediate: true,
  }
);
defineExpose({
  toggleFullscreen,
  startPlay,
  stopPlay,
  pausePlay,
  setVolume,
  disposePlayer,
  exitFullscreen,
});
</script>
<template>
  <div
    class="player-container"
    :class="{
      'player-container-virtual-fullscreen': virtualFullscreen && isFullscreen,
    }"
  >
    <video
      webkit-playsinline="true"
      playsinline="true"
      :controls="false"
      class="player-container-video"
      :id="playerId"
      :muted="isMuted"
    ></video>
    <template v-if="playerLoaded">
      <!-- 将控制器移动到播放器中 -->
      <Teleport :to="`#${playerId}`">
        <span></span>
      </Teleport>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.player-container {
  position: relative;
  width: 100%;
  height: 100%;
  &.player-container-virtual-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #000;
  }
  .player-container-video {
    width: 100%;
    height: 100%;
  }
}
:global(.player-container .video-js) {
  background-color: transparent;
}
</style>
