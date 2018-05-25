<template>
    <el-table :data="dataList" border style="width: 100%" height="250">
      <el-table-column
        label="源（名称）"
        prop="srcName"
        sortable
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        label="源（地址）"
        prop="srcIP"
        header-align="center"
        align="center"
        width="140">
      </el-table-column>
      <el-table-column
        label="目标（名称）"
        prop="dstName"
        sortable
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="协议"
        prop="protocol"
        sortable
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="流量"
        prop="flow"
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
      dataList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
