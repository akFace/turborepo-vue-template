## 基于vue3+TypeScript+vite 多个项项目集合成一个大型项目模板，共享公共包资源，使用Turborepo进行复杂拓扑关系的monorepo最优构建。

## 多个项目集合包管理（PC端+WAP移动端+ADMIN后台管理系统）

- 后台管理系统集成`pure-admin国际化精简版` [https://github.com/pure-admin/pure-admin-thin](https://github.com/pure-admin/pure-admin-thin)
- 后台管理系统也可以自行替换成其他的，只需删掉apps/admin目录下的所有文件，替换成自己的就行

## 快速开始

```js
git clone https://github.com/akFace/turborepo-vue-template.git
```

1. 安装 nodejs: https://nodejs.org/en/
2. 安装 pnpm: `npm i pnpm -g`
3. 安装依赖: `pnpm install`
4. 运行项目: `pnpm run dev`
5. 构建项目资源: `pnpm run build`
6. 单独本地运行某一个应用： `pnpm run dev:wap` 、`pnpm run dev:pc` 、`pnpm run dev:admin`

## 目录结构说明

- apps 生产项目主目录，包含多个应用
- packages 生产项目需要用到的一些工具包，SDK 等
- .husky git 钩子执行脚本目录
- .changeset 子包版本日志管理目录

```
// 目录结构树
turborepo-vue-template/
├── apps ----- 生产项目主目录，包含多个应用
│   ├── admin ------ 后台管理系统
│   │   ├── locales/
│   │   ├── mock/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── api/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   ├── config/
│   │   │   ├── directives/
│   │   │   ├── layout/
│   │   │   ├── plugins/
│   │   │   ├── router/
│   │   │   ├── store/
│   │   │   ├── style/
│   │   │   ├── utils/
│   │   │   └── views/
│   │   └── types/
│   ├── client --------PC端
│   │   ├── public/
│   │   └── src/
│   │       ├── assets/
│   │       ├── i18n/
│   │       ├── plugins/
│   │       ├── router/
│   │       ├── services/
│   │       ├── store/
│   │       ├── utils/
│   │       └── views/
│   └── client-mobile ------ wap移动端
│       ├── public/
│       └── src/
│           ├── assets/
│           ├── components/
│           ├── config/
│           ├── directives/
│           ├── i18n/
│           ├── layout/
│           ├── plugins/
│           ├── router/
│           ├── services/
│           ├── stores/
│           ├── utils/
│           └── views/
└── packages ------- 公共包
    ├── @types/
    ├── hooks/
    └── utils/
        └── src/

```

## 相关技术文档

- [turborepo](https://turborepo.org/)
- [pnpm](https://www.pnpm.cn/)
- [vite](https://vitejs.cn/)
- [vue](https://cn.vuejs.org/)
- [TypeScript](https://github.com/microsoft/TypeScript)

## 代码提交指南 [COMMIT_GUIDE](./COMMIT_GUIDE.md)
