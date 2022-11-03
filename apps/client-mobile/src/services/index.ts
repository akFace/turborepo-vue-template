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

const mockUrl_0_0_0_1 = 'http://yapi.fruitmedia-hk.com/mock/95' as any;
const devUrl_0_0_0_1 = '' as any;
const prodUrl_0_0_0_1 = '' as any;
const dataKey_0_0_0_1 = 'data' as any;

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14953) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `GET /api/finance/machines`
 * @更新时间 `2022-11-03 09:47:47`
 */
export interface GetApiFinanceMachinesRequest {
  /**
   * 页码
   */
  pageNum?: string;
  /**
   * 页面大小
   */
  pageSize?: string;
}

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14953) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `GET /api/finance/machines`
 * @更新时间 `2022-11-03 09:47:47`
 */
export interface GetApiFinanceMachinesResponse {
  /**
   * 返回结果列表
   */
  list?: {
    id?: number;
    name?: string;
    /**
     * 类型 1-推币机
     */
    type?: number;
    /**
     * 状态 1-上架 2-占用 3-维修中 4-下架
     */
    status?: number;
    /**
     * 推流地址
     */
    pushUrl?: string;
    /**
     * 每次投币消费金币数
     */
    cost?: number;
    /**
     * 第三方的机器信息
     */
    extJson?: string;
    createTime?: string;
    updateTime?: string;
  }[];
  /**
   * 分页信息
   */
  pageTurn?: {
    /**
     * 首页数
     */
    firstPage?: number;
    /**
     * 页数
     */
    pageCount?: number;
    /**
     * 当前页
     */
    page?: number;
    /**
     * 下一页
     */
    nextPage?: number;
    /**
     * 上一页
     */
    prevPage?: number;
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
    pageSize?: number;
    /**
     * 记录数
     */
    rowCount?: number;
    /**
     * 开始记录
     */
    startIndex?: number;
  };
  /**
   * 默认返回结果
   */
  tip?: string;
  /**
   * 默认状态码
   */
  code?: number;
}

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14953) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `GET /api/finance/machines`
 * @更新时间 `2022-11-03 09:47:47`
 */
type GetApiFinanceMachinesRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/api/finance/machines',
    'data',
    string,
    'pageNum' | 'pageSize',
    false
  >
>;

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14953) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `GET /api/finance/machines`
 * @更新时间 `2022-11-03 09:47:47`
 */
const getApiFinanceMachinesRequestConfig: GetApiFinanceMachinesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/finance/machines',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: ['pageNum', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiFinanceMachines',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14953) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `GET /api/finance/machines`
 * @更新时间 `2022-11-03 09:47:47`
 */
export const getApiFinanceMachines = /*#__PURE__*/ (
  requestData: GetApiFinanceMachinesRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiFinanceMachinesResponse>(prepare(getApiFinanceMachinesRequestConfig, requestData), ...args);
};

getApiFinanceMachines.requestConfig = getApiFinanceMachinesRequestConfig;

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14969) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/login`
 * @更新时间 `2022-11-03 09:47:48`
 */
export interface PostApiFinanceMachinesLoginRequest {
  /**
   * 机器 id
   */
  machineId: number;
}

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14969) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/login`
 * @更新时间 `2022-11-03 09:47:48`
 */
export interface PostApiFinanceMachinesLoginResponse {
  /**
   * 响应实体
   */
  info?: number;
  /**
   * 默认返回结果
   */
  tip?: string;
  /**
   * 默认状态码
   */
  code?: number;
}

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14969) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/login`
 * @更新时间 `2022-11-03 09:47:48`
 */
type PostApiFinanceMachinesLoginRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/api/finance/machines/login',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14969) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/login`
 * @更新时间 `2022-11-03 09:47:48`
 */
const postApiFinanceMachinesLoginRequestConfig: PostApiFinanceMachinesLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/finance/machines/login',
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
  requestFunctionName: 'postApiFinanceMachinesLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14969) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/login`
 * @更新时间 `2022-11-03 09:47:48`
 */
export const postApiFinanceMachinesLogin = /*#__PURE__*/ (
  requestData: PostApiFinanceMachinesLoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiFinanceMachinesLoginResponse>(
    prepare(postApiFinanceMachinesLoginRequestConfig, requestData),
    ...args,
  );
};

postApiFinanceMachinesLogin.requestConfig = postApiFinanceMachinesLoginRequestConfig;

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14977) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/swing`
 * @更新时间 `2022-11-03 09:47:48`
 */
export interface PostApiFinanceMachinesSwingRequest {
  /**
   * 机器 id
   */
  machineId: number;
  /**
   * 操作 id
   */
  operateId: number;
}

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14977) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/swing`
 * @更新时间 `2022-11-03 09:47:48`
 */
