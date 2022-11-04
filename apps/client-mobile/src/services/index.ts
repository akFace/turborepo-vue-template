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
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15145) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines`
 * @更新时间 `2022-11-04 14:43:09`
 */
export interface GetMachinesRequest {
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
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15145) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines`
 * @更新时间 `2022-11-04 14:43:09`
 */
export interface GetMachinesResponse {
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
     * 拉流地址
     */
    pullUrl?: string;
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
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15145) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines`
 * @更新时间 `2022-11-04 14:43:09`
 */
type GetMachinesRequestConfig = Readonly<
  RequestConfig<
    'http://yapi.fruitmedia-hk.com/mock/95',
    '',
    '',
    '/machines',
    'data',
    string,
    'pageNum' | 'pageSize',
    false
  >
>;

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15145) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines`
 * @更新时间 `2022-11-04 14:43:09`
 */
const getMachinesRequestConfig: GetMachinesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines',
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
  requestFunctionName: 'getMachines',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [机器列表↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15145) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines`
 * @更新时间 `2022-11-04 14:43:09`
 */
export const getMachines = /*#__PURE__*/ (requestData: GetMachinesRequest, ...args: UserRequestRestArgs) => {
  return request<GetMachinesResponse>(prepare(getMachinesRequestConfig, requestData), ...args);
};

getMachines.requestConfig = getMachinesRequestConfig;

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15153) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/login`
 * @更新时间 `2022-11-04 14:43:09`
 */
export interface PostMachinesLoginRequest {
  /**
   * 机器 id
   */
  machineId: number;
}

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15153) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/login`
 * @更新时间 `2022-11-04 14:43:09`
 */
export interface PostMachinesLoginResponse {
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
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15153) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/login`
 * @更新时间 `2022-11-04 14:43:09`
 */
type PostMachinesLoginRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/machines/login', 'data', string, string, false>
>;

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15153) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/login`
 * @更新时间 `2022-11-04 14:43:09`
 */
const postMachinesLoginRequestConfig: PostMachinesLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines/login',
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
  requestFunctionName: 'postMachinesLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [上机操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15153) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/login`
 * @更新时间 `2022-11-04 14:43:09`
 */
export const postMachinesLogin = /*#__PURE__*/ (
  requestData: PostMachinesLoginRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMachinesLoginResponse>(prepare(postMachinesLoginRequestConfig, requestData), ...args);
};

postMachinesLogin.requestConfig = postMachinesLoginRequestConfig;

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15161) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/swing`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesSwingRequest {
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
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15161) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/swing`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesSwingResponse {
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
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15161) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/swing`
 * @更新时间 `2022-11-04 14:43:10`
 */
type PostMachinesSwingRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/machines/swing', 'data', string, string, false>
>;

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15161) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/swing`
 * @更新时间 `2022-11-04 14:43:10`
 */
