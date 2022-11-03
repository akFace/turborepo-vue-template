<script setup lang="ts">
import { RouterView } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/global';
import { useMessage } from '@/stores/modules/message';
const loading = computed(() => {
  return useGlobalStore().loading;
});

const useTim = useMessage();

const initTim = async () => {
  const options = {
    sdkAppId: '',
    userId: '',
    userSig: '',
    channel: '',
  };
  await useTim.initTimClient(options);
};

onMounted(() => {
  // initTim();
});
</script>
<template>
  <router-view />
  <div class="loading-box" v-if="loading">
    <van-loading color="#1164ff" type="circular" size="40px" />
  </div>
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
