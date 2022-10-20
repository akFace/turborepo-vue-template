<template>
  <div class="table-title">
    <p class="title" v-if="showTitle">{{ title }}</p>
    <div v-else>
      <slot></slot>
    </div>
    <section>
      <slot name="left"></slot>
      <div
        class="export"
        v-if="showExport"
        v-permission="exportKey"
        @click="exportExcet"
      >
        <i class="iconfont icon-page_icon_export"></i
        >{{ $t("common.exportExcel") }}
      </div>
      <div class="icon unexpand">
        <i class="iconfont icon-page_icon_refresh" @click="refresh"></i>
      </div>
      <div
        class="icon"
        :class="{
          expand: expand,
          unexpand: !expand,
        }"
        @click="checkExpand"
      >
        <i class="iconfont icon-page_icon_filter"></i>
      </div>
      <slot name="right"></slot>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
    changeExpand: { type: Function, default: null },
    refresh: { type: Function, default: null },
    showTitle: { type: Boolean, default: true },
    export: { type: Boolean, default: false },
    exportKey: { type: String, default: "" },
    exportExcet: { type: Function, default: null },
  },
  data() {
    return {
      expand: true,
      showExport: this.export,
    };
  },

  methods: {
    checkExpand() {
      this.expand = !this.expand;
      this.changeExpand(this.expand);
    },
  },
};
</script>
<style lang="scss" scoped>
.table-title {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 18px;
    font-weight: 700;
  }
  section {
    display: flex;
    .export {
      height: 32px;
      border: 1px solid var(--color-primary);
      border-radius: 4px;
      font-size: 12px;
      color: var(--color-primary);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0 10px;
    }
    .icon {
      cursor: pointer;
      margin-left: 4px;
    }

    .expand {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        color: #fff;
        font-size: 16px;
      }
    }
    .unexpand {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--color-primary);
      i {
        color: var(--color-primary);
        font-size: 16px;
      }
    }
  }
}
</style>
