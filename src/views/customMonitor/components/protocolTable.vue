<template>
    <el-table :data="dataList" border style="width: 50%" height="250">
      <el-table-column
        label="应用协议"
        prop="type"
        sortable
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        label="百分比"
        prop="precent"
        header-align="center"
        align="center"
        width="140">
      </el-table-column>
      <el-table-column
        label="流量"
        prop="flow"
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
