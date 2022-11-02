// 请求状态码
export enum STAUS_CODE {
  SUCCEED = 1, // 成功
  FAIL = -1, // 失败
  LIVE_TRY_TIME_OUT = 10210, // 试看结束
  LIVESTREAM_IS_ALREADY_END = 10208, // 直播结束
  LIVESTREAM_USER_IN_BLACK_LIST = 10303, // 被拉黑，被踢出
  LIVE_NOT_TICKET = 10302, //没有sign或过期
  NOT_LOGIN = 10013,
  SING_EXPIRED = 10214,
  SING_USER_DELETED = 10213
}
