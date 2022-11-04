<script setup lang="ts">
import { ref } from "vue";
import { getFinanceUser } from "/@/api/user";
const myMixTable = ref();
const form = ref({
  id: "",
  createTime: "",
  account: "",
  nickname: ""
});
const apiObj = ref("");
const expand = ref(true);
defineOptions({
  name: "Welcome"
});
const tableData = ref();
const refresh = () => {
  myMixTable.value?.refresh();
};
const resetRefresh = () => {
  for (var key in form.value) {
    form.value[key] = "";
  }
};
const changeExpand = () => {
  expand.value = !expand.value;
};
</script>

<template>
  <div class="home-container">
    <MixTableTitle :changeExpand="changeExpand" :refresh="refresh" />
    <div class="filter-box" v-show="expand">
      <el-form :inline="true" :model="form">
        <el-form-item label="用户ID" class="inline-form-item">
          <el-input
            v-model="form.id"
            placeholder="用户ID"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="平台客户" class="inline-form-item">
          <el-input
            v-model="form.account"
            placeholder="平台客户"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" class="inline-form-item">
          <el-input
            v-model="form.nickname"
            placeholder="用户昵称"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册时间" class="inline-form-item">
          <el-input
            v-model="form.createTime"
            placeholder="注册时间"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item class="inline-form-item">
          <el-button type="primary" @click="refresh" size="small"
            >查询</el-button
          >
          <el-button @click="resetRefresh" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <MixTable ref="myMixTable" :apiObj="getFinanceUser" :params="form">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </MixTable>
  </div>
</template>
