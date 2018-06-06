<template>
  <el-table :data="dataList" border style="width: 18%" height="240">
    <el-table-column label="网络资产" prop="name" header-align="center" align="center">
    </el-table-column>
    <el-table-column label="数量" sortable prop="value" header-align="center" align="center">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: Array
    },
    methods: {
      convert(row) {
        return 'row'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
