/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from './request';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_0 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_0 = '' as any;
const prodUrl_0_0_0_0 = '' as any;
const dataKey_0_0_0_0 = 'data' as any;

/**
 * 接口 [设置主讲↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10177) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateLecturer`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUpdateLecturerRequest {
  /**
   * 操作类型 0-取消主讲 1-设为主讲
   */
  type: boolean;
  /**
   * 被操作用户ID
   */
  user_id: number;
}

/**
 * 接口 [设置主讲↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10177) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateLecturer`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUpdateLecturerResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [设置主讲↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10177) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateLecturer`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveUpdateLecturerRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/updateLecturer',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [设置主讲↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10177) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateLecturer`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveUpdateLecturerRequestConfig: PostLivefrontLiveUpdateLecturerRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/updateLecturer',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveUpdateLecturer',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [设置主讲↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10177) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateLecturer`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveUpdateLecturer = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUpdateLecturerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUpdateLecturerResponse>(
    prepare(postLivefrontLiveUpdateLecturerRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUpdateLecturer.requestConfig = postLivefrontLiveUpdateLecturerRequestConfig;

/**
 * 接口 [获取直播详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10185) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/detail/{id}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveDetailIdRequest {
  id: string;
}

/**
 * 接口 [获取直播详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10185) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/detail/{id}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveDetailIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * id
     */
    id?: number;
    /**
     * 直播分类
     */
    tag_id?: number;
    /**
     * 场景 1、公开课 2、大班课
     */
    scene?: number;
    /**
     * 模板类型 1-纯直播 2-白板
     */
    templet?: number;
    /**
     * logo的url
     */
    logo_url?: string;
    /**
     * 连麦数量
     */
    link_mic_limit?: number;
    /**
     * 开始时间
     */
    begin_time?: string;
    /**
     * 结束时间
     */
    end_time?: string;
    /**
     * 封面图url，不保存域名
     */
    cover_url?: string;
    /**
     * 开播状态 1-未开始 2-直播中 3-直播结束录制中 4-录制完成
     */
    online_status?: number;
    /**
     * 频道号
     */
    channel?: string;
    /**
     * 状态 0-删除 1-正常
     */
    status?: string;
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 主持人
     */
    speaker?: {
      /**
       * id
       */
      id?: number;
      /**
       * 直播id
       */
      livestream_id?: number;
      /**
       * 头像
       */
      head_url?: string;
      /**
       * 进入直播间状态 0-不允许 1-允许
       */
      kick_status?: number;
      /**
       * 发言状态 0-禁言 1-允许发言
       */
      speak_status?: number;
      /**
       * 角色 1-主持人 2-管理员 3-观众
       */
      role?: number;
      /**
       * 通行证
       */
      ticket?: string;
      /**
       * 名字
       */
      name?: string;
      /**
       * 头衔
       */
      title?: string;
      /**
       * 状态 0/1
       */
      status?: string;
      /**
       * 观众注册位置 0-非观众角色 1-直播页 2-录播页
       */
      sign_up_position?: number;
      /**
       * 租户ID
       */
      tenant_id?: number;
      permission?: string;
      /**
       * 连麦状态，apply ,normal
       */
      microphone_status?: string;
      ip?: string;
      /**
       * 终端来源 app、pad、pc
       */
      source?: string;
      /**
       * 用户编号
       */
      number?: string;
      /**
       * 搜索值
       */
      search_value?: string;
      /**
       * 创建时间
       */
      create_time?: string;
      /**
       * 更新时间
       */
      update_time?: string;
    };
    /**
     * 管理员列表
     */
    managers?: {
      /**
       * id
       */
      id?: number;
      /**
       * 直播id
       */
      livestream_id?: number;
      /**
       * 头像
       */
      head_url?: string;
      /**
       * 进入直播间状态 0-不允许 1-允许
       */
      kick_status?: number;
      /**
       * 发言状态 0-禁言 1-允许发言
       */
      speak_status?: number;
      /**
       * 角色 1-主持人 2-管理员 3-观众
       */
      role?: number;
      /**
       * 通行证
       */
      ticket?: string;
      /**
       * 名字
       */
      name?: string;
      /**
       * 头衔
       */
      title?: string;
      /**
       * 状态 0/1
       */
      status?: string;
      /**
       * 观众注册位置 0-非观众角色 1-直播页 2-录播页
       */
      sign_up_position?: number;
      /**
       * 租户ID
       */
      tenant_id?: number;
      permission?: string;
      /**
       * 连麦状态，apply ,normal
       */
      microphone_status?: string;
      ip?: string;
      /**
       * 终端来源 app、pad、pc
       */
      source?: string;
      /**
       * 用户编号
       */
      number?: string;
      /**
       * 搜索值
       */
      search_value?: string;
      /**
       * 创建时间
       */
      create_time?: string;
      /**
       * 更新时间
       */
      update_time?: string;
    }[];
    /**
     * 租户ID
     */
    tenant_id?: number;
    auth_settings?: {
      /**
       * id
       */
      id?: number;
      /**
       * 直播id
       */
      livestream_id?: number;
      /**
       * 观看条件major/minor
       */
      rank?: string;
      /**
       * 是否开启true/false
       */
      enabled?: boolean;
      /**
       * 付费观看-pay，验证码观看-code，白名单观看-phone，登记观看-info，自定义授权观看-custom，外部授权-external,直接授权-direct
       */
      auth_type?: string;
      /**
       * 白名单观看参数：提示文案
       */
      auth_tips: string;
      /**
       * 白名单观看提示语
       */
      white_list_input_tips: string;
      /**
       * 白名单入口文本
       */
      white_list_entry_text: string;
      /**
       * *
       * 非白名单是否开启试看 true/false
       */
      trial_watch_enabled?: boolean;
      /**
       * 非白名单试看时间（分钟）
       */
      trial_watch_time?: number;
      /**
       * 是否开启延迟播放 true/false
       */
      delay_watch_enabled?: boolean;
      /**
       * 延迟时间 秒
       */
      delay_watch_time?: number;
      /**
       * 自定义授权key
       */
      custom_key?: string;
      /**
       * 自定义授权url
       */
      custom_uri?: string;
      /**
       * 外部授权key
       */
      external_key?: string;
      /**
       * 外部授权地址
       */
      external_uri?: string;
      /**
       * 外部授权失败跳转地址
       */
      external_redirect_uri?: string;
      /**
       * 状态 0-删除 1-正常
       */
      status?: string;
      /**
       * 租户ID
       */
      tenant_id?: number;
      /**
       * 搜索值
       */
      search_value?: string;
      /**
       * 创建时间
       */
      create_time?: string;
      /**
       * 更新时间
       */
      update_time?: string;
    }[];
    im_setting?: {
      id?: number;
      /**
       * 直播间id
       */
      livestream_id?: number;
      /**
       * 开启观众发言true/false
       */
      chat_enabled?: boolean;
      /**
       * 能聊天的状态1,2,3,4对应直播的状态
       */
      chat_status?: string;
      /**
       * 开启欢迎提示Y/N
       */
      welcome_enabled?: boolean;
      /**
       * 欢迎提示文案
       */
      welcome_tip?: string;
      /**
       * 欢迎提示文案EN
       */
      welcome_tip_en?: string;
      /**
       * 开启发送图片Y/N
       */
      send_img_enabled?: boolean;
      /**
       * 点赞开关Y/N
       */
      praise_enabled?: boolean;
      /**
       * 第一次点赞提示开关
       */
      praise_tip_enabled?: boolean;
      /**
       * 点赞提示语文案
       */
      praise_tip?: string;
      /**
       * 点赞提示语英文
       */
      praise_tip_en?: string;
      /**
       * 状态
       */
      status?: string;
      /**
       * 租户ID
       */
      tenant_id?: number;
      /**
       * 搜索值
       */
      search_value?: string;
      /**
       * 创建时间
       */
      create_time?: string;
      /**
       * 更新时间
       */
      update_time?: string;
    };
    marquee_setting?: {
      /**
       * id
       */
      id?: number;
      /**
       * 直播id
       */
      livestream_id?: number;
      /**
       * 是否开启Y/N
       */
      enabled?: boolean;
      /**
       * 类型这里固定值marquee/watermark
       */
      type?: string;
      /**
       * 跑马灯类型/fixed(固定值),nickName 昵称
       */
      marquee_type?: string;
      /**
       * 跑马灯文字
       */
      marquee_content?: string;
      /**
       * 字体大小
       */
      marquee_font_size?: number;
      /**
       * 字体颜色#000000
       */
      marquee_font_color?: string;
      /**
       * 透明度
       */
      marquee_opacity?: number;
      /**
       * 水印类型/fixed(固定值),nickName 昵称
       */
      watermark_type?: string;
      /**
       * 水印内容
       */
      watermark_content?: string;
      /**
       * 字体大小
       */
      watermark_font_size?: number;
      /**
       * 水印字体颜色#000000
       */
      watermark_font_color?: string;
      /**
       * 水印透明度
       */
      watermark_opacity?: number;
      /**
       * 状态 0-删除 1-正常
       */
      status?: string;
      /**
       * 租户ID
       */
      tenant_id?: number;
      /**
       * 搜索值
       */
      search_value?: string;
      /**
       * 创建时间
       */
      create_time?: string;
      /**
       * 更新时间
       */
      update_time?: string;
    };
    /**
     * 直播创建学校名称
     */
    school_name?: string;
    /**
     * 当前用户名称
     */
    user_name?: string;
    /**
     * 介绍
     */
    introduction?: string;
    /**
     * 英文介绍
     */
    en_introduction?: string;
    /**
     * 直播名字
     */
    name?: string;
    /**
     * 直播英文名字
     */
    en_name?: string;
    /**
     * 实际开播时间，只取第一次开播的时间
     */
    real_begin_time?: string;
  };
}

/**
 * 接口 [获取直播详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10185) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/detail/{id}`
 * @更新时间 `2022-08-03 16:27:14`
 */
type GetLivefrontLiveDetailIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/detail/{id}',
    'data',
    'id',
    string,
    false
  >
>;

/**
 * 接口 [获取直播详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10185) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/detail/{id}`
 * @更新时间 `2022-08-03 16:27:14`
 */