export interface PostApiFinanceMachinesSwingResponse {
  /**
   * 默认返回结果
   */
  tip?: string;
  /**
   * 默认状态码
   */
  code?: number;
}

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14977) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/swing`
 * @更新时间 `2022-11-03 09:47:48`
 */
type PostApiFinanceMachinesSwingRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/api/finance/machines/swing',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14977) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/swing`
 * @更新时间 `2022-11-03 09:47:48`
 */
const postApiFinanceMachinesSwingRequestConfig: PostApiFinanceMachinesSwingRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/finance/machines/swing',
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
  requestFunctionName: 'postApiFinanceMachinesSwing',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14977) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/swing`
 * @更新时间 `2022-11-03 09:47:48`
 */
export const postApiFinanceMachinesSwing = /*#__PURE__*/ (
  requestData: PostApiFinanceMachinesSwingRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiFinanceMachinesSwingResponse>(
    prepare(postApiFinanceMachinesSwingRequestConfig, requestData),
    ...args,
  );
};

postApiFinanceMachinesSwing.requestConfig = postApiFinanceMachinesSwingRequestConfig;

/**
 * 接口 [开始投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14985) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/play`
 * @更新时间 `2022-11-03 15:27:32`
 */
export interface PostApiFinanceMachinesPlayRequest {
  /**
   * 机器 id
   */
  machineId: number;
}

/**
 * 接口 [开始投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14985) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/play`
 * @更新时间 `2022-11-03 15:27:32`
 */
export interface PostApiFinanceMachinesPlayResponse {
  /**
   * 响应实体
   */
  info?: number;
  /**
   * 默认返回结果
   */
  tip?: string;
  /**
   * 默认状态码
   */
  code?: number;
}

/**
 * 接口 [开始投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14985) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/play`
 * @更新时间 `2022-11-03 15:27:32`
 */
type PostApiFinanceMachinesPlayRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/api/finance/machines/play',
    'data',
    string,
    string,
    false
  >
>;

/**
 * 接口 [开始投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14985) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/play`
 * @更新时间 `2022-11-03 15:27:32`
 */
const postApiFinanceMachinesPlayRequestConfig: PostApiFinanceMachinesPlayRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/finance/machines/play',
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
  requestFunctionName: 'postApiFinanceMachinesPlay',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [开始投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14985) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1067)
 * @请求头 `POST /api/finance/machines/play`
 * @更新时间 `2022-11-03 15:27:32`
 */
export const postApiFinanceMachinesPlay = /*#__PURE__*/ (
  requestData: PostApiFinanceMachinesPlayRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostApiFinanceMachinesPlayResponse>(
    prepare(postApiFinanceMachinesPlayRequestConfig, requestData),
    ...args,
  );
};

postApiFinanceMachinesPlay.requestConfig = postApiFinanceMachinesPlayRequestConfig;

const mockUrl_0_0_0_2 = 'http://yapi.fruitmedia-hk.com/mock/95' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14993) 的 **请求类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1071)
 * @请求头 `GET /api/finance/users/info`
 * @更新时间 `2022-11-03 09:47:49`
 */
export interface GetApiFinanceUsersInfoRequest {}

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14993) 的 **返回类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1071)
 * @请求头 `GET /api/finance/users/info`
 * @更新时间 `2022-11-03 09:47:49`
 */
export interface GetApiFinanceUsersInfoResponse {
  /**
   * 响应实体
   */
  info?: {
    /**
     * 用户 id
     */
    id?: number;
    /**
     * 用户名字
     */
    name?: string;
    /**
     * 用户头像
     */
    avatar?: string;
    /**
     * 金币数
     */
    coinNum?: number;
    /**
     * 企业 id
     */
    customId?: string;
    /**
     * 企业名字
     */
    customName?: string;
    thirdUserId?: string;
  };
  /**
   * 默认返回结果
   */
  tip?: string;
  /**
   * 默认状态码
   */
  code?: number;
}

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14993) 的 **请求配置的类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1071)
 * @请求头 `GET /api/finance/users/info`
 * @更新时间 `2022-11-03 09:47:49`
 */
type GetApiFinanceUsersInfoRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/api/finance/users/info',
    'data',
    string,
    string,
    true
  >
>;

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14993) 的 **请求配置**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1071)
 * @请求头 `GET /api/finance/users/info`
 * @更新时间 `2022-11-03 09:47:49`
 */
const getApiFinanceUsersInfoRequestConfig: GetApiFinanceUsersInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/finance/users/info',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiFinanceUsersInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/14993) 的 **请求函数**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1071)
 * @请求头 `GET /api/finance/users/info`
 * @更新时间 `2022-11-03 09:47:49`
 */
export const getApiFinanceUsersInfo = /*#__PURE__*/ (
  requestData?: GetApiFinanceUsersInfoRequest,
  ...args: UserRequestRestArgs
) => {
  return request<GetApiFinanceUsersInfoResponse>(prepare(getApiFinanceUsersInfoRequestConfig, requestData), ...args);
};

getApiFinanceUsersInfo.requestConfig = getApiFinanceUsersInfoRequestConfig;

/* prettier-ignore-end */
