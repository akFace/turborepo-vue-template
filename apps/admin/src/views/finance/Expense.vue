<script setup lang="ts">
import { ref } from "vue";
const form = ref({
  actNote: "",
  account: "",
  level: ""
});
const apiObj = ref("");
const expand = ref(true);
defineOptions({
  name: "Expense"
});
const tableData = ref();
const refresh = () => {};
const onSubmit = () => {};
const changeExpand = () => {};
</script>

<template>
  <div class="home-container">
    <MixTableTitle :changeExpand="changeExpand" :refresh="refresh" />
    <div class="filter-box" v-show="expand">
      <el-form :inline="true" :model="form">
        <el-form-item label="用户ID" class="inline-form-item">
          <el-input
            v-model="form.account"
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
            v-model="form.actNote"
            placeholder="用户昵称"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册时间" class="inline-form-item">
          <el-input
            v-model="form.actNote"
            placeholder="注册时间"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item class="inline-form-item">
          <el-button type="primary" @click="refresh" size="small"
            >查询</el-button
          >
          <el-button @click="onSubmit" size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <MixTable ref="MixTable">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </MixTable>
  </div>
</template>