const getLivefrontLiveDetailIdRequestConfig: GetLivefrontLiveDetailIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/detail/{id}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveDetailId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取直播详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10185) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/detail/{id}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const getLivefrontLiveDetailId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveDetailIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveDetailIdResponse>(
    prepare(getLivefrontLiveDetailIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveDetailId.requestConfig = getLivefrontLiveDetailIdRequestConfig;

/**
 * 接口 [进入直播间接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10193) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/live-rooms/join`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveLiveRoomsJoinRequest {
  /**
   * 直播间频道号
   */
  channel?: string;
  /**
   * 通行证
   */
  ticket?: string;
  /**
   * 用户名字
   */
  name?: string;
  /**
   * 语言, 后期讨论
   */
  language_type?: string;
  /**
   * 用户id
   */
  live_user_id?: string;
  /**
   * 直播间 id
   */
  livestream_id: number;
  /**
   * 【该参数不用传递】
   * token放到请求头中auth-token，如果放到这里取不到数据，白名单会报错试看已结束
   */
  auth_token?: string;
  /**
   * 进入用户类型 1-主播 2-管理员 3-观众 4-白名单 5-嘉宾
   */
  user_type: number;
}

/**
 * 接口 [进入直播间接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10193) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/live-rooms/join`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveLiveRoomsJoinResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * im 用户加密串 （客户端）
     */
    im_user_sig?: string;
    /**
     * 白板用户加密串
     */
    white_user_sig?: string;
    /**
     * 中文轨道播放地址
     */
    cn_play_address?: string;
    /**
     * 中文轨道推流地址
     */
    cn_push_address?: string;
    /**
     * 昵称
     */
    name?: string;
    /**
     * 用户id
     */
    user_id?: number;
    /**
     * 房间号/课室(初始化白板的需要使用的参数)id/im频道号
     */
    channel?: string;
    /**
     * trtc 推流到 CDN 的  streamId
     */
    cn_stream_id?: string;
    /**
     * 直播间 id
     */
    livestream_id?: number;
    /**
     * 白板 appid
     */
    white_sdk_app_id?: string;
    /**
     * im app id
     */
    sdk_app_id?: string;
    /**
     * 直播间标题
     */
    livestream_title?: string;
    /**
     * 用户端登录的 token
     */
    sign?: string;
    /**
     * 票码语言 1-中文 2-英文
     */
    language_type?: string;
    /**
     * 直播回放
     */
    review_url?: string;
    /**
     * 白板拉流地址
     */
    white_pull_url?: string;
    /**
     * 是否是试看用户 0-非试看用户，1-试看用户
     */
    try_look?: number;
    /**
     * 声网token
     */
    agora_token?: string;
    /**
     * 声网uuid
     */
    agora_uuid?: string;
    /**
     * 声网身份标识
     */
    agora_app_identifier?: string;
  };
}

