<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useGlobalStore } from '@/stores/global';

onMounted(() => {
  // useGlobalStore().showLoading();
  // initTim();
});
</script>
<template>
  <router-view />
</template>
<style lang="scss">
.loading-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
</style>
