import { $t } from "/@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("/@/layout/index.vue");

const basicRoutes = [
  {
    path: "/recharge",
    name: "Recharge",
    component: () => import("/@/views/finance/Recharge.vue"),
    meta: {
      title: "充值记录",
      icon: "information-line"
    }
  },
  {
    path: "/expense",
    name: "expense",
    component: () => import("/@/views/finance/Expense.vue"),
    meta: {
      title: "消费明细",
      icon: "information-line"
    }
  },
  {
    path: "/log",
    name: "log",
    component: () => import("/@/views/log/index.vue"),
    meta: {
      title: "日志",
      icon: "information-line"
    }
  }
];

export default basicRoutes;
