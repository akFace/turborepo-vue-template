import request from "/@/utils/request";
//登录
export function loginRelApi(data) {
  return request({
    url: "/finance/login",
    method: "post",
    data
  });
}
