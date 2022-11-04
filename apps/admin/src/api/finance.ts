import request from "/@/utils/request";
//消费明细
export function getFinanceConsumeDetail(params: object) {
  return request({
    url: "/finance/user/consumeDetail",
    method: "get",
    params
  });
}

// 消费明细结算金额
export function getFinanceConsumeDetailInfo(params: object) {
  return request({
    url: "/finance/user/consumeDetail/info",
    method: "get",
    params
  });
}

/** 刷新token */
export const postFinanceConsumeDetailExport = (data: object) => {
  return request({
    url: "/finance/user/consumeDetail/export",
    method: "post",
    data
  });
};
