<template>
    <el-table :data="list" border style="width: 100%" height="250">
      <el-table-column
        label="时间"
        prop="time"
        sortable
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        label="事件名称"
        prop="eventName"
        header-align="center"
        align="center"
        width="140">
      </el-table-column>
      <el-table-column
        label="源IP"
        prop="srcIP"
        sortable
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="目标IP"
        prop="dstIP"
        sortable
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="业务网络"
        prop="netName"
        sortable
        header-align="center"
        align="center"
        width="110">
      </el-table-column>
    </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      list: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
