import axios, { AxiosRequestConfig } from 'axios';
import { RequestFunctionParams } from 'yapi-to-typescript';
import { showMessage } from '@/components/basics/message';
import { useUrlSearchParams } from '@vueuse/core';
import { closeLoading, showLoading } from '@/plugins/loading';

export interface RequestOptions extends AxiosRequestConfig {
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

  headers?: {
    [key: string]: string;
  };
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
  // baseURL: 'https://livestream.inet',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// 1-中文 2-英文
const langTypeMap: any = {
  'zh-cn': '1',
  'en-us': '2',
};

function getLangType() {
  const { languageType } = useUrlSearchParams<{ languageType: string }>();
  // const lang = localStorage.getItem('lang');
  // return langTypeMap[lang || 'zh-cn'];
  return languageType || '1';
}

// 添加请求拦截器
axiosRequest.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    const { headers } = config;
    if (headers && headers['Content-Type'] == '"image/png"') {
      return config;
    }
    const { role } = useUrlSearchParams();
    if (role === '1') {
      config.headers['auth-token'] = '';
    } else {
      config.headers['auth-token'] = '';
    }
    if (useOptions?.showLoading) {
      showLoading();
    }
    return {
      ...config,
      headers: {
        ...headers,
        'Language-Type': getLangType(),
        'Cache-Control': 'no-cache',
      },
    };
  },
  function (error) {
    // 对请求错误做些什么
    console.log('error', error);

    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosRequest.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    closeLoading();
    const data = response.data || {};
    const { tip, code } = data || {};
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
        showMessage({
          message: tip,
          type: 'error',
        });
      }
      console.error(data);
      if (useOptions?.hasResolve) {
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    }
  },
  (error) => {
    closeLoading();
    if (showErrorMsg) {
      showMessage({
        message: error,
        type: 'error',
      });
    }
    // 对响应错误做点什么
    console.log('error', error);
    return Promise.reject(error);
  }
);

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options?: RequestOptions
): Promise<TResponseData> {
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
  return axiosRequest
    .request<TResponseData>({
      method,
      url: path,
      data,
      headers: options?.headers,
    })
    .then((data) => {
      return data as unknown as TResponseData;
    });
}
