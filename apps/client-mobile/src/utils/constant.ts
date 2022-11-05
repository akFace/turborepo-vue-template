export enum STATUS_CODE {
  SUCCESS = 1,
  LIVE_TRY_TIME_OUT = 10210, // 试看结束
  LIVESTREAM_IS_ALREADY_END = 10208, // 直播结束
  LIVESTREAM_USER_IN_BLACK_LIST = 10303, // 被拉黑，被踢出
  LIVE_NOT_TICKET = 10302, //没有sign或过期
  NOT_LOGIN = 10013,
  SING_EXPIRED = 10214,
  SING_USER_DELETED = 10213,
}

export enum MACHINE_STAUS {
  /*状态 1-上架 2-占用 3-维修中 4-下架*/
  ONLINE = 1,
  USED = 2,
  REPAIRS = 3,
  OFFLINE = 4,
}

export enum MACHINE_OPERATE_TYPE {
  /*操作类型 1-上机 2-投币 3-摇摆雨刮 4-下机*/
  ONLINE = 1,
  PUT_COIN = 2,
  SWAY = 3,
  OFFLINE = 4,
}
export enum MACHINE_PLAYER_STATUS {
  /* 初始状态 */
  INIT = 'init',
  /* 游玩中 */
  PLAYING = 'playing',
  /* 占用中 */
  USED = 'used',
  /* 维修中 */
  REPAIRS = 'repairs',
  /* 预约中 */
  BESPEAK = 'bespeak',
  /* 自动投币中 */
  AUTO_PLAY = 'auto-play',
}
