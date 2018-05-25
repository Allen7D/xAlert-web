<template>
    <el-table :data="dataList" border style="width: 50%" height="250">
      <el-table-column
        label="事件类型"
        prop="type"
        sortable
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        label="数量"
        prop="num"
        sortable
        header-align="center"
        align="center">
      </el-table-column>
    </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
