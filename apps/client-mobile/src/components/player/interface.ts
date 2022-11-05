/** 播放器在直播间中的状态，用于展示不同的页面 */
export enum PlayerLiveRoomStatus {
  /** 加载中 */
  Loading = 'Loading',
  /** 网络错误 */
  NetworkError = 'NetworkError',
  /** 直播未开始 */
  NotStart = 'NotStart',
  /** 正在推流 */
  InPublish = 'InPublish',
  /** 没有在推流 */
  NotPublish = 'NotPublish',
  /** 等待直播间结束 */
  WaitingOver = 'WaitingOver',
  /** 直播已结束 */
  Over = 'Over',
  /** 主持人暂时离开 */
  PresenterLeave = 'PresenterLeave',
}

export enum PlayerType {
  /** 直播 */
  live = 'live',
  /** 录播 */
  record = 'record',
  /** 纯视频 */
  video = 'video',
}

export enum TCPlayerEvent {
  play = 'play', //已经开始播放，调用 play() 方法或者设置了 autoplay 为 true 且生效时触发，这时 paused 属性为 false。
  playing = 'playing', //因缓冲而暂停或停止后恢复播放时触发，paused 属性为 false 。通常用这个事件来标记视频真正播放，play 事件只是开始播放，画面并没有开始渲染。
  loadstart = 'loadstart', //开始加载数据时触发。
  durationchange = 'durationchange', //视频的时长数据发生变化时触发。
  loadedmetadata = 'loadedmetadata', //已加载视频的 metadata。
  loadeddata = 'loadeddata', //当前帧的数据已加载，但没有足够的数据来播放视频的下一帧时，触发该事件。
  progress = 'progress', //在获取到媒体数据时触发。
  canplay = 'canplay', //当播放器能够开始播放视频时触发。
  canplaythrough = 'canplaythrough', //当播放器预计能够在不停下来进行缓冲的情况下持续播放指定的视频时触发。
  error = 'error', //视频播放出现错误时触发。
  pause = 'pause', //暂停时触发。
  ratechange = 'ratechange', //播放速率变更时触发。
  seeked = 'seeked', //搜寻指定播放位置结束时触发。
  seeking = 'seeking', //搜寻指定播放位置开始时触发。
  timeupdate = 'timeupdate', //当前播放位置有变更，可以理解为 currentTime 有变更。
  volumechange = 'volumechange', //设置音量或者 muted 属性值变更时触发。
  waiting = 'waiting', //播放停止，下一帧内容不可用时触发。
  ended = 'ended', //视频播放已结束时触发。此时 currentTime 值等于媒体资源最大值。
  resolutionswitching = 'resolutionswitching', //清晰度切换进行中。
  resolutionswitched = 'resolutionswitched', //清晰度切换完毕。
  fullscreenchange = 'fullscreenchange', //全屏状态切换时触发。
  webrtcevent = 'webrtcevent', // WebrtcEvent播放事件
}

export interface IPlayer {
  /** 监听播放器ready回调 */
  ready(cb: () => void): void;
  src(url: string): void;
  /** 开始播放 */
  play(): void;
  /** 暂停播放 */
  pause(): void;
  /** 销毁播放器 */
  dispose(): void;
  /** 修改获取当前进度 */
  currentTime(val?: number): number | void;
  /** 设置播放倍速 */
  playbackRate(val: number): void;
  /** 获取视频总时长 */
  duration(): number;
  /** 设置获取音量 */
  volume(vol?: number): number | void;

  /** 获取当前视频是否为全屏状态 */
  isFullscreen(): boolean;
  /** 退出全屏模式 */
  exitFullscreen(): void;
  /** 进去全屏模式 */
  requestFullscreen(): void;

  /** 静音 */
  muted(val: boolean): boolean | void;

  on(eventName: TCPlayerEvent, listener: (event: any) => void): void;
  off(eventName: TCPlayerEvent, listener: () => void): void;
}

export interface Marqueesetting {
  enabled: boolean;
  marquee_content: string;
  marquee_font_color: string;
  marquee_font_size: number;
  marquee_opacity: number;
  name: string;
  marquee_type: string; //固定文案，用户账号
}
