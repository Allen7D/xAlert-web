<!--<template>-->
    <!--<el-table :data="dataList" border style="width: 100%" height="250">-->
      <!--<el-table-column label="时间" prop="time" header-align="center" align="center" sortable>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="资产名称" prop="name" header-align="center" align="center">-->
      <!--</el-table-column>-->
      <!--<el-table-column label="漏洞数量" prop="amount" width="120" header-align="center" align="center">-->
      <!--</el-table-column>-->
      <!--<el-table-column label="业务网络" prop="serviceNet" width="110" header-align="center" align="center" sortable>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
<!--</template>-->

<!--<script type="text/ecmascript-6">-->
  <!--export default {-->
    <!--props: {-->
      <!--dataList: Array-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<!--</style>-->

<template>
  <el-table :data="dataList2" border style="width: 100%" height="230">
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
    },
    data() {
      return {
        dataList2: [
          {timestamp: '2018/6/6 01:12:16', name: 'CNVD-2017-29999', src: 'gushenxing-eth0'},
          {timestamp: '2018/6/6 06:43:21', name: 'CNVD-2017-25719', src: 'gushenxing-eth0'},
          {timestamp: '2018/6/6 17:39:15', name: 'CNVD-2017-25718', src: 'gushenxing-eth0'},
          {timestamp: '2018/6/7 09:35:53', name: 'CNVD-2017-24364', src: 'gushenxing-eth0'},
          {timestamp: '2018/6/7 12:15:15', name: 'CNVD-2017-25716', src: 'gushenxing-eth0'},
          {timestamp: '2018/6/6 17:01:31', name: 'CNVD-2017-22840', src: 'master-eth0'},
          {timestamp: '2018/6/6 10:05:44', name: 'CNVD-2017-22841', src: 'airport-eth0'},
          {timestamp: '2018/6/6 10:15:43', name: 'CNVD-2017-22843', src: 'iot-eth0'},
          {timestamp: '2018/6/7 07:11:24', name: 'CNVD-2017-10575', src: 'iot-eth0'},
          {timestamp: '2018/6/7 01:19:11', name: 'CNVD-2017-08714', src: 'iot-eth0'},
          {timestamp: '2018/6/7 07:21:19', name: 'CNVD-2017-08712', src: 'iot-eth0'},
          {timestamp: '2018/6/7 11:19:31', name: 'CNVD-2017-05939', src: 'cnc-eth0'},
          {timestamp: '2018/6/7 12:11:59', name: 'CNVD-2017-05940', src: 'cnc-eth0'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
