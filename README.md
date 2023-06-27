# turborepo，使用Turborepo进行复杂拓扑关系的monorepo最优构建。多个项目集合包管理

## 快速开始

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

## 相关技术文档

- [turborepo](https://turborepo.org/)
- [pnpm](https://www.pnpm.cn/)
- [vite](https://vitejs.cn/)
- [vue](https://cn.vuejs.org/)
- [TypeScript](https://github.com/microsoft/TypeScript)

## 代码提交指南 [COMMIT_GUIDE](./COMMIT_GUIDE.md)
