<template>
  <el-table :data="dataList" border style="width: 60%" height="380">
    <el-table-column
      label="接收源IP"
      prop="receiveIP"
      header-align="center"
      align="center"
      width="300">
    </el-table-column>
    <el-table-column
      label="百分比"
      prop="percent"
      header-align="center"
      align="center">
    </el-table-column>
    <el-table-column
      label="流量"
      prop="flow"
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
