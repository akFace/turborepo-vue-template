<template>
  <div
    class="mw-table"
    :style="{ height: height ? height : 'auto' }"
    v-loading="loading"
  >
    <!--    表格-->
    <el-table
      ref="tableRef"
      :data="tableData"
      :height="noPagination ? '100%' : 'calc(100% - 42px)'"
      :row-key="rowKey"
      :header-cell-style="{
        backgroundColor: '#f5f7fa',
        height: headerHeight + 'px',
        padding: '0',
        color: '#333',
        fontWeight: 400
      }"
      :row-style="{
        height: rowHeight + 'px',
        color: '#333',
        fontWeight: 400,
        backgroundColor: rowbgColor,
        padding: '0'
      }"
      @select="selectRadio"
      @selection-change="handleSelectionChange"
      @row-click="rowClick"
      @select-all="selectAll"
      :default-sort="sort"
    >
      <slot></slot>

      <!--      展开行-->
      <el-table-column v-if="expand" type="expand">
        <template #default="scope">
          <slot name="expand" :row="scope.row"></slot>
        </template>
      </el-table-column>

      <!--      序号-->
      <el-table-column v-if="showIndex" type="index" label="序号" width="60">
      </el-table-column>

      <!--    遍历生成表格行-->
      <el-table-column
        v-for="(column, index) in tableColumns"
        v-bind="column"
        :key="index"
      >
        <!--        头部插槽-->
        <template v-if="column.label.indexOf(':slot') > -1" #header>
          <slot :name="'header:' + column.prop.split(':')[0]"></slot>
        </template>
        <!--        单元格插槽-->
        <template #default="scope">
          <slot :name="column.prop.split(':')[0]" :row="scope.row">
            {{ scope.row[column.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>

    <div class="flex flex-justify-between">
      <div style="margin: 10px 0 0 10px">
        <slot name="bottom"></slot>
      </div>
      <!--    分页器-->
      <el-pagination
        v-if="!noPagination"
        style="margin-top: 10px"
        @size-change="handleSizeChange"
        :layout="layout"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElTable } from "element-plus";
import { fromPairs } from "lodash-unified";
import { computed, nextTick, onMounted, ref, watch, defineExpose } from "vue";
defineOptions({
  name: "MixTable"
});
interface Props {
  height?: string;
  headerHeight?: string;
  rowHeight?: string;
  rowbgColor?: string;
  data?: any;
  columns?: any;
  selectionKey?: string;
  // 是否展示序号
  showIndex?: boolean;
  // 是否有展开行（具体参考element-table 展开行）
  expand?: boolean;
  noPagination?: boolean;
  // 单选
  radio?: boolean;

  // 当前页、每页数量、总量
  pagination?: any;
  sort?: any;

  apiObj?: Function;
  params?: any;
  rowKey?: string;
  // 分页器功能
  layout?: string;
  // 每页数量配置
  pageSizes?: any;
}

const props = withDefaults(defineProps<Props>(), {
  height: "100%",
  headerHeight: "52",
  rowHeight: "52",
  rowbgColor: "#fff",
  //表格数据
  data: [],
  //表格行配置
  columns: [],
  //多选选中key
  selectionKey: "",
  // 是否展示序号
  showIndex: false,
  // 是否有展开行（具体参考element-table 展开行）
  expand: false,
  noPagination: false,
  // 单选
  radio: false,

  // 当前页、每页数量、总量
  pagination: {
    current: 1,
    pageSize: 20,
    total: 0
  },
  sort: {},

  apiObj: null,
  params: {},
  rowKey: "id",
  // 分页器功能
  layout: "total, sizes, prev, pager, next, jumper",
  // 每页数量配置
  pageSizes: [10, 20, 50, 100]
});

const tableRef = ref<InstanceType<typeof ElTable>>();

const emit = defineEmits(["rowClick"]);

const loading = ref(false);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(20);
const tableData = ref([]);
const selectedRows = ref([]);

const tableColumns = ref([]);

watch(
  () => props.height,
  () => {
    tableRef.value?.doLayout();
  }
);

watch(
  () => props.data,
  () => {
    tableData.value = props.data;
    nextTick(() => {
      if (props.selectionKey) {
        props.data.forEach(item => {
          if (item[props.selectionKey]) {
            tableRef.value?.toggleRowSelection(item, true);
          }
        });
      }
    });
  }
);

function selectRadio(selection, row) {
  if (props.radio) {
    tableData.value.forEach(r => {
      if (r !== row) {
        tableRef.value?.toggleRowSelection(r, false);
      }
    });
    selectedRows.value = row;
  }
}

function handleSelectionChange(rows) {
  if (props.radio) {
    return;
  } else {
    selectedRows.value = rows;
  }
}
function selectAll() {
  nextTick(() => {
    if (props.selectionKey && props.radio) {
      props.data.forEach(item => {
        if (item[props.selectionKey]) {
          tableRef.value?.toggleRowSelection(item, true);
        } else {
          tableRef.value?.toggleRowSelection(item, false);
        }
      });
    }
  });
}
function clearselect() {
  selectedRows.value = [];
}
function rowClick(rows) {
  emit("rowClick", rows);
}
function tableRefFun() {
  return tableRef.value;
}

async function getData() {
  if (!props.apiObj) {
    console.error("apiObj not found");
    return;
  }
  loading.value = true;
  let reqData = {
    pageNum: currentPage.value,
    pageSize: pageSize.value
  };
  Object.assign(reqData, props.params);
  console.log(reqData);
  const res = await props.apiObj(reqData);
  total.value = res.pageTurn?.rowCount;
  console.log(res.list);
  tableData.value = res.list;
  loading.value = false;
  nextTick(() => {
    if (props.selectionKey) {
      res.list.forEach(item => {
        if (item[props.selectionKey]) {
          tableRef.value?.toggleRowSelection(item, true);
        }
      });
    }
  });
}

// 每页条数变化
function handleSizeChange(val) {
  currentPage.value = 1;
  pageSize.value = val;
  getData();
}
// 当前页码改变
function handleCurrentChange(val) {
  currentPage.value = val;
  getData();
}

//刷新数据
function refresh() {
  tableRef.value?.clearSelection();
  currentPage.value = 1;
  getData();
}
onMounted(() => {
  if (props.apiObj) {
    getData();
  } else {
    tableData.value = props.data;
    nextTick(() => {
      if (props.selectionKey) {
        props.data.forEach(item => {
          if (item[props.selectionKey]) {
            tableRef.value?.toggleRowSelection(item, true);
          }
        });
      }
    });
  }
});

defineExpose({
  refresh,
  tableRefFun,
  clearselect
});
</script>
<style scoped lang="scss">
.mw-table {
  text-align: right;
  flex: 1;
  .el-table {
    :deep(th) {
      background-color: #f5f7fa;
    }

    :deep(.el-table__expanded-cell) {
      padding: 0 42px;
      background: #f5f7fa !important;
    }

    :deep(.el-table__row td) {
      padding: 0;
    }

    ///deep/ .el-table__body-wrapper::-webkit-scrollbar {
    //  width: 8px; /*滚动条宽度*/
    //}
    ///*定义滚动条轨道 内阴影+圆角*/
    ///deep/ .el-table__body-wrapper::-webkit-scrollbar-track {
    //  box-shadow: 0 1px 3px white inset; /*滚动条的背景区域的内阴影*/
    //  border-radius: 8px; /*滚动条的背景区域的圆角*/
    //  background-color: white; /*滚动条的背景颜色*/
    //}
    ///*定义滑块 内阴影+圆角*/
    ///deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    //  box-shadow: 0 1px 3px #ccc inset; /*滚动条的内阴影*/
    //  border-radius: 8px; /*滚动条的圆角*/
    //  background-color: #ccc; /*滚动条的背景颜色*/
    //}
  }
}
</style>
