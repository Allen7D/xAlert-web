<template>
  <el-table :data="dataList" style="width:100%" height="300px">
    <el-table-column
      label="序号"
      prop="number"
      header-align="center"
      align="center"
      width="60">
    </el-table-column>
    <el-table-column
      label="事件类型"
      prop="eventType"
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="时间"
      prop="time"
      header-align="center"
      align="center"
      width="95">
    </el-table-column>
    <el-table-column
      label="数量"
      sortable
      prop="count"
      header-align="center"
      align="center">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
