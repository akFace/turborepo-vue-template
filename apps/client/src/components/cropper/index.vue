<template>
  <div class="sc-cropper">
    <div class="sc-cropper__img">
      <img :src="src" ref="img" />
    </div>
    <div class="sc-cropper__preview">
      <h4>{{ preview }}</h4>
      <div class="sc-cropper__preview__img" ref="previewImg"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  watch,
  nextTick,
  withDefaults,
  defineProps,
  defineExpose,
} from 'vue';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const img = ref();
const previewImg = ref();
let crop: any = null;
interface Props {
  src: string;
  compress?: number;
  preview?: string;
  aspectRatio?: number;
  cropBoxResizable?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  src: '',
  compress: 1,
  preview: '',
  aspectRatio: 16 / 9,
  cropBoxResizable: false,
});
watch(
  () => props.aspectRatio,
  (val) => {
    crop.setAspectRatio(val);
  }
);
onMounted(() => {
  nextTick(() => {
    init();
  });
});
const init = () => {
  crop = new Cropper(img.value, {
    viewMode: 1,
    dragMode: 'move',
    responsive: false,
    aspectRatio: props.aspectRatio,
    preview: previewImg.value,
    cropBoxResizable: props.cropBoxResizable,
  });
};
const setAspectRatio = (aspectRatio: number) => {
  crop.setAspectRatio(aspectRatio);
};
const getCropData = (cb: any, type = 'image/jpeg') => {
  cb(crop.getCroppedCanvas().toDataURL(type, props.compress));
};
const getCropBlob = (cb: any, type = 'image/jpeg') => {
  crop.getCroppedCanvas().toBlob(
    (blob: Blob) => {
      cb(blob);
    },
    type,
    props.compress
  );
};
const getCropFile = (
  cb: any,
  fileName = 'fileName.jpg',
  type = 'image/jpeg'
) => {
  crop.getCroppedCanvas().toBlob(
    (blob: Blob) => {
      let file = new File([blob], fileName, { type: type });
      cb(file);
    },
    type,
    props.compress
  );
};
defineExpose({
  getCropFile,
  getCropBlob,
  getCropData,
  setAspectRatio,
});
</script>

<style scoped lang="scss">
.sc-cropper {
  height: 350px;
}
.sc-cropper__img {
  width: 500px;
  height: 350px;
  float: left;
  background: #ebeef5;
}
.sc-cropper__img img {
  display: none;
}
.sc-cropper__preview {
  width: 120px;
  margin-left: 20px;
  float: left;
}
.sc-cropper__preview h4 {
  font-weight: normal;
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
}
.sc-cropper__preview__img {
  overflow: hidden;
  width: 120px;
  height: 120px;
  border: 1px solid #ebeef5;
}
</style>
