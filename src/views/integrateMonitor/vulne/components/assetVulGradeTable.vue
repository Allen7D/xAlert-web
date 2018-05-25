<template>
  <el-table :data="dataList" border style="width: 50%" height="240">
    <el-table-column
      label="漏洞等级"
      prop="vulGrade"
      header-align="center"
      align="center">
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
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
