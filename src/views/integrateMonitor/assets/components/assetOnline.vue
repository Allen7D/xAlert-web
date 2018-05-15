<template>
  <el-table :data="dataList" border style="width: 100%" height="250">
    <el-table-column
      label="状态"
      prop="status"
      sortable
      header-align="center"
      align="center"
      width="100">
      <template slot-scope="scope">
        <i class="el-icon-remove-outline"></i>
        <span style="margin-left: 10px">离线</span>
      </template>
    </el-table-column>
    <el-table-column
      label="IP地址"
      prop="addressIP"
      header-align="center"
      align="center">
    </el-table-column>
    <el-table-column
      label="资产名称"
      prop="assetName"
      header-align="center"
      align="center"
      width="150"
    >
    </el-table-column>
    <el-table-column
      label="所属业务"
      prop="business"
      header-align="center"
      align="center"
      width="150"
    >
    </el-table-column>
    <el-table-column
      label="类型"
      prop="type"
      header-align="center"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      label="重要性"
      prop="importance"
      sortable
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="事件数量"
      prop="eventsNum"
      sortable
      header-align="center"
      align="center"
      width="130">
    </el-table-column>
    <el-table-column
      label="漏洞数量"
      prop="vulnerabilityNum"
      sortable
      header-align="center"
      align="center"
      width="130">
    </el-table-column>
    <el-table-column
      label="端口"
      prop="port"
      header-align="center"
      align="center"
      width="110">
    </el-table-column>
    <el-table-column
      label="通信量"
      prop="communicationNum"
      sortable
      header-align="center"
      align="center"
      width="130">
    </el-table-column>
    <el-table-column
      label="更新时间"
      prop="updateTime"
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
