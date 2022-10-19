<template>
  <!--
  <div class="pc-count-down" v-html="countDownText" />
  -->
  <div class="pc-count-down">
    <slot :dateTime="dateTime"></slot>
  </div>
</template>

<script>
const formatNumber = (n) => (n < 10 ? `0${n}` : n);

export default {
  name: 'countDown',
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      timerInterval: null,
      dateTime: {},
    };
  },
  computed: {},
  mounted() {
    this.handleCountDown(this.time);
  },
  updated() {},
  beforeDestroy() {
    console.log('beforeDestroy', this.time);
    clearInterval(this.timerInterval);
  },
  components: {},
  methods: {
    handleCountDown(time) {
      let waitTime = time;
      if (time <= 0) {
        return;
      }
      this.timerInterval = setInterval(() => {
        waitTime--;
        const day = parseInt(waitTime / 3600 / 24, 10); // 天
        const hour = parseInt((waitTime / 3600) % 24, 10); // 小时
        const minute = parseInt((waitTime % 3600) / 60, 10); // 分钟
        const seconds = parseInt((waitTime % 3600) % 60, 10); // 秒
        this.dateTime = {
          day: formatNumber(day),
          hour: formatNumber(hour),
          minute: formatNumber(minute),
          seconds: formatNumber(seconds),
        };

        if (day === 0 && hour === 0 && minute === 0 && seconds === 0) {
          this.$emit('end');
          clearInterval(this.timerInterval);
          return;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.pc-count-down {
  display: flex;
  align-items: center;
}
</style>
