<template>
    <el-table :data="dataList" border style="width: 100%" height="250">
      <el-table-column label="时间" prop="timestamp" :formatter="timeConvert" header-align="center" align="center" sortable>
      </el-table-column>
      <el-table-column label="IP" prop="ip" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="业务网络" :formatter="splice" header-align="center" align="center" sortable>
      </el-table-column>
    </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: Array
    },
    methods: {
      splice(row) {
        return `${row.probe}-${row.iface}`
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
