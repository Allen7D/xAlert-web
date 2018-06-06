<template>
  <el-table v-loading="loading" :data="dataList" border style="width: 100%" height="350">
    <el-table-column label="状态" prop="status" sortable header-align="center" align="center" width="100">
      <!--<template slot-scope="scope">-->
        <!--<i class="el-icon-remove-outline"></i>-->
        <!--<span style="margin-left: 10px"></span>-->
      <!--</template>-->
    </el-table-column>
    <el-table-column label="IP地址" prop="ip" header-align="center" align="center"></el-table-column>
    <el-table-column label="MAC地址" prop="mac" header-align="center" align="center"></el-table-column>
    <el-table-column label="采集器" prop="probe" header-align="center" align="center" width="200"></el-table-column>
    <el-table-column label="端口" prop="iface" header-align="center" align="center" width="200"></el-table-column>
    <el-table-column label="采集时间" prop="timestamp" :formatter="timeConvert" sortable header-align="center" align="center"></el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      dataList: Array
    },
    computed: {
      loading() {
        return !this.dataList.length
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
