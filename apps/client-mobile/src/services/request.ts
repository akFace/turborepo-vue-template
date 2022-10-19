import axios, { AxiosResponse } from 'axios';
import { getLangType } from '@ssb/utils';
import { RequestFunctionParams } from 'yapi-to-typescript';
import { showToast } from '@shixiyi/utils';
import { useGlobalStore } from '@/stores/global';

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: 'prod' | 'dev' | 'mock';
  showErrorMsg?: boolean;
  /*错误是否要Promise.resolve成功回调*/
  hasResolve?: boolean;
  /*是否需要显示loading，默认不显示*/
  showLoading?: boolean;
}

// 是否显示错误toast, 默认显示
let showErrorMsg = true;
// 保存options
let useOptions: RequestOptions | null = null;

const axiosRequest = axios.create({
  baseURL: '',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// 添加请求拦截器
axiosRequest.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const { headers } = config;
    if (headers && headers['Content-Type'] == '"image/png"') {
      return config;
    }
    if (useOptions?.showLoading) {
      useGlobalStore().showLoading();
    }
    return {
      ...config,
      headers: {
        ...headers,
        'auth-token': localStorage.getItem('auto-token'),
        'Language-Type': getLangType(),
        'Cache-Control': 'no-cache',
      },
    };
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosRequest.interceptors.response.use(
  (response) => {
    useGlobalStore().hideLoading();
    // 对响应数据做点什么
    const data = response.data || {};
    const { msg, code, tip } = data || {};
    if (code === 601 || code === 602 || code === 603) {
      data.code == code;
      return data;
    }
    if (code === 1) {
      return data;
    } else {
      console.error(
        '==================================================\n' +
          '请求出错了吖=======================================\n' +
          '==================================================',
        `\n请求URL: ${response.config.url}\n请求方式：${response.config.method}`
      );
      if (showErrorMsg) {
        showToast(msg || tip);
      }
      if (useOptions?.hasResolve) {
        console.error(data);
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    }
  },
  (error) => {
    useGlobalStore().hideLoading();
    if (showErrorMsg) {
      showToast(error);
    }
    console.log('error', error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: 'prod',
  }
): Promise<AxiosResponse<TResponseData>> {
  // ...
  // 基于 payload 获取接口信息，
  // 然后对接口发起请求，
  // 接着获取接口响应数据，
  // 并且根据 payload 的相关信息解析响应数据作为请求结果，
  // 最后返回请求结果。
  // ...
  useOptions = options || null;
  showErrorMsg = options?.showErrorMsg !== false;
  const { method, path, data } = payload;
  console.log('path', path);

  return axiosRequest
    .request<TResponseData>({
      method,
      url: path,
      data,
    })
    .then((data) => {
      return data;
    });
}
