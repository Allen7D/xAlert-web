<template>
  <el-table :data="dataList" border style="width: 50%" height="240">
    <el-table-column label="业务网络" prop="name" header-align="center" align="center">
    </el-table-column>
    <el-table-column label="数量" sortable prop="value" header-align="center" align="center">
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
