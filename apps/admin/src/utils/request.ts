import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { useUserStore } from "../store/modules/user";
import { closeLoading, showLoading } from "/@/plugins/loading";
import { STAUS_CODE } from "/@/utils/constant";
const isDev = import.meta.env.DEV;

// create an axios instance
const service = axios.create({
  baseURL: isDev ? "/api" : "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers["Authorization"] = sessionStorage.getItem("Authorization");
    if (config.method === "get") {
      config.data = { unused: 0 }; // 解决get,请求添加不上Content-Type
    }
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    // config.headers['currentUser'] = getToken()

    if (config.config?.showLoading) {
      showLoading();
    }

    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.config.config?.showLoading) {
      closeLoading();
    }
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === STAUS_CODE.SUCCEED) {
      return res;
    }
    const msg = res.tip || res.message || res.errorMessage;
    if (res.code === STAUS_CODE.FAIL) {
      if (response.config.config?.showErrorMsg !== false) {
        // 是否重新登录
        ElMessageBox.confirm(msg, "").then(() => {
          useUserStore().logOut();
        });
      }
      return Promise.reject(res);
    } else {
      if (response.config.config?.showErrorMsg !== false) {
        ElMessage({
          message: msg,
          type: "error",
          duration: 3 * 1000
        });
        console.error(
          "==================================================\n" +
            "请求出错了吖=======================================\n" +
            "==================================================",
          `\n请求URL: ${
            response.config.baseURL + response.config.url
          }\n请求方式：${response.config.method}\n data参数：${
            response.config.data || ""
          }\nparams参数：${JSON.stringify(response.config?.params || "")}`
        );
        console.error(
          "==================================================\n response：",
          res
        );
      }
    }
    if (response.config.config?.hasResolve) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  },
  error => {
    if (error.message.includes("timeout")) {
      // 判断请求异常信息中是否含有超时timeout字符串
      ElMessage({
        message: "请求超时",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(error); // reject这个错误信息
    }
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    closeLoading();
    return Promise.reject(error);
  }
);

export default service;