/**
 * 接口 [进入直播间接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10193) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/live-rooms/join`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveLiveRoomsJoinRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/live-rooms/join',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [进入直播间接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10193) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/live-rooms/join`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveLiveRoomsJoinRequestConfig: PostLivefrontLiveLiveRoomsJoinRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/live-rooms/join',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveLiveRoomsJoin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [进入直播间接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10193) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/live-rooms/join`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveLiveRoomsJoin = /*#__PURE__*/ (
  requestData: PostLivefrontLiveLiveRoomsJoinRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveLiveRoomsJoinResponse>(
    prepare(postLivefrontLiveLiveRoomsJoinRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveLiveRoomsJoin.requestConfig = postLivefrontLiveLiveRoomsJoinRequestConfig;

/**
 * 接口 [开始直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10201) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/begin`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveLivestreamInfoLivestreamIdBeginRequest {
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [开始直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10201) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/begin`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveLivestreamInfoLivestreamIdBeginResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [开始直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10201) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/begin`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PatchLivefrontLiveLivestreamInfoLivestreamIdBeginRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/livestream-info/{livestreamId}/begin',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [开始直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10201) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/begin`
 * @更新时间 `2022-08-03 16:27:14`
 */
const patchLivefrontLiveLivestreamInfoLivestreamIdBeginRequestConfig: PatchLivefrontLiveLivestreamInfoLivestreamIdBeginRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/livestream-info/{livestreamId}/begin',
    method: Method.PATCH,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.none,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'patchLivefrontLiveLivestreamInfoLivestreamIdBegin',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [开始直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10201) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/begin`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const patchLivefrontLiveLivestreamInfoLivestreamIdBegin = /*#__PURE__*/ (
  requestData: PatchLivefrontLiveLivestreamInfoLivestreamIdBeginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchLivefrontLiveLivestreamInfoLivestreamIdBeginResponse>(
    prepare(patchLivefrontLiveLivestreamInfoLivestreamIdBeginRequestConfig, requestData),
    ...args,
  );
};

patchLivefrontLiveLivestreamInfoLivestreamIdBegin.requestConfig =
  patchLivefrontLiveLivestreamInfoLivestreamIdBeginRequestConfig;

/**
 * 接口 [结束直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10209) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/end`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveLivestreamInfoLivestreamIdEndRequest {
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [结束直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10209) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/end`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveLivestreamInfoLivestreamIdEndResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [结束直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10209) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/end`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PatchLivefrontLiveLivestreamInfoLivestreamIdEndRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/livestream-info/{livestreamId}/end',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [结束直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10209) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/end`
 * @更新时间 `2022-08-03 16:27:14`
 */
const patchLivefrontLiveLivestreamInfoLivestreamIdEndRequestConfig: PatchLivefrontLiveLivestreamInfoLivestreamIdEndRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/livestream-info/{livestreamId}/end',
    method: Method.PATCH,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.none,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'patchLivefrontLiveLivestreamInfoLivestreamIdEnd',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [结束直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10209) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/livestream-info/{livestreamId}/end`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const patchLivefrontLiveLivestreamInfoLivestreamIdEnd = /*#__PURE__*/ (
  requestData: PatchLivefrontLiveLivestreamInfoLivestreamIdEndRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchLivefrontLiveLivestreamInfoLivestreamIdEndResponse>(
    prepare(patchLivefrontLiveLivestreamInfoLivestreamIdEndRequestConfig, requestData),
    ...args,
  );
};

patchLivefrontLiveLivestreamInfoLivestreamIdEnd.requestConfig =
  patchLivefrontLiveLivestreamInfoLivestreamIdEndRequestConfig;

/**
 * 接口 [获取直播回放↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10217) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/livestream-review/{id}/record`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveLivestreamReviewIdRecordRequest {
  /**
   * 国际化语言 暂时不传,待国际化需求下来再讨论
   */
  language_type?: string;
  /**
   * 用户id
   */
  user_id?: string;
  /**
   * token
   */
  auth_token?: string;
  /**
   * 直播间id
   */
  id: string;
}

/**
 * 接口 [获取直播回放↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10217) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/livestream-review/{id}/record`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveLivestreamReviewIdRecordResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * 回放地址
     */
    url?: string;
    /**
     * ticket签名
     */
    sign?: string;
    /**
     * 用户id
     */
    user_id?: string;
    /**
     * 语言 1-中文 2-英文
     */
    language_type?: string;
  };
}

/**
 * 接口 [获取直播回放↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10217) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/livestream-review/{id}/record`
 * @更新时间 `2022-08-03 16:27:14`
 */
type GetLivefrontLiveLivestreamReviewIdRecordRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/livestream-review/{id}/record',
    'data',
    'id',
    'language_type' | 'user_id' | 'auth_token',
    false
  >
>;

/**
 * 接口 [获取直播回放↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10217) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/livestream-review/{id}/record`
 * @更新时间 `2022-08-03 16:27:14`
 */
const getLivefrontLiveLivestreamReviewIdRecordRequestConfig: GetLivefrontLiveLivestreamReviewIdRecordRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/livestream-review/{id}/record',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['id'],
    queryNames: ['language_type', 'user_id', 'auth_token'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveLivestreamReviewIdRecord',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [获取直播回放↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10217) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/livestream-review/{id}/record`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const getLivefrontLiveLivestreamReviewIdRecord = /*#__PURE__*/ (
  requestData: GetLivefrontLiveLivestreamReviewIdRecordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveLivestreamReviewIdRecordResponse>(
    prepare(getLivefrontLiveLivestreamReviewIdRecordRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveLivestreamReviewIdRecord.requestConfig = getLivefrontLiveLivestreamReviewIdRecordRequestConfig;

/**
 * 接口 [更新群自定义属性↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10297) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/im/group/custom/attribute`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PatchLivefrontLiveImGroupCustomAttributeRequest {
  /**
   * 房间号
   */
  channel: string;
  /**
   * 更新成员属性才需要传, 如果更新成员属性不传默认更新所有用户
   */
  member_list?: string[];
  /**
   * 更新类型  1、更新群自定义属性  2、更新成员自定义属性
   */
  type: number;
  /**
   * 自定义属性
   */
  attribute_list: {
    /**
     * 自定义的字段 Key
     */
    key?: string;
    /**
     * 自定义字段的值
     */
    value?: {};
  }[];
  /**
   * 修改的KEY
   */
  key: string;
}

/**
 * 接口 [更新群自定义属性↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10297) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/im/group/custom/attribute`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PatchLivefrontLiveImGroupCustomAttributeResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [更新群自定义属性↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10297) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/im/group/custom/attribute`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PatchLivefrontLiveImGroupCustomAttributeRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/im/group/custom/attribute',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [更新群自定义属性↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10297) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/im/group/custom/attribute`
 * @更新时间 `2022-08-03 16:27:15`
 */
const patchLivefrontLiveImGroupCustomAttributeRequestConfig: PatchLivefrontLiveImGroupCustomAttributeRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/im/group/custom/attribute',
    method: Method.PATCH,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'patchLivefrontLiveImGroupCustomAttribute',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [更新群自定义属性↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10297) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `PATCH /livefront/live/im/group/custom/attribute`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const patchLivefrontLiveImGroupCustomAttribute = /*#__PURE__*/ (
  requestData: PatchLivefrontLiveImGroupCustomAttributeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchLivefrontLiveImGroupCustomAttributeResponse>(
    prepare(patchLivefrontLiveImGroupCustomAttributeRequestConfig, requestData),
    ...args,
  );
};

patchLivefrontLiveImGroupCustomAttribute.requestConfig = patchLivefrontLiveImGroupCustomAttributeRequestConfig;

/**
 * 接口 [创建文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10337) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardTranscodeRequest {
  /**
   * 是否为静态PPT，默认为False；
   * 如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片
   */
  is_static_ppt: boolean;
  /**
   * 经过URL编码后的转码文件地址。URL 编码会将字符转换为可通过因特网传输的格式，比如文档地址为http://example.com/测试.pdf，经过URL编码之后为http://example.com/%E6%B5%8B%E8%AF%95.pdf。
   * 为了提高URL解析的成功率，请对URL进行编码
   */
  url: string;
  /**
   * 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图
   */
  thumbnail_resolution?: string;
}

/**
 * 接口 [创建文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10337) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardTranscodeResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: string;
}

/**
 * 接口 [创建文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10337) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveWhiteboardTranscodeRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/whiteboard/transcode',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [创建文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10337) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveWhiteboardTranscodeRequestConfig: PostLivefrontLiveWhiteboardTranscodeRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/whiteboard/transcode',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveWhiteboardTranscode',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [创建文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10337) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveWhiteboardTranscode = /*#__PURE__*/ (
  requestData: PostLivefrontLiveWhiteboardTranscodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveWhiteboardTranscodeResponse>(
    prepare(postLivefrontLiveWhiteboardTranscodeRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveWhiteboardTranscode.requestConfig = postLivefrontLiveWhiteboardTranscodeRequestConfig;

/**
 * 接口 [查询文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10345) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveWhiteboardTranscodeRequest {
  taskId: string;
}

/**
 * 接口 [查询文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10345) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveWhiteboardTranscodeResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: string;
}

/**
 * 接口 [查询文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10345) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
type GetLivefrontLiveWhiteboardTranscodeRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/whiteboard/transcode',
    'data',
    string,
    'taskId',
    false
  >
>;

/**
 * 接口 [查询文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10345) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
const getLivefrontLiveWhiteboardTranscodeRequestConfig: GetLivefrontLiveWhiteboardTranscodeRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/whiteboard/transcode',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: ['taskId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveWhiteboardTranscode',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询文档转码↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10345) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/whiteboard/transcode`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const getLivefrontLiveWhiteboardTranscode = /*#__PURE__*/ (
  requestData: GetLivefrontLiveWhiteboardTranscodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveWhiteboardTranscodeResponse>(
    prepare(getLivefrontLiveWhiteboardTranscodeRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveWhiteboardTranscode.requestConfig = getLivefrontLiveWhiteboardTranscodeRequestConfig;

/**
 * 接口 [修改混流配置↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10377) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateMixStreamConfig`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUpdateMixStreamConfigRequest {
  /**
   * 直播间ID
   */
  livestream_id: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  zorder?: number;
  customized_params?: {
    key?: {};
  };
}

/**
 * 接口 [修改混流配置↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10377) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateMixStreamConfig`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUpdateMixStreamConfigResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [修改混流配置↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10377) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateMixStreamConfig`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUpdateMixStreamConfigRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/updateMixStreamConfig',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [修改混流配置↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10377) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateMixStreamConfig`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUpdateMixStreamConfigRequestConfig: PostLivefrontLiveUpdateMixStreamConfigRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/livefront/live/updateMixStreamConfig',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUpdateMixStreamConfig',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [修改混流配置↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10377) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/updateMixStreamConfig`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUpdateMixStreamConfig = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUpdateMixStreamConfigRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUpdateMixStreamConfigResponse>(
    prepare(postLivefrontLiveUpdateMixStreamConfigRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUpdateMixStreamConfig.requestConfig = postLivefrontLiveUpdateMixStreamConfigRequestConfig;

/**
 * 接口 [录播数据采集↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10385) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/videoUserCollect`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveVideoUserCollectRequest {
  livestream_id?: number;
  user_id?: number;
  record_id?: number;
}

/**
 * 接口 [录播数据采集↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10385) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/videoUserCollect`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveVideoUserCollectResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [录播数据采集↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10385) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/videoUserCollect`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveVideoUserCollectRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/videoUserCollect',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [录播数据采集↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10385) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/videoUserCollect`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveVideoUserCollectRequestConfig: PostLivefrontLiveVideoUserCollectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/videoUserCollect',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveVideoUserCollect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [录播数据采集↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10385) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/videoUserCollect`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveVideoUserCollect = /*#__PURE__*/ (
  requestData: PostLivefrontLiveVideoUserCollectRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveVideoUserCollectResponse>(
    prepare(postLivefrontLiveVideoUserCollectRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveVideoUserCollect.requestConfig = postLivefrontLiveVideoUserCollectRequestConfig;

/**
 * 接口 [获取群资料信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10393) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/info/{channel}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveImGroupInfoChannelRequest {
  /**
   * 房间号
   */
  channel: string;
}

/**
 * 接口 [获取群资料信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10393) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/info/{channel}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveImGroupInfoChannelResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [获取群资料信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10393) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/info/{channel}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveImGroupInfoChannelRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/im/group/info/{channel}',
    'data',
    'channel',
    string,
    false
  >
>;

/**
 * 接口 [获取群资料信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10393) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/info/{channel}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveImGroupInfoChannelRequestConfig: GetLivefrontLiveImGroupInfoChannelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/im/group/info/{channel}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: ['channel'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveImGroupInfoChannel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取群资料信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10393) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/info/{channel}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveImGroupInfoChannel = /*#__PURE__*/ (
  requestData: GetLivefrontLiveImGroupInfoChannelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveImGroupInfoChannelResponse>(
    prepare(getLivefrontLiveImGroupInfoChannelRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveImGroupInfoChannel.requestConfig = getLivefrontLiveImGroupInfoChannelRequestConfig;

/**
 * 接口 [获取群成员信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10401) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/member/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveImGroupMemberInfoRequest {
  /**
   * 房间号
   */
  channel: string;
  /**
   * 用户id
   */
  user_id: string;
  /**
   * key  默认为 extParams
   */
  key?: string;
}

/**
 * 接口 [获取群成员信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10401) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/member/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveImGroupMemberInfoResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [获取群成员信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10401) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/member/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveImGroupMemberInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/im/group/member/info',
    'data',
    string,
    'channel' | 'user_id' | 'key',
    false
  >
>;

/**
 * 接口 [获取群成员信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10401) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/member/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveImGroupMemberInfoRequestConfig: GetLivefrontLiveImGroupMemberInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/im/group/member/info',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['channel', 'user_id', 'key'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveImGroupMemberInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取群成员信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10401) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `GET /livefront/live/im/group/member/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveImGroupMemberInfo = /*#__PURE__*/ (
  requestData: GetLivefrontLiveImGroupMemberInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveImGroupMemberInfoResponse>(
    prepare(getLivefrontLiveImGroupMemberInfoRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveImGroupMemberInfo.requestConfig = getLivefrontLiveImGroupMemberInfoRequestConfig;

/**
 * 接口 [testParam1↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10601) 的 **请求类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/test1`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveTest1Request {
  /**
   * 操作类型 0-取消主讲 1-设为主讲
   */
  type: boolean;
  /**
   * 被操作用户ID
   */
  user_id: number;
}

/**
 * 接口 [testParam1↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10601) 的 **返回类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/test1`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveTest1Response {
  /**
   * 状态码
   */
  code?: number;
  /**
   * 返回内容
   */
  tip?: string;
  /**
   * 返回结果列表
   */
  list?: {}[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [testParam1↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10601) 的 **请求配置的类型**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/test1`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveTest1RequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/13', '', '', '/livefront/live/test1', 'data', string, string, false>
>;

/**
 * 接口 [testParam1↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10601) 的 **请求配置**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/test1`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveTest1RequestConfig: PostLivefrontLiveTest1RequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/livefront/live/test1',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveTest1',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [testParam1↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10601) 的 **请求函数**
 *
 * @分类 [直播↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_631)
 * @请求头 `POST /livefront/live/test1`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveTest1 = /*#__PURE__*/ (
  requestData: PostLivefrontLiveTest1Request,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveTest1Response>(prepare(postLivefrontLiveTest1RequestConfig, requestData), ...args);
};

postLivefrontLiveTest1.requestConfig = postLivefrontLiveTest1RequestConfig;

const mockUrl_0_0_0_1 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 [直播间禁言↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10225) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/mute`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersMuteRequest {
  /**
   * 禁言状态
   */
  speak_status: 0 | 1;
  /**
   * 被禁言的用户id
   */
  user_ids: string[];
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [直播间禁言↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10225) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/mute`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersMuteResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [直播间禁言↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10225) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/mute`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveUserLivestreamIdUsersMuteRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{livestreamId}/users/mute',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [直播间禁言↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10225) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/mute`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveUserLivestreamIdUsersMuteRequestConfig: PostLivefrontLiveUserLivestreamIdUsersMuteRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/livefront/live/user/{livestreamId}/users/mute',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUserLivestreamIdUsersMute',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [直播间禁言↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10225) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/mute`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveUserLivestreamIdUsersMute = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUserLivestreamIdUsersMuteRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUserLivestreamIdUsersMuteResponse>(
    prepare(postLivefrontLiveUserLivestreamIdUsersMuteRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUserLivestreamIdUsersMute.requestConfig = postLivefrontLiveUserLivestreamIdUsersMuteRequestConfig;

/**
 * 接口 [直播间踢出用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10233) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/kick`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersKickRequest {
  /**
   * 用户id
   */
  user_id: number;
  /**
   * 允许直播间状态
   */
  kick_status: 0 | 1;
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [直播间踢出用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10233) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/kick`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersKickResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [直播间踢出用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10233) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/kick`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveUserLivestreamIdUsersKickRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{livestreamId}/users/kick',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [直播间踢出用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10233) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/kick`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveUserLivestreamIdUsersKickRequestConfig: PostLivefrontLiveUserLivestreamIdUsersKickRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/livefront/live/user/{livestreamId}/users/kick',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUserLivestreamIdUsersKick',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [直播间踢出用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10233) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/kick`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveUserLivestreamIdUsersKick = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUserLivestreamIdUsersKickRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUserLivestreamIdUsersKickResponse>(
    prepare(postLivefrontLiveUserLivestreamIdUsersKickRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUserLivestreamIdUsersKick.requestConfig = postLivefrontLiveUserLivestreamIdUsersKickRequestConfig;

/**
 * 接口 [获取群聊历史消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10241) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `GET /livefront/live/history/msg/{channel}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveHistoryMsgChannelRequest {
  /**
   * 直播间频道号
   */
  channel: string;
}

/**
 * 接口 [获取群聊历史消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10241) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `GET /livefront/live/history/msg/{channel}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface GetLivefrontLiveHistoryMsgChannelResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  list?: {}[];
}

/**
 * 接口 [获取群聊历史消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10241) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `GET /livefront/live/history/msg/{channel}`
 * @更新时间 `2022-08-03 16:27:14`
 */
type GetLivefrontLiveHistoryMsgChannelRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/history/msg/{channel}',
    'data',
    'channel',
    string,
    false
  >
>;

/**
 * 接口 [获取群聊历史消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10241) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `GET /livefront/live/history/msg/{channel}`
 * @更新时间 `2022-08-03 16:27:14`
 */
const getLivefrontLiveHistoryMsgChannelRequestConfig: GetLivefrontLiveHistoryMsgChannelRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/livefront/live/history/msg/{channel}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['channel'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveHistoryMsgChannel',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [获取群聊历史消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10241) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `GET /livefront/live/history/msg/{channel}`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const getLivefrontLiveHistoryMsgChannel = /*#__PURE__*/ (
  requestData: GetLivefrontLiveHistoryMsgChannelRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveHistoryMsgChannelResponse>(
    prepare(getLivefrontLiveHistoryMsgChannelRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveHistoryMsgChannel.requestConfig = getLivefrontLiveHistoryMsgChannelRequestConfig;

/**
 * 接口 [群组消息撤回↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10249) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `PATCH /livefront/live/group/msg/recall`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveGroupMsgRecallRequest {
  /**
   * 房间号
   */
  channel?: string;
  /**
   * 请求撤回的消息 seq
   */
  msg_seq: number;
}

/**
 * 接口 [群组消息撤回↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10249) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `PATCH /livefront/live/group/msg/recall`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PatchLivefrontLiveGroupMsgRecallResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    rsp_msg_list?: {
      /**
       * 消息的发送者
       */
      from__account?: string;
      /**
       * 发送者昵称
       */
      from__name?: string;
      /**
       * 发送者头像
       */
      from_head?: string;
      /**
       * 消息的发送者
       */
      is_place_msg?: string;
      /**
       * 消息内容 Array
       */
      msg_body?: {}[];
      /**
       * 消息的优先级，用于消息去重，有客户端发消息时填写，如果没有填，服务端会自动生成，1表示 High 优先级消息，2表示 Normal 优先级消息，3表示 Low 优先级消息，4表示 Lowest 优先级消息
       */
      msg_priority?: number;
      /**
       * 消息随机值，用于对消息去重，有客户端发消息时填写，如果没有填，服务端会自动生成
       */
      msg_random?: number;
      /**
       * 消息 seq，用于标识唯一消息，值越小发送的越早
       */
      msg_seq?: number;
      /**
       * 消息被发送的时间戳，server 的时间
       */
      msg_time_stamp?: number;
    }[];
    /**
     * 请求处理的结果，OK 表示处理成功，FAIL 表示失败，如果为 FAIL，ErrorInfo 带上失败原因
     */
    action_status?: string;
    /**
     * 失败原因
     */
    error_info?: string;
    /**
     * 错误码，0为成功，其他为失败，可查询 错误码表 得到具体的原因
     * 错误码表URL： https://cloud.tencent.com/document/product/269/1671
     */
    error_code?: string;
  };
}

/**
 * 接口 [群组消息撤回↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10249) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `PATCH /livefront/live/group/msg/recall`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PatchLivefrontLiveGroupMsgRecallRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/group/msg/recall',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [群组消息撤回↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10249) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `PATCH /livefront/live/group/msg/recall`
 * @更新时间 `2022-08-03 16:27:14`
 */
const patchLivefrontLiveGroupMsgRecallRequestConfig: PatchLivefrontLiveGroupMsgRecallRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/livefront/live/group/msg/recall',
  method: Method.PATCH,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'patchLivefrontLiveGroupMsgRecall',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [群组消息撤回↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10249) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `PATCH /livefront/live/group/msg/recall`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const patchLivefrontLiveGroupMsgRecall = /*#__PURE__*/ (
  requestData: PatchLivefrontLiveGroupMsgRecallRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchLivefrontLiveGroupMsgRecallResponse>(
    prepare(patchLivefrontLiveGroupMsgRecallRequestConfig, requestData),
    ...args,
  );
};

patchLivefrontLiveGroupMsgRecall.requestConfig = patchLivefrontLiveGroupMsgRecallRequestConfig;

/**
 * 接口 [添加群成员↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10289) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/group/member`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveGroupMemberRequest {
  /**
   * 直播间id
   */
  livestream_id: number;
  /**
   * 群成员ID
   */
  user_id: number;
}

/**
 * 接口 [添加群成员↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10289) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/group/member`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveGroupMemberResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [添加群成员↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10289) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/group/member`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveGroupMemberRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/group/member',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [添加群成员↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10289) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/group/member`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveGroupMemberRequestConfig: PostLivefrontLiveGroupMemberRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/livefront/live/group/member',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveGroupMember',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [添加群成员↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10289) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/group/member`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveGroupMember = /*#__PURE__*/ (
  requestData: PostLivefrontLiveGroupMemberRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveGroupMemberResponse>(
    prepare(postLivefrontLiveGroupMemberRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveGroupMember.requestConfig = postLivefrontLiveGroupMemberRequestConfig;

/**
 * 接口 [发送IM系统自定义消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10305) 的 **请求类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/im/send/system/customMsg`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveImSendSystemCustomMsgRequest {
  /**
   * 行为
   */
  action?: string;
  /**
   * 房间号
   */
  channel_id: string;
  /**
   * 自定义数据
   */
  data?: {};
  /**
   * 发送用户
   */
  member_list?: string[];
}

/**
 * 接口 [发送IM系统自定义消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10305) 的 **返回类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/im/send/system/customMsg`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveImSendSystemCustomMsgResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [发送IM系统自定义消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10305) 的 **请求配置的类型**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/im/send/system/customMsg`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveImSendSystemCustomMsgRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/im/send/system/customMsg',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [发送IM系统自定义消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10305) 的 **请求配置**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/im/send/system/customMsg`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveImSendSystemCustomMsgRequestConfig: PostLivefrontLiveImSendSystemCustomMsgRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/livefront/live/im/send/system/customMsg',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveImSendSystemCustomMsg',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [发送IM系统自定义消息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10305) 的 **请求函数**
 *
 * @分类 [IM相关↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_635)
 * @请求头 `POST /livefront/live/im/send/system/customMsg`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveImSendSystemCustomMsg = /*#__PURE__*/ (
  requestData: PostLivefrontLiveImSendSystemCustomMsgRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveImSendSystemCustomMsgResponse>(
    prepare(postLivefrontLiveImSendSystemCustomMsgRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveImSendSystemCustomMsg.requestConfig = postLivefrontLiveImSendSystemCustomMsgRequestConfig;

const mockUrl_0_0_0_2 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 [直播间在线人数查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10257) 的 **请求类型**
 *
 * @分类 [直播管理↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_639)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/count`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersCountRequest {
  /**
   * 直播间频道号
   */
  channel?: string;
  /**
   * 通行证
   */
  ticket?: string;
  /**
   * 用户名字
   */
  name?: string;
  /**
   * 语言, 后期讨论
   */
  language_type?: string;
  /**
   * 用户id
   */
  live_user_id?: string;
  /**
   * 直播间 id
   */
  livestream_id: number;
  /**
   * 【该参数不用传递】
   * token放到请求头中auth-token，如果放到这里取不到数据，白名单会报错试看已结束
   */
  auth_token?: string;
  /**
   * 进入用户类型 1-主播 2-管理员 3-观众 4-白名单 5-嘉宾
   */
  user_type: number;
  /**
   * 直播间ID
   */
  livestreamId: string;
}

/**
 * 接口 [直播间在线人数查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10257) 的 **返回类型**
 *
 * @分类 [直播管理↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_639)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/count`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveUserLivestreamIdUsersCountResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [直播间在线人数查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10257) 的 **请求配置的类型**
 *
 * @分类 [直播管理↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_639)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/count`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveUserLivestreamIdUsersCountRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{livestreamId}/users/count',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [直播间在线人数查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10257) 的 **请求配置**
 *
 * @分类 [直播管理↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_639)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/count`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveUserLivestreamIdUsersCountRequestConfig: PostLivefrontLiveUserLivestreamIdUsersCountRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/livefront/live/user/{livestreamId}/users/count',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUserLivestreamIdUsersCount',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [直播间在线人数查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10257) 的 **请求函数**
 *
 * @分类 [直播管理↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_639)
 * @请求头 `POST /livefront/live/user/{livestreamId}/users/count`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveUserLivestreamIdUsersCount = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUserLivestreamIdUsersCountRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUserLivestreamIdUsersCountResponse>(
    prepare(postLivefrontLiveUserLivestreamIdUsersCountRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUserLivestreamIdUsersCount.requestConfig = postLivefrontLiveUserLivestreamIdUsersCountRequestConfig;

const mockUrl_0_0_0_3 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_3 = '' as any;
const prodUrl_0_0_0_3 = '' as any;
const dataKey_0_0_0_3 = 'data' as any;

/**
 * 接口 [查询直播用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10265) 的 **请求类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{livestreamId}/users`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveUserLivestreamIdUsersRequest {
  /**
   * 直播间id
   */
  livestream_id?: string;
  /**
   * 用户名字
   */
  name?: string;
  /**
   * 用户角色
   */
  role?: string;
  /**
   * 允许进入直播间状态
   */
  kick_status?: string;
  /**
   * 禁言状态
   */
  speak_status?: string;
  /**
   * 连麦状态
   */
  microphone_status?: string;
  /**
   * 用户id
   */
  user_id?: string;
  /**
   * 当前记录起始索引
   */
  page_no?: string;
  /**
   * 每页显示记录数
   */
  page_size?: string;
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [查询直播用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10265) 的 **返回类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{livestreamId}/users`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveUserLivestreamIdUsersResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * id
     */
    id?: number;
    /**
     * 直播id
     */
    livestream_id?: number;
    /**
     * 头像
     */
    head_url?: string;
    /**
     * 进入直播间状态 0-不允许 1-允许
     */
    kick_status?: number;
    /**
     * 发言状态 0-禁言 1-允许发言
     */
    speak_status?: number;
    /**
     * 角色 1-主持人 2-管理员 3-观众
     */
    role?: number;
    /**
     * 通行证
     */
    ticket?: string;
    /**
     * 名字
     */
    name?: string;
    /**
     * 头衔
     */
    title?: string;
    /**
     * 状态 0/1
     */
    status?: string;
    /**
     * 观众注册位置 0-非观众角色 1-直播页 2-录播页
     */
    sign_up_position?: number;
    /**
     * 租户ID
     */
    tenant_id?: number;
    permission?: string;
    /**
     * 连麦状态，apply ,normal
     */
    microphone_status?: string;
    ip?: string;
    /**
     * 终端来源 app、pad、pc
     */
    source?: string;
    /**
     * 用户编号
     */
    number?: string;
    /**
     * 搜索值
     */
    search_value?: string;
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 更新时间
     */
    update_time?: string;
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [查询直播用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10265) 的 **请求配置的类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{livestreamId}/users`
 * @更新时间 `2022-08-03 16:27:15`
 */
type GetLivefrontLiveUserLivestreamIdUsersRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{livestreamId}/users',
    'data',
    'livestreamId',
    | 'livestream_id'
    | 'name'
    | 'role'
    | 'kick_status'
    | 'speak_status'
    | 'microphone_status'
    | 'user_id'
    | 'page_no'
    | 'page_size',
    false
  >
>;

/**
 * 接口 [查询直播用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10265) 的 **请求配置**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{livestreamId}/users`
 * @更新时间 `2022-08-03 16:27:15`
 */
const getLivefrontLiveUserLivestreamIdUsersRequestConfig: GetLivefrontLiveUserLivestreamIdUsersRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/livefront/live/user/{livestreamId}/users',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: ['livestreamId'],
    queryNames: [
      'livestream_id',
      'name',
      'role',
      'kick_status',
      'speak_status',
      'microphone_status',
      'user_id',
      'page_no',
      'page_size',
    ],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUserLivestreamIdUsers',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询直播用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10265) 的 **请求函数**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{livestreamId}/users`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const getLivefrontLiveUserLivestreamIdUsers = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUserLivestreamIdUsersRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUserLivestreamIdUsersResponse>(
    prepare(getLivefrontLiveUserLivestreamIdUsersRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUserLivestreamIdUsers.requestConfig = getLivefrontLiveUserLivestreamIdUsersRequestConfig;

/**
 * 接口 [更新用户接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10273) 的 **请求类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `PUT /livefront/live/user/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PutLivefrontLiveUserLivestreamIdRequest {
  /**
   * 用户id
   */
  user_id: number;
  /**
   * 用户昵称
   */
  name?: string;
  /**
   * 头像url
   */
  head_url?: string;
  /**
   * 头衔
   */
  title?: string;
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [更新用户接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10273) 的 **返回类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `PUT /livefront/live/user/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PutLivefrontLiveUserLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [更新用户接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10273) 的 **请求配置的类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `PUT /livefront/live/user/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PutLivefrontLiveUserLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{livestreamId}',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [更新用户接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10273) 的 **请求配置**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `PUT /livefront/live/user/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
const putLivefrontLiveUserLivestreamIdRequestConfig: PutLivefrontLiveUserLivestreamIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/livefront/live/user/{livestreamId}',
  method: Method.PUT,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['livestreamId'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'putLivefrontLiveUserLivestreamId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [更新用户接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10273) 的 **请求函数**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `PUT /livefront/live/user/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const putLivefrontLiveUserLivestreamId = /*#__PURE__*/ (
  requestData: PutLivefrontLiveUserLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PutLivefrontLiveUserLivestreamIdResponse>(
    prepare(putLivefrontLiveUserLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

putLivefrontLiveUserLivestreamId.requestConfig = putLivefrontLiveUserLivestreamIdRequestConfig;

/**
 * 接口 [查询用户信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10281) 的 **请求类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{userId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveUserUserIdRequest {
  /**
   * 用户id
   */
  userId: string;
}

/**
 * 接口 [查询用户信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10281) 的 **返回类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{userId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveUserUserIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [查询用户信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10281) 的 **请求配置的类型**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{userId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
type GetLivefrontLiveUserUserIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/user/{userId}',
    'data',
    'userId',
    string,
    false
  >
>;

/**
 * 接口 [查询用户信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10281) 的 **请求配置**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{userId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
const getLivefrontLiveUserUserIdRequestConfig: GetLivefrontLiveUserUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/livefront/live/user/{userId}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['userId'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveUserUserId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [查询用户信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10281) 的 **请求函数**
 *
 * @分类 [IM 聊天相关接口↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_643)
 * @请求头 `GET /livefront/live/user/{userId}`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const getLivefrontLiveUserUserId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUserUserIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUserUserIdResponse>(
    prepare(getLivefrontLiveUserUserIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUserUserId.requestConfig = getLivefrontLiveUserUserIdRequestConfig;

const mockUrl_0_0_0_4 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_4 = '' as any;
const prodUrl_0_0_0_4 = '' as any;
const dataKey_0_0_0_4 = 'data' as any;

/**
 * 接口 [切换白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10313) 的 **请求类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/switch`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardSwitchRequest {
  /**
   * 1-切换成视频 2-切换成白板
   */
  type: number;
  /**
   * 直播间ID
   */
  livestream_id: number;
}

/**
 * 接口 [切换白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10313) 的 **返回类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/switch`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardSwitchResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [切换白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10313) 的 **请求配置的类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/switch`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveWhiteboardSwitchRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/whiteboard/switch',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [切换白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10313) 的 **请求配置**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/switch`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveWhiteboardSwitchRequestConfig: PostLivefrontLiveWhiteboardSwitchRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/livefront/live/whiteboard/switch',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveWhiteboardSwitch',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [切换白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10313) 的 **请求函数**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/switch`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveWhiteboardSwitch = /*#__PURE__*/ (
  requestData: PostLivefrontLiveWhiteboardSwitchRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveWhiteboardSwitchResponse>(
    prepare(postLivefrontLiveWhiteboardSwitchRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveWhiteboardSwitch.requestConfig = postLivefrontLiveWhiteboardSwitchRequestConfig;

/**
 * 接口 [查询切换白板记录列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10321) 的 **请求类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `GET /livefront/live/whiteboard/recordList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveWhiteboardRecordListRequest {
  /**
   * 直播间ID
   */
  livestream_id: string;
}

/**
 * 接口 [查询切换白板记录列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10321) 的 **返回类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `GET /livefront/live/whiteboard/recordList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveWhiteboardRecordListResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * 切换的时间点，相对于开始时间而言，单位是毫秒
     */
    ts?: number;
    /**
     * 切换后状态 1-视频 2-白板
     */
    type?: number;
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [查询切换白板记录列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10321) 的 **请求配置的类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `GET /livefront/live/whiteboard/recordList`
 * @更新时间 `2022-08-03 16:27:15`
 */
type GetLivefrontLiveWhiteboardRecordListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/whiteboard/recordList',
    'data',
    string,
    'livestream_id',
    false
  >
>;

/**
 * 接口 [查询切换白板记录列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10321) 的 **请求配置**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `GET /livefront/live/whiteboard/recordList`
 * @更新时间 `2022-08-03 16:27:15`
 */
const getLivefrontLiveWhiteboardRecordListRequestConfig: GetLivefrontLiveWhiteboardRecordListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/livefront/live/whiteboard/recordList',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: ['livestream_id'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveWhiteboardRecordList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询切换白板记录列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10321) 的 **请求函数**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `GET /livefront/live/whiteboard/recordList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const getLivefrontLiveWhiteboardRecordList = /*#__PURE__*/ (
  requestData: GetLivefrontLiveWhiteboardRecordListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveWhiteboardRecordListResponse>(
    prepare(getLivefrontLiveWhiteboardRecordListRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveWhiteboardRecordList.requestConfig = getLivefrontLiveWhiteboardRecordListRequestConfig;

/**
 * 接口 [白板推流↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10329) 的 **请求类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/streamHandler`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardStreamHandlerRequest {
  /**
   * 直播间ID
   */
  livestream_id: number;
  /**
   * 1-白板推流 2-屏幕共享
   */
  type: number;
}

/**
 * 接口 [白板推流↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10329) 的 **返回类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/streamHandler`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveWhiteboardStreamHandlerResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [白板推流↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10329) 的 **请求配置的类型**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/streamHandler`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveWhiteboardStreamHandlerRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/whiteboard/streamHandler',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [白板推流↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10329) 的 **请求配置**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/streamHandler`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveWhiteboardStreamHandlerRequestConfig: PostLivefrontLiveWhiteboardStreamHandlerRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/livefront/live/whiteboard/streamHandler',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveWhiteboardStreamHandler',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [白板推流↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10329) 的 **请求函数**
 *
 * @分类 [白板↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_647)
 * @请求头 `POST /livefront/live/whiteboard/streamHandler`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveWhiteboardStreamHandler = /*#__PURE__*/ (
  requestData: PostLivefrontLiveWhiteboardStreamHandlerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveWhiteboardStreamHandlerResponse>(
    prepare(postLivefrontLiveWhiteboardStreamHandlerRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveWhiteboardStreamHandler.requestConfig = postLivefrontLiveWhiteboardStreamHandlerRequestConfig;

const mockUrl_0_0_0_5 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_5 = '' as any;
const prodUrl_0_0_0_5 = '' as any;
const dataKey_0_0_0_5 = 'data' as any;

/**
 * 接口 [连麦动作更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10353) 的 **请求类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `PATCH /livefront/live/changeMicrophoneAction`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PatchLivefrontLiveChangeMicrophoneActionRequest {
  livestream_id: number;
  /**
   * 观众端申请，取消连麦,主讲踢出（断开）用户三种都需要传递用户ID
   */
  user_id?: number;
  /**
   * 1-申请 2-同意 3-拒绝 4-取消 5-断开连麦
   */
  operate: number;
}

/**
 * 接口 [连麦动作更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10353) 的 **返回类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `PATCH /livefront/live/changeMicrophoneAction`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PatchLivefrontLiveChangeMicrophoneActionResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [连麦动作更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10353) 的 **请求配置的类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `PATCH /livefront/live/changeMicrophoneAction`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PatchLivefrontLiveChangeMicrophoneActionRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/changeMicrophoneAction',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [连麦动作更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10353) 的 **请求配置**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `PATCH /livefront/live/changeMicrophoneAction`
 * @更新时间 `2022-08-03 16:27:15`
 */
const patchLivefrontLiveChangeMicrophoneActionRequestConfig: PatchLivefrontLiveChangeMicrophoneActionRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/livefront/live/changeMicrophoneAction',
    method: Method.PATCH,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'patchLivefrontLiveChangeMicrophoneAction',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [连麦动作更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10353) 的 **请求函数**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `PATCH /livefront/live/changeMicrophoneAction`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const patchLivefrontLiveChangeMicrophoneAction = /*#__PURE__*/ (
  requestData: PatchLivefrontLiveChangeMicrophoneActionRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PatchLivefrontLiveChangeMicrophoneActionResponse>(
    prepare(patchLivefrontLiveChangeMicrophoneActionRequestConfig, requestData),
    ...args,
  );
};

patchLivefrontLiveChangeMicrophoneAction.requestConfig = patchLivefrontLiveChangeMicrophoneActionRequestConfig;

/**
 * 接口 [查询连麦（申请\/在线）列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10361) 的 **请求类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `GET /livefront/live/connectMicrophoneList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveConnectMicrophoneListRequest {
  /**
   * 连麦状态 1-申请 2-已连麦
   */
  type: string;
  /**
   * 直播间ID
   */
  livestream_id: string;
  /**
   * 当前记录起始索引
   */
  page_no?: string;
  /**
   * 每页显示记录数
   */
  page_size?: string;
}

/**
 * 接口 [查询连麦（申请\/在线）列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10361) 的 **返回类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `GET /livefront/live/connectMicrophoneList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface GetLivefrontLiveConnectMicrophoneListResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * 用户ID
     */
    user_id?: number;
    /**
     * 用户名字
     */
    name?: string;
    /**
     * 头像
     */
    head_url?: string;
    /**
     * 麦克风状态 0-用户断开,1-用户开启，2-主播关闭
     */
    mic_status?: number;
    /**
     * 摄像头状态 0-用户断开,1-用户开启，2-主播关闭
     */
    camera_status?: number;
    /**
     * 角色 1-主持人 2、管理员 3-观众 4-嘉宾
     */
    role?: number;
    /**
     * 用户在线状态
     */
    online_status?: number;
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [查询连麦（申请\/在线）列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10361) 的 **请求配置的类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `GET /livefront/live/connectMicrophoneList`
 * @更新时间 `2022-08-03 16:27:15`
 */
type GetLivefrontLiveConnectMicrophoneListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/connectMicrophoneList',
    'data',
    string,
    'type' | 'livestream_id' | 'page_no' | 'page_size',
    false
  >
>;

/**
 * 接口 [查询连麦（申请\/在线）列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10361) 的 **请求配置**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `GET /livefront/live/connectMicrophoneList`
 * @更新时间 `2022-08-03 16:27:15`
 */
const getLivefrontLiveConnectMicrophoneListRequestConfig: GetLivefrontLiveConnectMicrophoneListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/livefront/live/connectMicrophoneList',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: ['type', 'livestream_id', 'page_no', 'page_size'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveConnectMicrophoneList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询连麦（申请\/在线）列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10361) 的 **请求函数**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `GET /livefront/live/connectMicrophoneList`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const getLivefrontLiveConnectMicrophoneList = /*#__PURE__*/ (
  requestData: GetLivefrontLiveConnectMicrophoneListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveConnectMicrophoneListResponse>(
    prepare(getLivefrontLiveConnectMicrophoneListRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveConnectMicrophoneList.requestConfig = getLivefrontLiveConnectMicrophoneListRequestConfig;

/**
 * 接口 [用户麦克风，摄像头状态更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10369) 的 **请求类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `POST /livefront/live/updateUserMicCameraStatus`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveUpdateUserMicCameraStatusRequest {
  /**
   * 麦克风状态 0-用户断开,1-用户开启，2-主播关闭
   */
  mic_status?: number;
  /**
   * 摄像头状态 0-用户断开,1-用户开启，2-主播关闭
   */
  camera_status?: number;
  /**
   * 如果是自己开关连麦就是自己的userId, 如果是主播操作就是被操作的userId
   */
  user_id: number;
}

/**
 * 接口 [用户麦克风，摄像头状态更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10369) 的 **返回类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `POST /livefront/live/updateUserMicCameraStatus`
 * @更新时间 `2022-08-03 16:27:15`
 */
export interface PostLivefrontLiveUpdateUserMicCameraStatusResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [用户麦克风，摄像头状态更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10369) 的 **请求配置的类型**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `POST /livefront/live/updateUserMicCameraStatus`
 * @更新时间 `2022-08-03 16:27:15`
 */
type PostLivefrontLiveUpdateUserMicCameraStatusRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/updateUserMicCameraStatus',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [用户麦克风，摄像头状态更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10369) 的 **请求配置**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `POST /livefront/live/updateUserMicCameraStatus`
 * @更新时间 `2022-08-03 16:27:15`
 */
const postLivefrontLiveUpdateUserMicCameraStatusRequestConfig: PostLivefrontLiveUpdateUserMicCameraStatusRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/livefront/live/updateUserMicCameraStatus',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUpdateUserMicCameraStatus',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [用户麦克风，摄像头状态更新↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10369) 的 **请求函数**
 *
 * @分类 [连麦↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_651)
 * @请求头 `POST /livefront/live/updateUserMicCameraStatus`
 * @更新时间 `2022-08-03 16:27:15`
 */
export const postLivefrontLiveUpdateUserMicCameraStatus = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUpdateUserMicCameraStatusRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUpdateUserMicCameraStatusResponse>(
    prepare(postLivefrontLiveUpdateUserMicCameraStatusRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUpdateUserMicCameraStatus.requestConfig = postLivefrontLiveUpdateUserMicCameraStatusRequestConfig;

const mockUrl_0_0_0_6 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_6 = '' as any;
const prodUrl_0_0_0_6 = '' as any;
const dataKey_0_0_0_6 = 'data' as any;

/**
 * 接口 [创建签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10409) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/createSign`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsSignCreateSignRequest {
  /**
   * 签到标题
   */
  name: string;
  /**
   * 持续时间,默认时间为3分钟
   */
  duration: number;
  /**
   * 直播间ID
   */
  livestream_id: number;
}

/**
 * 接口 [创建签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10409) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/createSign`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsSignCreateSignResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: string;
}

/**
 * 接口 [创建签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10409) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/createSign`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsSignCreateSignRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/sign/createSign',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [创建签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10409) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/createSign`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsSignCreateSignRequestConfig: PostLivefrontLiveUtilsSignCreateSignRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/sign/createSign',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsSignCreateSign',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [创建签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10409) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/createSign`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsSignCreateSign = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsSignCreateSignRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsSignCreateSignResponse>(
    prepare(postLivefrontLiveUtilsSignCreateSignRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsSignCreateSign.requestConfig = postLivefrontLiveUtilsSignCreateSignRequestConfig;

/**
 * 接口 [签到统计信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10417) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequest {
  /**
   * 签到id
   */
  id: string;
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [签到统计信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10417) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * 签到标题
     */
    name?: string;
    /**
     * 签到序号，标识第几次签到，从1开始
     */
    seq?: number;
    /**
     * 签到人数
     */
    sign_count?: number;
    /**
     * 观看人数
     */
    video_count?: number;
  };
}

/**
 * 接口 [签到统计信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10417) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}',
    'data',
    'id' | 'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [签到统计信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10417) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequestConfig: GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['id', 'livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsSignStatisticsSignIdLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [签到统计信息↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10417) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/statisticsSign/{id}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsSignStatisticsSignIdLivestreamId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdResponse>(
    prepare(getLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsSignStatisticsSignIdLivestreamId.requestConfig =
  getLivefrontLiveUtilsSignStatisticsSignIdLivestreamIdRequestConfig;

/**
 * 接口 [观众名单↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10425) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/audienceList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignAudienceListRequest {
  /**
   * 直播间ID
   */
  livestream_id: string;
  /**
   * 签到统计状态 0-全部 1-未签到 2-已签到
   */
  status?: string;
  /**
   * 当前记录起始索引
   */
  page_no?: string;
  /**
   * 每页显示记录数
   */
  page_size?: string;
}

/**
 * 接口 [观众名单↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10425) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/audienceList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignAudienceListResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    name?: string;
    /**
     * 签到状态 1-未签到 2-已签到
     */
    status?: 'UN_SIGN' | 'SIGNED';
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [观众名单↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10425) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/audienceList`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsSignAudienceListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/sign/audienceList',
    'data',
    string,
    'livestream_id' | 'status' | 'page_no' | 'page_size',
    false
  >
>;

/**
 * 接口 [观众名单↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10425) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/audienceList`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsSignAudienceListRequestConfig: GetLivefrontLiveUtilsSignAudienceListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/sign/audienceList',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['livestream_id', 'status', 'page_no', 'page_size'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsSignAudienceList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [观众名单↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10425) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/audienceList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsSignAudienceList = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsSignAudienceListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsSignAudienceListResponse>(
    prepare(getLivefrontLiveUtilsSignAudienceListRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsSignAudienceList.requestConfig = getLivefrontLiveUtilsSignAudienceListRequestConfig;

/**
 * 接口 [签到列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10433) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignIdRequest {
  /**
   * 直播间ID
   */
  id: string;
}

/**
 * 接口 [签到列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10433) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsSignIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  list?: {
    /**
     * 签到序号
     */
    seq?: number;
    /**
     * 签到标题
     */
    name?: string;
    /**
     * 结束时间 毫秒
     */
    time?: number;
    /**
     * 签到ID
     */
    id?: number;
  }[];
}

/**
 * 接口 [签到列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10433) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsSignIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/sign/{id}',
    'data',
    'id',
    string,
    false
  >
>;

/**
 * 接口 [签到列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10433) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsSignIdRequestConfig: GetLivefrontLiveUtilsSignIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/livefront/liveUtils/sign/{id}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveUtilsSignId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [签到列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10433) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsSignId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsSignIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsSignIdResponse>(
    prepare(getLivefrontLiveUtilsSignIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsSignId.requestConfig = getLivefrontLiveUtilsSignIdRequestConfig;

/**
 * 接口 [签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10441) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsSignIdRequest {
  user_id: number;
  /**
   * 直播间ID
   */
  id: string;
}

/**
 * 接口 [签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10441) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsSignIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10441) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsSignIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/sign/{id}',
    'data',
    'id',
    string,
    false
  >
>;

/**
 * 接口 [签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10441) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsSignIdRequestConfig: PostLivefrontLiveUtilsSignIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/livefront/liveUtils/sign/{id}',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveUtilsSignId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [签到↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10441) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/sign/{id}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsSignId = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsSignIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsSignIdResponse>(
    prepare(postLivefrontLiveUtilsSignIdRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsSignId.requestConfig = postLivefrontLiveUtilsSignIdRequestConfig;

/**
 * 接口 [添加答题器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10449) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/add`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionAddRequest {
  /**
   * 直播间id
   */
  livestream_id: number;
  /**
   * 题目类型 1、字母答案  2、数字答案
   */
  type: number;
  /**
   * 答案多个用，号隔开
   */
  answer: string;
  /**
   * 选项
   */
  selection_list: string[];
}

/**
 * 接口 [添加答题器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10449) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/add`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionAddResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [添加答题器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10449) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/add`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsQuestionAddRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/add',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [添加答题器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10449) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/add`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsQuestionAddRequestConfig: PostLivefrontLiveUtilsQuestionAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/livefront/liveUtils/question/add',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveUtilsQuestionAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [添加答题器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10449) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/add`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsQuestionAdd = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsQuestionAddRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsQuestionAddResponse>(
    prepare(postLivefrontLiveUtilsQuestionAddRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsQuestionAdd.requestConfig = postLivefrontLiveUtilsQuestionAddRequestConfig;

/**
 * 接口 [主播更新答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10457) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/anchorUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequest {
  /**
   * 题目id
   */
  id: number;
  /**
   * 答案多个用，号隔开
   */
  answer: string;
}

/**
 * 接口 [主播更新答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10457) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/anchorUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [主播更新答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10457) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/anchorUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/anchorUpdateQuestionAnswer',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [主播更新答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10457) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/anchorUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequestConfig: PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/anchorUpdateQuestionAnswer',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswer',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [主播更新答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10457) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/anchorUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswer = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerResponse>(
    prepare(postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswer.requestConfig =
  postLivefrontLiveUtilsQuestionAnchorUpdateQuestionAnswerRequestConfig;

/**
 * 接口 [用户答题\/修改答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10465) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/userUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequest {
  /**
   * 题目id
   */
  id: number;
  /**
   * 直播间id
   */
  livestream_id: number;
  /**
   * 用户id
   */
  user_id: number;
  /**
   * 答案 多个用,号隔开
   */
  answer: string;
}

/**
 * 接口 [用户答题\/修改答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10465) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/userUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [用户答题\/修改答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10465) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/userUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/userUpdateQuestionAnswer',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [用户答题\/修改答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10465) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/userUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequestConfig: PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/userUpdateQuestionAnswer',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswer',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [用户答题\/修改答案↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10465) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/userUpdateQuestionAnswer`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswer = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerResponse>(
    prepare(postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswer.requestConfig =
  postLivefrontLiveUtilsQuestionUserUpdateQuestionAnswerRequestConfig;

/**
 * 接口 [结束答题↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10473) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/end/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionEndQuestionIdRequest {
  /**
   * 题目 id
   */
  questionId: string;
}

/**
 * 接口 [结束答题↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10473) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/end/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface PostLivefrontLiveUtilsQuestionEndQuestionIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [结束答题↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10473) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/end/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type PostLivefrontLiveUtilsQuestionEndQuestionIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/end/{questionId}',
    'data',
    'questionId',
    string,
    false
  >
>;

/**
 * 接口 [结束答题↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10473) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/end/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const postLivefrontLiveUtilsQuestionEndQuestionIdRequestConfig: PostLivefrontLiveUtilsQuestionEndQuestionIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/end/{questionId}',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.none,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['questionId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsQuestionEndQuestionId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [结束答题↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10473) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/end/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const postLivefrontLiveUtilsQuestionEndQuestionId = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsQuestionEndQuestionIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsQuestionEndQuestionIdResponse>(
    prepare(postLivefrontLiveUtilsQuestionEndQuestionIdRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsQuestionEndQuestionId.requestConfig = postLivefrontLiveUtilsQuestionEndQuestionIdRequestConfig;

/**
 * 接口 [题目详情 ,传入userId 查询用户答题情况不传则不会查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10481) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionInfoRequest {
  /**
   * 题目id
   */
  question_id: string;
  /**
   * 用户id  传入userId 查询用户答题情况不传则不会查询
   */
  user_id?: string;
}

/**
 * 接口 [题目详情 ,传入userId 查询用户答题情况不传则不会查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10481) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionInfoResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * 题目id
     */
    id?: number;
    /**
     * 直播间id
     */
    livestream_id?: number;
    /**
     * 题目类型 1、字母答案  2、数字答案
     */
    type?: number;
    /**
     * 1、进行中、2结束
     */
    status?: number;
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 用户答题状态 1、未答题  2、已答题
     */
    user_answer_status?: number;
    /**
     * 用户选择的选项 多个，号隔开
     */
    user_answer_selection?: string;
    /**
     * 题目选项列表
     */
    livestream_question_selection_list?: {
      id?: number;
      /**
       * 题目id
       */
      question_id?: number;
      /**
       * 选项
       */
      selection?: string;
      /**
       * 排序
       */
      sort?: number;
    }[];
  };
}

/**
 * 接口 [题目详情 ,传入userId 查询用户答题情况不传则不会查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10481) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsQuestionInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/info',
    'data',
    string,
    'question_id' | 'user_id',
    false
  >
>;

/**
 * 接口 [题目详情 ,传入userId 查询用户答题情况不传则不会查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10481) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsQuestionInfoRequestConfig: GetLivefrontLiveUtilsQuestionInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/livefront/liveUtils/question/info',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: ['question_id', 'user_id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveUtilsQuestionInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [题目详情 ,传入userId 查询用户答题情况不传则不会查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10481) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/info`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsQuestionInfo = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsQuestionInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsQuestionInfoResponse>(
    prepare(getLivefrontLiveUtilsQuestionInfoRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsQuestionInfo.requestConfig = getLivefrontLiveUtilsQuestionInfoRequestConfig;

/**
 * 接口 [题统计详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10489) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsInfo/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequest {
  /**
   * 题目 id
   */
  questionId: string;
}

/**
 * 接口 [题统计详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10489) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsInfo/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * 题目id
     */
    id?: number;
    /**
     * 答题总人数
     */
    count?: number;
    /**
     * 已答题人数
     */
    answer_count?: number;
    /**
     * 正确率
     */
    correct_rate?: number;
    /**
     * 正确答案
     */
    answer?: string;
  };
}

/**
 * 接口 [题统计详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10489) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsInfo/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/statisticsInfo/{questionId}',
    'data',
    'questionId',
    string,
    false
  >
>;

/**
 * 接口 [题统计详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10489) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsInfo/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequestConfig: GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/statisticsInfo/{questionId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['questionId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsQuestionStatisticsInfoQuestionId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [题统计详情↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10489) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsInfo/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsQuestionStatisticsInfoQuestionId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdResponse>(
    prepare(getLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsQuestionStatisticsInfoQuestionId.requestConfig =
  getLivefrontLiveUtilsQuestionStatisticsInfoQuestionIdRequestConfig;

/**
 * 接口 [柱状图统计题目选项选择数量↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10497) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequest {
  /**
   * 题目 id
   */
  questionId: string;
}

/**
 * 接口 [柱状图统计题目选项选择数量↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10497) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  list?: {
    /**
     * 选项
     */
    key?: string;
    /**
     * 统计
     */
    value?: number;
  }[];
}

/**
 * 接口 [柱状图统计题目选项选择数量↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10497) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}',
    'data',
    'questionId',
    string,
    false
  >
>;

/**
 * 接口 [柱状图统计题目选项选择数量↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10497) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequestConfig: GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['questionId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [柱状图统计题目选项选择数量↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10497) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/statisticsQuestionSelectionCount/{questionId}`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdResponse>(
    prepare(getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionId.requestConfig =
  getLivefrontLiveUtilsQuestionStatisticsQuestionSelectionCountQuestionIdRequestConfig;

/**
 * 接口 [查询答题用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10505) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/answerUserPageList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionAnswerUserPageListRequest {
  question_id?: string;
  /**
   * 当前记录起始索引
   */
  page_no?: string;
  /**
   * 每页显示记录数
   */
  page_size?: string;
}

/**
 * 接口 [查询答题用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10505) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/answerUserPageList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export interface GetLivefrontLiveUtilsQuestionAnswerUserPageListResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * 用户id
     */
    user_id?: number;
    /**
     * 学生姓名
     */
    user_name?: string;
    /**
     * 答题用时-秒
     */
    duration?: number;
    /**
     * 所选答案
     */
    selection?: string;
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [查询答题用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10505) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/answerUserPageList`
 * @更新时间 `2022-08-03 16:27:16`
 */
type GetLivefrontLiveUtilsQuestionAnswerUserPageListRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/answerUserPageList',
    'data',
    string,
    'question_id' | 'page_no' | 'page_size',
    false
  >
>;

/**
 * 接口 [查询答题用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10505) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/answerUserPageList`
 * @更新时间 `2022-08-03 16:27:16`
 */
const getLivefrontLiveUtilsQuestionAnswerUserPageListRequestConfig: GetLivefrontLiveUtilsQuestionAnswerUserPageListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/answerUserPageList',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['question_id', 'page_no', 'page_size'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsQuestionAnswerUserPageList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询答题用户列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10505) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/question/answerUserPageList`
 * @更新时间 `2022-08-03 16:27:16`
 */
export const getLivefrontLiveUtilsQuestionAnswerUserPageList = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsQuestionAnswerUserPageListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsQuestionAnswerUserPageListResponse>(
    prepare(getLivefrontLiveUtilsQuestionAnswerUserPageListRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsQuestionAnswerUserPageList.requestConfig =
  getLivefrontLiveUtilsQuestionAnswerUserPageListRequestConfig;

/**
 * 接口 [奖励答题用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10513) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/rewardAnswerUser`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsQuestionRewardAnswerUserRequest {
  /**
   * 题目id
   */
  question_id: number;
  /**
   * 1、奖励参与答题用户  2、奖励答题正确用户
   */
  type: number;
  /**
   * 奖品id
   */
  prize_id: number;
}

/**
 * 接口 [奖励答题用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10513) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/rewardAnswerUser`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsQuestionRewardAnswerUserResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [奖励答题用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10513) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/rewardAnswerUser`
 * @更新时间 `2022-08-03 16:27:17`
 */
type PostLivefrontLiveUtilsQuestionRewardAnswerUserRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/question/rewardAnswerUser',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [奖励答题用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10513) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/rewardAnswerUser`
 * @更新时间 `2022-08-03 16:27:17`
 */
const postLivefrontLiveUtilsQuestionRewardAnswerUserRequestConfig: PostLivefrontLiveUtilsQuestionRewardAnswerUserRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/question/rewardAnswerUser',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsQuestionRewardAnswerUser',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [奖励答题用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10513) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/question/rewardAnswerUser`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const postLivefrontLiveUtilsQuestionRewardAnswerUser = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsQuestionRewardAnswerUserRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsQuestionRewardAnswerUserResponse>(
    prepare(postLivefrontLiveUtilsQuestionRewardAnswerUserRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsQuestionRewardAnswerUser.requestConfig =
  postLivefrontLiveUtilsQuestionRewardAnswerUserRequestConfig;

/**
 * 接口 [奖品列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10521) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesRequest {}

/**
 * 接口 [奖品列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10521) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  list?: {
    id?: number;
    /**
     * 奖品名称
     */
    name?: string;
    /**
     * 动态图片
     */
    dynamic_icon_url?: string;
    /**
     * 小图片
     */
    icon_url?: string;
    /**
     * 创建时间
     */
    create_time?: string;
    /**
     * 更新时间
     */
    update_time?: string;
  }[];
}

/**
 * 接口 [奖品列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10521) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes`
 * @更新时间 `2022-08-03 16:27:17`
 */
type GetLivefrontLiveUtilsPrizesRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/prizes',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 [奖品列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10521) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes`
 * @更新时间 `2022-08-03 16:27:17`
 */
const getLivefrontLiveUtilsPrizesRequestConfig: GetLivefrontLiveUtilsPrizesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/livefront/liveUtils/prizes',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getLivefrontLiveUtilsPrizes',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [奖品列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10521) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const getLivefrontLiveUtilsPrizes = /*#__PURE__*/ (
  requestData?: GetLivefrontLiveUtilsPrizesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsPrizesResponse>(
    prepare(getLivefrontLiveUtilsPrizesRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsPrizes.requestConfig = getLivefrontLiveUtilsPrizesRequestConfig;

/**
 * 接口 [奖励统计结果分页查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10529) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/statistics/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequest {
  livestream_id?: string;
  /**
   * 用户名称
   */
  username?: string;
  /**
   * 当前记录起始索引
   */
  page_no?: string;
  /**
   * 每页显示记录数
   */
  page_size?: string;
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [奖励统计结果分页查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10529) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/statistics/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdResponse {
  /**
   * 响应码
   */
  code: number;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 列表数据
   */
  list?: {
    /**
     * 用户id
     */
    user_id?: number;
    /**
     * 用户头像url
     */
    avatar?: string;
    /**
     * 用户昵称
     */
    user_name?: string;
    /**
     * 奖品名字--对应页面的奖励内容
     */
    reward_name?: string;
    /**
     * 奖品的数量
     */
    reward_num?: string;
  }[];
  /**
   * 分页信息
   */
  page_turn?: {
    /**
     * 首页数
     */
    first_page?: number;
    /**
     * 页数
     */
    page_count?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    next_page?: number;
    /**
     * 上一页
     */
    prev_page?: number;
    /**
     * 当前页开始条
     */
    start?: number;
    /**
     * 当前页结束条
     */
    end?: number;
    /**
     * 每页显示的条数
     */
    page_size?: number;
    /**
     * 记录数
     */
    row_count?: number;
    /**
     * 开始记录
     */
    start_index?: number;
  };
}

/**
 * 接口 [奖励统计结果分页查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10529) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/statistics/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/prizes/statistics/{livestreamId}',
    'data',
    'livestreamId',
    'livestream_id' | 'username' | 'page_no' | 'page_size',
    false
  >
>;

/**
 * 接口 [奖励统计结果分页查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10529) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/statistics/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const getLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequestConfig: GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/prizes/statistics/{livestreamId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId'],
    queryNames: ['livestream_id', 'username', 'page_no', 'page_size'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsPrizesStatisticsLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [奖励统计结果分页查询↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10529) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/statistics/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const getLivefrontLiveUtilsPrizesStatisticsLivestreamId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsPrizesStatisticsLivestreamIdResponse>(
    prepare(getLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsPrizesStatisticsLivestreamId.requestConfig =
  getLivefrontLiveUtilsPrizesStatisticsLivestreamIdRequestConfig;

/**
 * 接口 [奖励排名 前30用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10537) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/ranking/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesRankingLivestreamIdRequest {
  /**
   * 直播间id
   */
  livestreamId: string;
}

/**
 * 接口 [奖励排名 前30用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10537) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/ranking/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesRankingLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  list?: {
    /**
     * 用户id
     */
    user_id?: number;
    /**
     * 用户头像url
     */
    avatar?: string;
    /**
     * 用户昵称
     */
    user_name?: string;
    /**
     * 奖品名字--对应页面的奖励内容
     */
    reward_name?: string;
    /**
     * 奖品的数量
     */
    reward_num?: string;
  }[];
}

/**
 * 接口 [奖励排名 前30用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10537) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/ranking/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type GetLivefrontLiveUtilsPrizesRankingLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/prizes/ranking/{livestreamId}',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [奖励排名 前30用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10537) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/ranking/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const getLivefrontLiveUtilsPrizesRankingLivestreamIdRequestConfig: GetLivefrontLiveUtilsPrizesRankingLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/prizes/ranking/{livestreamId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsPrizesRankingLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [奖励排名 前30用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10537) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/ranking/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const getLivefrontLiveUtilsPrizesRankingLivestreamId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsPrizesRankingLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsPrizesRankingLivestreamIdResponse>(
    prepare(getLivefrontLiveUtilsPrizesRankingLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsPrizesRankingLivestreamId.requestConfig =
  getLivefrontLiveUtilsPrizesRankingLivestreamIdRequestConfig;

/**
 * 接口 [查询我的奖励列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10545) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequest {
  /**
   * 直播间id
   */
  livestreamId: string;
  /**
   * 用户id
   */
  liveUserId: string;
}

/**
 * 接口 [查询我的奖励列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10545) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {
    /**
     * 奖励列表
     */
    list?: {
      /**
       * 用户id
       */
      user_id?: number;
      /**
       * 用户头像url
       */
      avatar?: string;
      /**
       * 用户昵称
       */
      user_name?: string;
      /**
       * 奖品名字--对应页面的奖励内容
       */
      reward_name?: string;
      /**
       * 奖品的数量
       */
      reward_num?: string;
    }[];
    /**
     * 奖励数量
     */
    reward_num?: number;
  };
}

/**
 * 接口 [查询我的奖励列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10545) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}',
    'data',
    'livestreamId' | 'liveUserId',
    string,
    false
  >
>;

/**
 * 接口 [查询我的奖励列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10545) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequestConfig: GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}',
    method: Method.GET,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId', 'liveUserId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [查询我的奖励列表↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10545) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `GET /livefront/liveUtils/prizes/user/{liveUserId}/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamId = /*#__PURE__*/ (
  requestData: GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdResponse>(
    prepare(getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamId.requestConfig =
  getLivefrontLiveUtilsPrizesUserLiveUserIdLivestreamIdRequestConfig;

/**
 * 接口 [发送奖励用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10553) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/prizes/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsPrizesLivestreamIdRequest {
  /**
   * 用户
   */
  user_ids: number[];
  /**
   * 用户的加密参数
   */
  sign: string;
  /**
   * 奖品id
   */
  prize_id: number;
  livestreamId: string;
}

/**
 * 接口 [发送奖励用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10553) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/prizes/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsPrizesLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [发送奖励用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10553) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/prizes/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type PostLivefrontLiveUtilsPrizesLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/prizes/{livestreamId}',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [发送奖励用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10553) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/prizes/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const postLivefrontLiveUtilsPrizesLivestreamIdRequestConfig: PostLivefrontLiveUtilsPrizesLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/prizes/{livestreamId}',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsPrizesLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [发送奖励用户↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10553) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/prizes/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const postLivefrontLiveUtilsPrizesLivestreamId = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsPrizesLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsPrizesLivestreamIdResponse>(
    prepare(postLivefrontLiveUtilsPrizesLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsPrizesLivestreamId.requestConfig = postLivefrontLiveUtilsPrizesLivestreamIdRequestConfig;

/**
 * 接口 [添加计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10561) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsTimerLivestreamIdRequest {
  /**
   * 1、计时器  2、定时器
   */
  type?: number;
  /**
   * 定时器结束时间
   */
  date?: string;
  livestreamId: string;
}

/**
 * 接口 [添加计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10561) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface PostLivefrontLiveUtilsTimerLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [添加计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10561) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type PostLivefrontLiveUtilsTimerLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/timer/{livestreamId}',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [添加计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10561) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const postLivefrontLiveUtilsTimerLivestreamIdRequestConfig: PostLivefrontLiveUtilsTimerLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/timer/{livestreamId}',
    method: Method.POST,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'postLivefrontLiveUtilsTimerLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [添加计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10561) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `POST /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const postLivefrontLiveUtilsTimerLivestreamId = /*#__PURE__*/ (
  requestData: PostLivefrontLiveUtilsTimerLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveUtilsTimerLivestreamIdResponse>(
    prepare(postLivefrontLiveUtilsTimerLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveUtilsTimerLivestreamId.requestConfig = postLivefrontLiveUtilsTimerLivestreamIdRequestConfig;

/**
 * 接口 [删除计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10569) 的 **请求类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `DELETE /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface DeleteLivefrontLiveUtilsTimerLivestreamIdRequest {
  /**
   * 1、计时器  2、定时器
   */
  type?: number;
  /**
   * 定时器结束时间
   */
  date?: string;
  livestreamId: string;
}

/**
 * 接口 [删除计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10569) 的 **返回类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `DELETE /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export interface DeleteLivefrontLiveUtilsTimerLivestreamIdResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
}

/**
 * 接口 [删除计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10569) 的 **请求配置的类型**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `DELETE /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
type DeleteLivefrontLiveUtilsTimerLivestreamIdRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/liveUtils/timer/{livestreamId}',
    'data',
    'livestreamId',
    string,
    false
  >
>;

/**
 * 接口 [删除计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10569) 的 **请求配置**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `DELETE /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
const deleteLivefrontLiveUtilsTimerLivestreamIdRequestConfig: DeleteLivefrontLiveUtilsTimerLivestreamIdRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/livefront/liveUtils/timer/{livestreamId}',
    method: Method.DELETE,
    requestHeaders: {Authorization: ''},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['livestreamId'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'deleteLivefrontLiveUtilsTimerLivestreamId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
  };

/**
 * 接口 [删除计时器↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10569) 的 **请求函数**
 *
 * @分类 [直播相关工具（签到，定时器等）↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_655)
 * @请求头 `DELETE /livefront/liveUtils/timer/{livestreamId}`
 * @更新时间 `2022-08-03 16:27:17`
 */
export const deleteLivefrontLiveUtilsTimerLivestreamId = /*#__PURE__*/ (
  requestData: DeleteLivefrontLiveUtilsTimerLivestreamIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<DeleteLivefrontLiveUtilsTimerLivestreamIdResponse>(
    prepare(deleteLivefrontLiveUtilsTimerLivestreamIdRequestConfig, requestData),
    ...args,
  );
};

deleteLivefrontLiveUtilsTimerLivestreamId.requestConfig = deleteLivefrontLiveUtilsTimerLivestreamIdRequestConfig;

const mockUrl_0_0_0_7 = 'http://yapi.fruitmedia-hk.com/mock/13' as any;
const devUrl_0_0_0_7 = '' as any;
const prodUrl_0_0_0_7 = '' as any;
const dataKey_0_0_0_7 = 'data' as any;

/**
 * 接口 [文件上传↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10593) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_659)
 * @请求头 `POST /livefront/live/file/token`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveFileTokenRequest {
  filename?: string;
  path?: string;
}

/**
 * 接口 [文件上传↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10593) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_659)
 * @请求头 `POST /livefront/live/file/token`
 * @更新时间 `2022-08-03 16:27:14`
 */
export interface PostLivefrontLiveFileTokenResponse {
  /**
   * 响应码
   */
  code: string;
  /**
   * 响应消息
   */
  msg: string;
  /**
   * 响应数据
   */
  info?: {};
}

/**
 * 接口 [文件上传↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10593) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_659)
 * @请求头 `POST /livefront/live/file/token`
 * @更新时间 `2022-08-03 16:27:14`
 */
type PostLivefrontLiveFileTokenRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/13',
    '',
    '',
    '/livefront/live/file/token',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [文件上传↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10593) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_659)
 * @请求头 `POST /livefront/live/file/token`
 * @更新时间 `2022-08-03 16:27:14`
 */
const postLivefrontLiveFileTokenRequestConfig: PostLivefrontLiveFileTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_7,
  devUrl: devUrl_0_0_0_7,
  prodUrl: prodUrl_0_0_0_7,
  path: '/livefront/live/file/token',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_7,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postLivefrontLiveFileToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [文件上传↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/10593) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.fruitmedia-hk.com/project/13/interface/api/cat_659)
 * @请求头 `POST /livefront/live/file/token`
 * @更新时间 `2022-08-03 16:27:14`
 */
export const postLivefrontLiveFileToken = /*#__PURE__*/ (
  requestData: PostLivefrontLiveFileTokenRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostLivefrontLiveFileTokenResponse>(
    prepare(postLivefrontLiveFileTokenRequestConfig, requestData),
    ...args,
  );
};

postLivefrontLiveFileToken.requestConfig = postLivefrontLiveFileTokenRequestConfig;

/* prettier-ignore-end */
