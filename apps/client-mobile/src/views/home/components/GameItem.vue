<template>
  <div class="game-item-card" @click="jumpToDetail(info)">
    <h2>{{ info.name }}</h2>
    <div class="game-cover">
      <div class="game-status green">
        {{ getMachineStatusName(info.status) }}
      </div>
      <img src="@/assets/image/home/game_cover@2x.png" alt="" />
    </div>
    <div class="btn">
      <img class="icon-coin" src="@/assets/image/game/ic_coins@2x.png" alt="" />
      <span>{{ info.cost }}幣/次</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getMachineStatusName } from '@/utils/filters';
import { useRouter } from 'vue-router';
defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
const router = useRouter();
const jumpToDetail = (info: any) => {
  router.push(`/game/${info.id}`);
};
</script>
<style lang="scss" scoped>
.game-item-card {
  position: relative;
  padding: 6px;
  padding-bottom: 40px;
  text-align: center;
  background-color: #3c93fc;
  overflow: hidden;
  border-radius: 8px;
  color: #fff;
  line-height: normal;
  h2 {
    padding-top: 4px;
    padding-bottom: 6px;
    font-size: 12px;
  }
  .game-cover {
    position: relative;
    width: 100%;
    height: 160px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .game-status {
      position: absolute;
      right: 6px;
      top: 6px;
      padding: 2px 8px;
      text-align: center;
      border-radius: 4px;
      font-size: 12px;
      &.green {
        background-color: $green;
      }
      &.playing {
        background-color: #ff6944;
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30px;
    background: #0271e8;
    border-radius: 8px 8px 0 0;
    font-size: 14px;
    .icon-coin {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }
}
</style>
