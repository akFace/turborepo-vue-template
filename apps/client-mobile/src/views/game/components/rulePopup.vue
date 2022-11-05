<template>
  <van-popup
    class="vant-popup-box"
    v-model:show="show"
    position="bottom"
    :style="{ height: '70%' }"
    closeable
    @closed="close"
  >
    <div class="popup-wrap">
      <div class="title">规则</div>
      <div class="rule-content">
        Notice 1.The Coin Factory games is a real coin-push machine,the
        probability of winning is not controlled by artificial or software.
        2.Tap on "Insert Coin" button to play and one coin will drop from the
        top of the machine. 3.The coins that dropped down into the coin slot
        will count as player's reward. 4.If the coin drops through the moving
        Bonus-Spin,the JP-Game reward will be triggered.Once you win the JP-Game
        reward and the machine will automatically drop numbers of the winning
        coins onto the pushing-plate,and the coins pushed down to the coin slot
        will be counted ad the player's prize. 5.Tap the flipper to control the
        direction of coin falling can help you get bigger chance of hit Bonus
        Spin and win more prize. 6.Different room will offer different value of
        game coins, consuming equal value of coins each time. JP-Game reward
        rules 1.Link Lines Reward：As same patterns appears on the same
        horizontal line,the player will win the coins display on the icon at the
        bottom of the JP game screen.
        <div class="empty"></div>
      </div>
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
  height: 100%;
  .title {
    padding: 16px 0;
    text-align: center;
    font-size: 20px;
  }
  .rule-content {
    padding: 0 $padding;
    overflow-y: auto;
    line-height: 20px;
    word-break: initial;
    font-size: 14px;
    height: calc(100% - 55px);
  }
  .empty {
    height: 70px;
  }
}
</style>
