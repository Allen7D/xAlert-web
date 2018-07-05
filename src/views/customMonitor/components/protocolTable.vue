<template>
    <el-table :data="dataList" border style="width: 50%" height="250" v-if="dataList">
      <el-table-column label="应用协议" prop="name" sortable header-align="center" align="center" width="180"></el-table-column>
      <el-table-column label="百分比" :formatter="precentConvert" header-align="center" align="center" width="140"></el-table-column>
      <el-table-column label="流量" prop="value" :formatter="flowConvert" sortable header-align="center" align="center"></el-table-column>
    </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: Array
    },
    methods: {
      precentConvert(row, column) {
        return Math.round(row.value / this.valueSum * 10000) / 100.00 + '%'
      }
    },
    computed: {
      valueSum() {
        let sum = 0
        for (let i = 0; i < this.dataList.length; i++) {
          sum += this.dataList[i].value
        }
        return sum
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
