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
      <el-row :gutter="60">
        <el-col :xs="24" :sm="24" :lg="12">
          <appTranStat title="Top 5应用层/传输层协议统计" id="appTranStat"></appTranStat>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <portStat title="Top 5端口使用情况" id="portStat"></portStat>
        </el-col>
      </el-row>
    </div>
    <div class="table-wrapper">
      <el-row>
        <el-col :xs="24" :sm="24" :lg="24">
          <TableWrapper title="Top 20会话排行" wrapperHeight="420px">
            <sessionRank :dataList="sessRankData"></sessionRank>
            <!--分页-->
            <el-pagination style="margin-top: 20px;margin-left: 35%;"
                           background
                           layout="prev, pager, next"
                           :total="130">
            </el-pagination>
          </TableWrapper>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import IPStat from './components/IPStat'
  import appTranStat from './components/appTranStat'
  import portStat from './components/PortStat'
  import sessionRank from './components/sessionRank'
  import TableWrapper from 'components/table/tableWrapper'
  import axios from 'axios'
  export default {
    components: {
      IPStat,
      appTranStat,
      portStat,
      TableWrapper,
      sessionRank
    },
    data() {
      return {
        sessRankData: []
      }
    },
    methods: {
      getsessRankData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.flows
              this.sessRankData = data.sessRank
            }
          })
      }
    },
    created() {
      // 获取会话排行表格数据
      this.getsessRankData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
      margin-top: 20px
  .container
    .table-wrapper
    .chart-wrapper
      margin-top: 10px
</style>
