<script setup lang="ts">
import { ref } from "vue";
import { getFinanceUser } from "/@/api/user";
defineOptions({
  name: "Welcome"
});
const myMixTable = ref();
const form = ref({
  id: "",
  createTime: "",
  account: "",
  nickname: ""
});
const expand = ref(true);
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

const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};
</script>

<template>
  <div class="home-container">
    <MixTableTitle :changeExpand="changeExpand" :refresh="refresh" />
    <div class="filter-box" v-show="expand">
      <el-form :inline="true" :model="form">
        <el-form-item label="用户ID" class="inline-form-item">
          <el-input v-model="form.id" placeholder="用户ID"></el-input>
        </el-form-item>
        <el-form-item label="平台客户" class="inline-form-item">
          <el-input v-model="form.account" placeholder="平台客户"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" class="inline-form-item">
          <el-input v-model="form.nickname" placeholder="用户昵称"></el-input>
        </el-form-item>
        <el-form-item label="注册时间" class="inline-form-item">
          <el-input v-model="form.createTime" placeholder="注册时间"></el-input>
        </el-form-item>
        <el-form-item class="inline-form-item">
          <el-button type="primary" @click="refresh">查询</el-button>
          <el-button @click="resetRefresh">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <MixTable ref="myMixTable" :apiObj="getFinanceUser" :params="form">
      <el-table-column prop="date" label="用户ID" width="180" />
      <el-table-column prop="name" label="来源平台" width="180" />
      <el-table-column prop="address" label="平台用户ID" />
      <el-table-column prop="address" label="用户昵称" />
      <el-table-column prop="address" label="注册时间" />
      <el-table-column prop="address" label="金币充值" />
      <el-table-column prop="address" label="消耗金币" />
      <el-table-column prop="address" label="中奖金币" />
      <el-table-column prop="address" label="剩余金币" />
      <el-table-column prop="address" label="状态" />
      <el-table-column prop="address" label="操作" width="200">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            link
            @click="handleEdit(scope.$index, scope.row)"
            >禁用</el-button
          >
          <el-button
            size="small"
            link
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            >启用</el-button
          >
          <el-button
            size="small"
            link
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            >金币记录</el-button
          >
        </template>
      </el-table-column>
    </MixTable>
  </div>
</template>
