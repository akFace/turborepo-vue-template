<script setup lang="ts">
import { RouterView } from 'vue-router';
// 导入element-plus中英文语言包
import zhTw from 'element-plus/es/locale/lang/zh-tw';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import enUs from 'element-plus/es/locale/lang/en';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const elementPlusLocaleMap: any = {
  'zh-tw': zhTw,
  'en-us': enUs,
  'zh-cn': zhCn,
};
</script>
<template>
  <el-config-provider :locale="elementPlusLocaleMap[locale]">
    <router-view />
  </el-config-provider>
</template>