const postMachinesSwingRequestConfig: PostMachinesSwingRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines/swing',
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
  requestFunctionName: 'postMachinesSwing',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [摇摆操作↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15161) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/swing`
 * @更新时间 `2022-11-04 14:43:10`
 */
export const postMachinesSwing = /*#__PURE__*/ (
  requestData: PostMachinesSwingRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMachinesSwingResponse>(prepare(postMachinesSwingRequestConfig, requestData), ...args);
};

postMachinesSwing.requestConfig = postMachinesSwingRequestConfig;

/**
 * 接口 [投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15169) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/play`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesPlayRequest {
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
 * 接口 [投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15169) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/play`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesPlayResponse {
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
 * 接口 [投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15169) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/play`
 * @更新时间 `2022-11-04 14:43:10`
 */
type PostMachinesPlayRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/machines/play', 'data', string, string, false>
>;

/**
 * 接口 [投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15169) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/play`
 * @更新时间 `2022-11-04 14:43:10`
 */
const postMachinesPlayRequestConfig: PostMachinesPlayRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines/play',
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
  requestFunctionName: 'postMachinesPlay',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [投币↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15169) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/play`
 * @更新时间 `2022-11-04 14:43:10`
 */
export const postMachinesPlay = /*#__PURE__*/ (requestData: PostMachinesPlayRequest, ...args: UserRequestRestArgs) => {
  return request<PostMachinesPlayResponse>(prepare(postMachinesPlayRequestConfig, requestData), ...args);
};

postMachinesPlay.requestConfig = postMachinesPlayRequestConfig;

/**
 * 接口 [机器详情↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15177) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines/{id}`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface GetMachinesIdRequest {
  /**
   * 机器ID
   */
  id: string;
}

/**
 * 接口 [机器详情↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15177) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines/{id}`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface GetMachinesIdResponse {
  /**
   * 响应实体
   */
  info?: {
    id?: number;
    /**
     * 机器名称
     */
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
     * 拉流地址
     */
    pullUrl?: string;
    /**
     * 每次投币消费金币数
     */
    cost?: number;
    /**
     * 第三方的机器id, 用于IM群组 groupId
     */
    machineId?: string;
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
 * 接口 [机器详情↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15177) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines/{id}`
 * @更新时间 `2022-11-04 14:43:10`
 */
type GetMachinesIdRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/machines/{id}', 'data', 'id', string, false>
>;

/**
 * 接口 [机器详情↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15177) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines/{id}`
 * @更新时间 `2022-11-04 14:43:10`
 */
const getMachinesIdRequestConfig: GetMachinesIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines/{id}',
  method: Method.GET,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: ['id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getMachinesId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [机器详情↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15177) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `GET /machines/{id}`
 * @更新时间 `2022-11-04 14:43:10`
 */
export const getMachinesId = /*#__PURE__*/ (requestData: GetMachinesIdRequest, ...args: UserRequestRestArgs) => {
  return request<GetMachinesIdResponse>(prepare(getMachinesIdRequestConfig, requestData), ...args);
};

getMachinesId.requestConfig = getMachinesIdRequestConfig;

/**
 * 接口 [下机↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15185) 的 **请求类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/logout`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesLogoutRequest {
  machineId: number;
}

/**
 * 接口 [下机↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15185) 的 **返回类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/logout`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface PostMachinesLogoutResponse {
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
 * 接口 [下机↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15185) 的 **请求配置的类型**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/logout`
 * @更新时间 `2022-11-04 14:43:10`
 */
type PostMachinesLogoutRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/machines/logout', 'data', string, string, false>
>;

/**
 * 接口 [下机↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15185) 的 **请求配置**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/logout`
 * @更新时间 `2022-11-04 14:43:10`
 */
const postMachinesLogoutRequestConfig: PostMachinesLogoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/machines/logout',
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
  requestFunctionName: 'postMachinesLogout',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [下机↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15185) 的 **请求函数**
 *
 * @分类 [机器相关的接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1079)
 * @请求头 `POST /machines/logout`
 * @更新时间 `2022-11-04 14:43:10`
 */
export const postMachinesLogout = /*#__PURE__*/ (
  requestData: PostMachinesLogoutRequest,
  ...args: UserRequestRestArgs
) => {
  return request<PostMachinesLogoutResponse>(prepare(postMachinesLogoutRequestConfig, requestData), ...args);
};

postMachinesLogout.requestConfig = postMachinesLogoutRequestConfig;

const mockUrl_0_0_0_2 = 'http://yapi.fruitmedia-hk.com/mock/95' as any;
const devUrl_0_0_0_2 = '' as any;
const prodUrl_0_0_0_2 = '' as any;
const dataKey_0_0_0_2 = 'data' as any;

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15193) 的 **请求类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `GET /users/info`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface GetUsersInfoRequest {}

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15193) 的 **返回类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `GET /users/info`
 * @更新时间 `2022-11-04 14:43:10`
 */
export interface GetUsersInfoResponse {
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
    customId?: number;
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
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15193) 的 **请求配置的类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `GET /users/info`
 * @更新时间 `2022-11-04 14:43:10`
 */
type GetUsersInfoRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/users/info', 'data', string, string, true>
>;

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15193) 的 **请求配置**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `GET /users/info`
 * @更新时间 `2022-11-04 14:43:10`
 */
const getUsersInfoRequestConfig: GetUsersInfoRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/users/info',
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
  requestFunctionName: 'getUsersInfo',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [平台用户的相关数据查询↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15193) 的 **请求函数**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `GET /users/info`
 * @更新时间 `2022-11-04 14:43:10`
 */
export const getUsersInfo = /*#__PURE__*/ (requestData?: GetUsersInfoRequest, ...args: UserRequestRestArgs) => {
  return request<GetUsersInfoResponse>(prepare(getUsersInfoRequestConfig, requestData), ...args);
};

getUsersInfo.requestConfig = getUsersInfoRequestConfig;

/**
 * 接口 [用户开始游戏↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15201) 的 **请求类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `POST /users/login`
 * @更新时间 `2022-11-04 14:43:11`
 */
export interface PostUsersLoginRequest {}

/**
 * 接口 [用户开始游戏↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15201) 的 **返回类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `POST /users/login`
 * @更新时间 `2022-11-04 14:43:11`
 */
export interface PostUsersLoginResponse {
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
 * 接口 [用户开始游戏↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15201) 的 **请求配置的类型**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `POST /users/login`
 * @更新时间 `2022-11-04 14:43:11`
 */
type PostUsersLoginRequestConfig = Readonly<
  RequestConfig<'http://yapi.fruitmedia-hk.com/mock/95', '', '', '/users/login', 'data', string, string, true>
>;

/**
 * 接口 [用户开始游戏↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15201) 的 **请求配置**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `POST /users/login`
 * @更新时间 `2022-11-04 14:43:11`
 */
const postUsersLoginRequestConfig: PostUsersLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/users/login',
  method: Method.POST,
  requestHeaders: {Authorization: ''},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'postUsersLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
};

/**
 * 接口 [用户开始游戏↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/15201) 的 **请求函数**
 *
 * @分类 [用户相关接口↗](http://yapi.fruitmedia-hk.com/project/95/interface/api/cat_1083)
 * @请求头 `POST /users/login`
 * @更新时间 `2022-11-04 14:43:11`
 */
export const postUsersLogin = /*#__PURE__*/ (requestData?: PostUsersLoginRequest, ...args: UserRequestRestArgs) => {
  return request<PostUsersLoginResponse>(prepare(postUsersLoginRequestConfig, requestData), ...args);
};

postUsersLogin.requestConfig = postUsersLoginRequestConfig;

/* prettier-ignore-end */
