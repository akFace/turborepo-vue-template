<template>
  <van-empty
    :image="props.image"
    :description="props.description || defaultsEmptyText"
    :image-size="props.imageSize"
  />
</template>

<script setup lang="ts">
import emptyImg from '@/assets/image/empty.svg';
import { useI18n } from 'vue-i18n';
import { withDefaults, defineProps } from 'vue';
const { t } = useI18n();
const defaultsEmptyText = t('common.noData');
interface Props {
  image?: string;
  imageSize?: string | number;
  description?: string;
}
const props = withDefaults(defineProps<Props>(), {
  image: emptyImg,
  imageSize: 120,
  description: '',
});
</script>
