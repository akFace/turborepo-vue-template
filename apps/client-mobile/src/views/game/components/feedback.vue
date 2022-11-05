<template>
  <van-popup
    class="vant-popup-box"
    v-model:show="show"
    position="bottom"
    closeable
    @closed="close"
  >
    <div class="popup-wrap">
      <div class="title">意見反饋</div>
      <div class="from-item">
        <div class="from-label">意见内容</div>
        <div class="from-content">
          <textarea
            class="textarea"
            placeholder="請填寫5字以上的描述，以便我們更好的為您提供 幫助~"
          ></textarea>
        </div>
      </div>
      <div class="from-item">
        <div class="from-label">聯繫方式</div>
        <div class="from-content">
          <input type="text" placeholder="請輸入聯繫電話或郵箱" />
        </div>
      </div>
      <van-button class="submit-btn" round block type="primary">
        確認
      </van-button>
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import { reactive, ref, defineEmits, computed } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const fromData = reactive({
  content: '',
  phone: '',
});
const emits = defineEmits(['update:show']);

const close = () => {
  emits('update:show', false);
};

const onSubmit = () => {};
</script>
<style lang="scss" scoped>
.popup-wrap {
  padding: 0 $padding;
  height: 100%;
  .title {
    padding: 16px 0;
    text-align: center;
    font-size: 20px;
  }
  .from-item {
    margin-bottom: 20px;
    .from-label {
      padding-bottom: 10px;
      font-size: 14px;
    }
    .textarea {
      padding: 10px;
      width: 100%;
      height: 160px;
      background: #ffffff;
      border-radius: 8px;
      line-height: 17px;
      border: none;
      color: #333;
    }
    input {
      padding: 0 10px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #ffffff;
      border-radius: 8px;
      border: none;
      color: #333;
    }
  }
  .submit-btn {
    margin-top: 70px;
    margin-bottom: 24px;
  }
}
</style>
