<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <el-col ::xs="24" :sm="24" :lg="24">
          <!--<IPStat title="Top 10 IP资产流量统计（流入）" id="IPStatIn" :data="totalFlow.totalInBySrcIp" titleType="simple" :height="330" width="80%" float="left">-->
            <!--<div style="padding: 20px 5px 0">-->
              <!--<IPStatTable :dataList="totalFlow.totalInBySrcIp"></IPStatTable>-->
            <!--</div>-->
          <!--</IPStat>-->
          <pie-charts id="IPStatIn"
                      title="Top 10 IP资产流量统计（流入）"
                      :data="ChartData"
                      titleType="simple"
                      seriesName="流量统计"
                      width="80%"
                      float="left"
                      pieSize="70%"
                      :piePosition="pieCenter"
                      labelFontSize="11"
                      chartStyle="barPie"
                      barWidth="40%"
                      gridLeft="7%"
                      gridWidth="60%"
                      gridHeight="70%"
                      gridBottom="15%">
            <div style="padding: 20px 5px 0">
              <IPStatTable :dataList="ChartData"></IPStatTable>
            </div>
          </pie-charts>
        </el-col>
      </el-row>
    </div>
    <div class="indicator">
      <el-row>
        <el-col ::xs="24" :sm="24" :lg="24">
          <!--<IPStat title="Top 10 IP资产流量统计（流出）" id="IPStatOut" :data="totalFlow.totalOutBySrcIp" titleType="simple" :height="330" width="80%" float="left">-->
            <!--<div style="padding: 20px 5px 0">-->
              <!--<IPStatTable :dataList="totalFlow.totalOutBySrcIp"></IPStatTable>-->
            <!--</div>-->
          <!--</IPStat>-->
          <pie-charts id="IPStatOut"
                      title="Top 10 IP资产流量统计（流出）"
                      :data="ChartData"
                      titleType="simple"
                      seriesName="流量统计"
                      width="80%"
                      float="left"
                      pieSize="70%"
                      :piePosition="pieCenter"
                      labelFontSize="11"
                      chartStyle="barPie"
                      barWidth="40%"
                      gridLeft="7%"
                      gridWidth="60%"
                      gridHeight="70%"
                      gridBottom="15%">
            <div style="padding: 20px 5px 0">
              <IPStatTable :dataList="ChartData"></IPStatTable>
            </div>
          </pie-charts>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="60">
        <el-col :xs="24" :sm="24" :lg="12">
          <!--<appTranStat title="Top 5 协议统计(流入)" id="appTranStatIn" :data="totalFlow.totalInBySrcIp" :data2="ChartData" titleType="simple"></appTranStat>-->
          <pie-charts id="appTranStatIn"
                      title="Top 5 协议统计(流入)"
                      :data="ChartData"
                      :data2="ChartData"
                      titleType="simple"
                      seriesName="应用层协议统计"
                      seriesName2="传输层协议统计"
                      pieSize="60%"
                      :piePosition="DoupieCenter"
                      :piePosition2="DoupieCenter2"
                      labelFontSize="11"
                      chartStyle="doublePie">
          </pie-charts>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <!--<appTranStat title="Top 5 协议统计(流出)" id="appTranStatOut" :data="totalFlow.totalOutBySrcIp" :data2="totalFlow.totalOutByDstIp" titleType="simple"></appTranStat>-->
          <pie-charts id="appTranStatOut"
                      title="Top 5 协议统计(流出)"
                      :data="ChartData"
                      :data2="ChartData"
                      titleType="simple"
                      seriesName="应用层协议统计"
                      seriesName2="传输层协议统计"
                      pieSize="60%"
                      :piePosition="DoupieCenter"
                      :piePosition2="DoupieCenter2"
                      labelFontSize="11"
                      chartStyle="doublePie">
          </pie-charts>
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
  import pieCharts from 'components/charts/piecharts'
  import IPStat from './components/IPStat'
  import IPStatTable from './components/IPStatTable'
  import appTranStat from './components/appTranStat'
  import sessionRank from './components/sessionRank'
  import TableWrapper from 'components/table/tableWrapper'
  import axios from 'axios'
  import flowApi from '@/api/flow'
  import constants from '@/utils/constants'

  export default {
    components: {
      pieCharts,
      IPStat,
      IPStatTable,
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
          totalOutByL7: [],
          totalInBySrcIp: [],
          totalInByDstIp: [],
          totalOutBySrcIp: [],
          totalOutByDstIp: []
        },
        sessRankData: [],
        IPStatData: [],
        pieCenter: ['80%', '50%'],
        DoupieCenter: ['25%', '50%'],
        DoupieCenter2: ['75%', '50%'],
        ChartData: [
          {value: 4, name: '访问行为'},
          {value: 5, name: '流量'},
          {value: 17, name: '关键操作'},
          {value: 1, name: '其他'}
        ]
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
          this.totalFlow.totalInBySrcIp = data.total.totalInBySrcIp.map(function (item, index, array) {
            return {name: item.key, value: item.y}
          })
          this.totalFlow.totalInByDstIp = data.total.totalInByDstIp.map(function (item, index, array) {
            return {name: item.key, value: item.y}
          })
          this.totalFlow.totalOutByL4 = data.total.totalOutByL4.map(function (item, index, array) {
            return {name: constants.L4_PROTO[item.key], value: item.y}
          })
          this.totalFlow.totalOutByL7 = data.total.totalOutByL7.map(function (item, index, array) {
            return {name: constants.L7_PROTO[item.key], value: item.y}
          })
          this.totalFlow.totalOutBySrcIp = data.total.totalOutBySrcIp.map(function (item, index, array) {
            return {name: item.key, value: item.y}
          })
          this.totalFlow.totalOutByDstIp = data.total.totalOutByDstIp.map(function (item, index, array) {
            return {name: item.key, value: item.y}
          })
          // 流量的数据
          console.log('未处理的FlowData', data)
          // 加工后的数据
          console.log('预处理后的FlowData', this.totalFlow)
        })
      },
      getIPStatData() {
        axios.get('/api/integrateMonitor/table.json').then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data.flows
            this.IPStatData = data.IPStat
          }
        })
      }
    },
    mounted() {
      this.getFlowData({eventId: 'ui-flows-summary'})
      // 获取会话排行表格数据
      this.getsessRankData()
      this.getIPStatData()
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
