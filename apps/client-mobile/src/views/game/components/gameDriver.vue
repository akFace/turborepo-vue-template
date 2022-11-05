<template>
  <div></div>
</template>
<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted } from 'vue';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
const initDriver = () => {
  const driver = new Driver({
    stageBackground: 'transparent',
    animate: true,
    doneBtnText: '完成', // Text on the final button
    closeBtnText: '关闭', // Text on the close button for this step
    nextBtnText: '下一步', // Next button text for this step
    prevBtnText: '上一步',
  });

  // Define the steps for introduction
  driver.defineSteps([
    {
      element: '.normal-item',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'left-center',
      },
    },
    {
      element: '.action-btn',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top-center',
      },
    },
    {
      element: '.my-sway',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'left-center',
      },
    },
  ]);

  // Start the introduction
  driver.start();
};

onMounted(() => {
  nextTick(() => {
    initDriver();
  });
});
</script>
<style lang="scss" scoped></style>
