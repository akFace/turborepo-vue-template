<template>
  <img
    :class="{
      'img-loading': loading === 'loading',
      'img-loaded': loading === 'loaded',
      'img-error': loading === 'error',
    }"
    :src="props.src"
    :alt="props.alt"
    :title="props.title"
    @load="onload"
    @error="onerror"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
interface Props {
  src?: string;
  alt?: string;
  title?: string;
}
const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  title: '',
});
const emit = defineEmits(['load', 'error']);
const loading = ref('loading');
const onload = () => {
  emit('load');
  loading.value = 'loaded';
};
const onerror = () => {
  emit('error');
  loading.value = 'error';
};
</script>

<style lang="scss" scoped>
.img-loading {
  background: #373737 url('../../assets/image/logo.svg') no-repeat center;
  background-size: 50%;
  min-height: 100px;
  min-width: 100px;
  width: 100%;
  height: 100%;
}
</style>
