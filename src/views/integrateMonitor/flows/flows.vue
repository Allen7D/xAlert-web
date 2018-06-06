<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <el-col ::xs="24" :sm="24" :lg="24">
          <IPStat title="Top 20 IP资产流量统计（流入）" id="IPStatIn" titleType="simple"></IPStat>
        </el-col>
      </el-row>
    </div>
    <div class="indicator">
      <el-row>
        <el-col ::xs="24" :sm="24" :lg="24">
          <IPStat title="Top 20 IP资产流量统计（流出）" id="IPStatOut" titleType="simple"></IPStat>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="60">
        <el-col :xs="24" :sm="24" :lg="12">
          <appTranStat title="Top 5 协议统计(流入)" id="appTranStatIn" :data="totalFlow.totalInByL4" :data2="totalFlow.totalInByL7" titleType="simple"></appTranStat>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <appTranStat title="Top 5 协议统计(流出)" id="appTranStatOut" :data="totalFlow.totalOutByL4" :data2="totalFlow.totalOutByL7" titleType="simple"></appTranStat>
        </el-col>
      </el-row>
    </div>
    <!--<div class="table-wrapper">-->
      <!--<el-row>-->
        <!--<el-col :xs="24" :sm="24" :lg="24">-->
          <!--<TableWrapper title="Top 20会话排行" wrapperHeight="420px">-->
            <!--<sessionRank :dataList="sessRankData"></sessionRank>-->
          <!--</TableWrapper>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import IPStat from './components/IPStat'
  import appTranStat from './components/appTranStat'
  import sessionRank from './components/sessionRank'
  import TableWrapper from 'components/table/tableWrapper'
  import axios from 'axios'
  import flowApi from '@/api/flow'
  import constants from '@/utils/constants'

  export default {
    components: {
      IPStat,
      appTranStat,
      TableWrapper,
      sessionRank
    },
    data() {
      return {
        totalFlow: {
          totalInByL4: [],
          totalInByL7: [],
          totalOutByL4: [],
          totalOutByL7: []
        },
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
      },
      getFlowData(params) {
        flowApi.fetchFlowRule(params).then(res => {
          const data = res.data.data.data
          const totalFlow = {}
          totalFlow.TotalIn = data.total.totalIn
          totalFlow.TotalOut = data.total.totalOut
          this.totalFlow.totalInByL4 = data.total.totalInByL4.map(function (item, index, array) {
            return {name: constants.L4_PROTO[item.key], value: item.y}
          })
          this.totalFlow.totalInByL7 = data.total.totalInByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
          totalFlow.TotalInBySrcIp = data.total.totalInBySrcIp
          totalFlow.TotalInByDstIp = data.total.totalInByDstIp
          this.totalFlow.totalOutByL4 = data.total.totalOutByL4.map(function (item, index, array) {
            return {name: constants.L4_PROTO[item.key], value: item.y}
          })
          this.totalFlow.totalOutByL7 = data.total.totalOutByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
          totalFlow.TotalOutBySrcIp = data.total.totalOutBySrcIp
          totalFlow.TotalOutByDstIp = data.total.totalOutByDstIp
          this.$store.commit('fetchFlow', totalFlow)
          // 流量的数据
          console.log('未处理的FlowData', data)
          // 加工后的数据
          console.log('预处理后的FlowData', totalFlow)
        })
      }
    },
    mounted() {
      this.getFlowData({eventId: 'ui-flows-summary'})
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
