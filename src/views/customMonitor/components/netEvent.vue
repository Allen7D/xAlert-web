<template>
  <el-table :data="dataList" border style="width: 100%" height="350">
    <el-table-column prop="rule.name" label="事件名称" header-align="center" align="center"></el-table-column>
    <el-table-column :formatter="splice" label="归类" sortable header-align="center" align="center" width="150"></el-table-column>
    <el-table-column prop="rule.severity" label="事件等级" sortable header-align="center" align="center" width="100"></el-table-column>
    <el-table-column prop="rule.srcIp" label="源IP地址" sortable header-align="center" align="center"></el-table-column>
    <el-table-column prop="rule.dstIp" label="目标IP地址" sortable header-align="center" align="center"></el-table-column>
    <el-table-column :formatter="status" label="状态" sortable header-align="center" align="center" width="100"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: Array
    },
    methods: {
      splice(row) {
        return `${row.rule.probe}-${row.rule.iface}`
      },
      status(row) {
        if (!row.count.count) {
          return '在线'
        }
        return '离线'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
