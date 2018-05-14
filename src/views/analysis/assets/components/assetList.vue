<template>
  <el-table :data="dataList" border style="width: 100%" height="330">
    <el-table-column
      type="selection"
      header-align="center"
      align="center"
      width="45">
    </el-table-column>
    <el-table-column
      label="资产名称"
      prop="assetName"
      header-align="center"
      align="center"
      width="90">
    </el-table-column>
    <el-table-column
      label="IP地址"
      prop="IPAddress"
      header-align="center"
      align="center"
      width="110">
    </el-table-column>
    <el-table-column
      label="MAC地址"
      prop="MACAddress"
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="操作系统"
      prop="OperateSys"
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="所属业务"
      prop="business"
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="类型"
      prop="type"
      header-align="center"
      align="center"
      width="80">
    </el-table-column>
    <el-table-column
      label="等级"
      prop="grade"
      sortable
      header-align="center"
      align="center"
      width="80">
    </el-table-column>
    <el-table-column
      label="事件"
      prop="event"
      header-align="center"
      align="center"
      width="90">
    </el-table-column>
    <el-table-column
      label="漏洞"
      prop="Vulnerability"
      header-align="center"
      align="center"
      width="80">
    </el-table-column>
    <el-table-column
      label="端口"
      prop="port"
      header-align="center"
      align="center"
      width="80">
    </el-table-column>
    <el-table-column
      label="状态"
      prop="status"
      header-align="center"
      align="center"
      width="80">
    </el-table-column>
    <el-table-column
      label="发现时间"
      prop="findTime"
      header-align="center"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="operate"
      header-align="center"
      align="center"
      width="70">
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
<style lang="stylus" rel="stylesheet/stylus">
  .el-table tr:nth-child(odd) {
    background: #fff;
  }
  .el-table tr:nth-child(even) {
    background: #f2f2f2;
  }
  .el-table tr {
    color: #000
  }
</style>
