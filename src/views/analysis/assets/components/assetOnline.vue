<template>
    <div class="asset-online">
      <el-table :data="dataList" border style="width: 100%" height="250">
        <el-table-column prop="status" label="状态" sortable header-align="center" align="center" width="100"></el-table-column>
        <el-table-column prop="addressIP" label="IP地址" header-align="center" align="center"></el-table-column>
        <el-table-column prop="assetName" label="资产名称" header-align="center" align="center" width="150"></el-table-column>
        <el-table-column prop="business" label="所属业务" header-align="center" align="center" width="150"></el-table-column>
        <el-table-column prop="type" label="类型" header-align="center" align="center" width="150"></el-table-column>
        <el-table-column prop="importance" label="重要性" sortable header-align="center" align="center" width="100"></el-table-column>
        <el-table-column prop="eventsNum" label="事件数量" sortable header-align="center" align="center" width="130"></el-table-column>
        <el-table-column prop="vulnerabilityNum" label="漏洞数量" sortable header-align="center" align="center" width="130"></el-table-column>
        <el-table-column prop="port" label="端口" header-align="center" align="center" width="110"></el-table-column>
        <el-table-column prop="communicationNum" label="通信量" sortable header-align="center" align="center" width="130"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" sortable header-align="center" align="center"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      props: {
        dataList: Array
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .asset-online
    height: 320px
    padding: 30px 19px 0
</style>
