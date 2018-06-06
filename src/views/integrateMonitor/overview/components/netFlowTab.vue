<template>
  <el-table :data="dataList" border style="width: 50%" height="240">
    <el-table-column
      label="类型"
      prop="style"
      header-align="center"
      align="center">
    </el-table-column>
    <el-table-column
      label="流量"
      sortable
      prop="flows"
      header-align="center"
      align="center">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
