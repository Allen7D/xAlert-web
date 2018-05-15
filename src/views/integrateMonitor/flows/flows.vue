<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <el-col ::xs="24" :sm="24" :lg="24">
          <IPStat title="Top20 IP资产流量统计" id="IPStat"></IPStat>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="12">
          <appTranStat title="Top 5应用层/传输层协议统计" id="appTranStat"></appTranStat>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <portStat title="Top 5端口使用情况" id="portStat"></portStat>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  // import axios from 'axios'
  import IPStat from './components/IPStat'
  import appTranStat from './components/appTranStat'
  import portStat from './components/PortStat'
  export default {
    components: {
      IPStat,
      appTranStat,
      portStat
    },
    data() {
      return {}
    },
    methods: {},
    created() {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .chart-wrapper
      margin-top: 18px
</style>
