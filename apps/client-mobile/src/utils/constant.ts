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

export enum LIVE_STATUS {
  CREATING = 0, // 创建中
  UNLIVING = 1, // 未开播
  LIVING = 2, // 直播中
  END = 3, // 直播结束
  REC_END = 4, // 录制完成，可回放
}
export enum LANGUAGE_TYPE {
  ZH_TW = '1',
  EN = '2',
}
export enum LIVE_SCENE {
  ACTIVE_MARKETING = 1, // 市场营销
}

export enum LIVE_ROLE {
  SPEAK = 1, // 主播，講師，主持人
  MANAGE = 2, // 管理員，助教
  VIEWER = 3, // 觀眾
  GUEST = 4, // 嘉賓
}

export enum LIVE_USER_TYPE {
  SPEAKER = 1, // 主播
  ADMIN = 2, // 管理员
  VIEWER = 3, // 游客(观众)
  WHITE = 4, // 白名单
  GUEST = 5, // 嘉宾
}
