import request from "/@/utils/request";
//登录
export function loginRelApi(data: object) {
  return request({
    url: "/finance/login",
    method: "post",
    data
  });
}

/** 刷新token */
export const refreshToken = (data: object) => {
  return request({
    url: "/finance/token/refresh",
    method: "post",
    data
  });
};

/** 用户管理列表 */
export const getFinanceUser = (params: object) => {
  return request({
    url: "/finance/user",
    method: "get",
    params
  });
};

/** 修改用户状态 */
export const patchFinanceUser = (data: object) => {
  return request({
    url: "/finance/user",
    method: "patch",
    data
  });
};

/** 用户金币信息 */
export const getFinanceUserCoinInfo = (params: object) => {
  return request({
    url: "/finance/user/userCoinInfo",
    method: "get",
    params
  });
};

/** 用户金币记录列表 */
export const getFinanceUserCoinRecord = (params: object) => {
  return request({
    url: "/finance/user/userCoinRecord",
    method: "get",
    params
  });
};
