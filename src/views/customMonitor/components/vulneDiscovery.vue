<template>
    <el-table :data="dataList" border style="width: 100%" height="350">
      <el-table-column label="时间" prop="timestamp" header-align="center" align="center" sortable>
      </el-table-column>
      <el-table-column label="漏洞名称" prop="name" header-align="center" align="center">
      </el-table-column>
      <el-table-column label="业务网络" prop="src" header-align="center" align="center" sortable>
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
