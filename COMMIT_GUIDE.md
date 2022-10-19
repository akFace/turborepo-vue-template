# 提交指南
> 禁止线上解决冲突

## 环境安装

```shell
# 安装 commitizen 工具
npm i commitizen -g
```

## 分支管理

### 分支命令规范

#### 长期分支(长期存在，不删除)

- main
- develop
- test
- pre

#### 临时分支(开发完成之后删除)

- 功能分支 `feature/xxx` 
- 修复分支 `fix/xxx`
- 紧急修复分支 `hotfix/xxx`

#### 分支拉取规则

1. feature和hotfix分支，只从main分支拉出
2. fix分支，只从test分支中拉出

#### 分支合并规则

1. hotfix分支只能单独合并到main
2. feature只能合并到develop
3. fix分支只能合并到test

## 代码管理

### 提交代码

> 根据命令行选择输入对应的信息即可，需要满足 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范

```shell
git cz
# 或者 
pnpm run cz
```
