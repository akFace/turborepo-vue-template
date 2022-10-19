import axios from 'axios';
import { getLangType } from './other';
// import { ElMessage } from 'element-plus';

export const request = axios.create({
  baseURL: 'livefront/live',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const { headers } = config;
    if (headers && headers['Content-Type'] == '"image/png"') {
      return config;
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
    console.error('=>(axios) error ============== \n', error);
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    const data = response.data || {};
    const { msg, code } = data || {};
    if (code === 601 || code === 602 || code === 603 || code === 500) {
      data.code == code;
      return data;
    }
    if (code === 1) {
      return data;
    } else {
      // ElMessage({
      //   message: msg,
      //   type: 'error',
      //   duration: 1500,
      //   offset: 40,
      // });
      return Promise.reject(data);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
