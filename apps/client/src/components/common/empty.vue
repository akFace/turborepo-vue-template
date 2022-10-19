<template>
  <div class="empty-box">
    <el-empty
      :image="props.image"
      :description="props.description || defaultsEmptyText"
      :image-size="props.imageSize"
    />
  </div>
</template>

<script setup lang="ts">
import emptyImg from '@/assets/image/empty.svg';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const defaultsEmptyText = t('common.noData');
interface Props {
  image?: string;
  imageSize?: string | number | null;
  description?: string;
}
const props = withDefaults(defineProps<Props>(), {
  image: emptyImg,
  imageSize: 120,
  description: '',
});
</script>
<style lang="scss" scoped>
.empty-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
