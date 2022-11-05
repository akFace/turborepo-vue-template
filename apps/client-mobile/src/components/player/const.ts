export const INIT_PLAYER_CONFIG = {
  // fileID: '5285890799710670616', // 请传入需要播放的视频filID 必须
  // appID: '1400329073', // 请传入点播账号的appID 必须
  controls: false,
  autoplay: false,
  preload: 'auto',
  bigPlayButton: true,
  plugins: {
    ContinuePlay: {
      auto: false,
    },
  },
  hlsConfig: {
    appendErrorMaxRetry: 0,
  },
};
