import { $t } from "/@/plugins/i18n";
import type { RouteConfigsTable } from "/#/index";
const Layout = () => import("/@/layout/index.vue");

const basicRoutes = [
  {
    path: "/user/management",
    name: "UserManagement",
    component: () => import("/@/views/UserManagement.vue"),
    meta: {
      title: "用户管理",
      icon: "information-line"
    }
  },
  {
    path: "/recharge",
    name: "Recharge",
    component: () => import("/@/views/Recharge.vue"),
    meta: {
      title: "充值记录",
      icon: "information-line"
    }
  },
  {
    path: "/log",
    name: "log",
    component: () => import("/@/views/Log.vue"),
    meta: {
      title: "日志",
      icon: "information-line"
    }
  }
];

export default basicRoutes;
