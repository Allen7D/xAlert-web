<template>
    <el-table :data="dataList" border style="width: 50%" height="250">
      <el-table-column label="漏洞类型" prop="name" sortable header-align="center" align="center" width="180">
      </el-table-column>
      <el-table-column label="数量" prop="value" sortable header-align="center" align="center">
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
