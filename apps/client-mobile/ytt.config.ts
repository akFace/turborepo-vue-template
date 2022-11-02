import { defineConfig } from 'yapi-to-typescript';

export default defineConfig([
  {
    serverUrl: 'http://yapi.fruitmedia-hk.com/',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: 'src/services/index.ts',
    requestFunctionFilePath: 'src/services/request.ts',
    dataKey: 'data',
    projects: [
      {
        token:
          '3aa271a9d752e31c029127d48470d64420e8b6e1c112a40a20b9afa62f8a43c5',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              // return changeCase.camelCase(interfaceInfo.path);

              // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
              // return changeCase.camelCase(`api_${interfaceInfo.path}`)

              // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
              return changeCase.camelCase(
                `${interfaceInfo.method}_${interfaceInfo.path}`
              );
            },
          },
        ],
      },
    ],
  },
]);
