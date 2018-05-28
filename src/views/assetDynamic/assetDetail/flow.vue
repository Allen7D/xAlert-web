<template>
  <div class="main">
    <el-row>
      <el-col :span="14" :offset="10">
        <div class="time-picker" v-for="(item,index) in time" :key="index">{{item}}</div>
      </el-col>
    </el-row>
    <div style="width: 95%">
      <el-row>
        <flow-statistics id="flowStatistics" title="流量统计" v-bind:height='400' width="60%" float="left">
          <div style="padding: 30px 19px 0">
            <flow-table :dataList="flowData"></flow-table>
          </div>
        </flow-statistics>
      </el-row>
      <el-row>
        <el-col :span="10">
          <client-port id="clientPort" title="客户端端口"></client-port>
        </el-col>
        <el-col :span="10" :offset="2">
          <service-port id="servicePort" title="服务端端口"></service-port>
        </el-col>
      </el-row>
      <el-row>
        <protocol-chart id="application-protocol" title="应用协议TOP5" width="40%" float="left">
          <protocol-table :dataList="protocolData"></protocol-table>
        </protocol-chart>
      </el-row>
      <el-row>
        <protocol-chart id="transport-layer" title="传输层协议TOP5" width="40%" float="left">
          <protocol-table :dataList="protocolData"></protocol-table>
        </protocol-chart>
      </el-row>
      <el-row>
        <protocol-chart id="source" title="源TOP5" width="40%" float="left">
          <protocol-table :dataList="ipData" title="源IP" name="ip"></protocol-table>
        </protocol-chart>
      </el-row>
      <el-row>
        <protocol-chart id="target" title="目标TOP5" width="40%" float="left">
          <protocol-table :dataList="ipData" title="目标IP" name="ip"></protocol-table>
        </protocol-chart>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import flowStatistics from './components/flowStatistics'
  import clientPort from './components/clientPort'
  import servicePort from './components/servicePort'
  import protocolChart from './components/protocolChart'
  import flowTable from './components/flowTable'
  import protocolTable from './components/protocolTable'
  import axios from 'axios'
  export default {
    components: {
      flowStatistics,
      clientPort,
      servicePort,
      protocolChart,
      flowTable,
      protocolTable
    },
    data() {
      return {
        time: ['全部', '7天', '15天', '30天', '90天', '自定义'],
        flowData: [],
        protocolData: [],
        ipData: []
      }
    },
    methods: {
      getflowData() {
        axios.get('/api/customMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.flowData = data.protocol
            }
          })
      },
      getprotocolData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.protocolTable) {
              const data = res.protocolTable
              this.protocolData = data
            }
          })
      },
      getipData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.ipTable) {
              const data = res.ipTable
              this.ipData = data
            }
          })
      }
    },
    mounted() {
      this.getflowData()
      this.getprotocolData()
      this.getipData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .main
    width 974px
    height 100%
    border-top 5px #00A0E9 solid
    border-bottom  2px #E6E6E6 solid
    border-left 2px #E6E6E6 solid
    border-right 2px #E6E6E6 solid
    margin auto
    color black
    padding-left 26px
    .time-picker
      display inline-block
      width 70px
      height 25px
      line-height 25px
      background-color #E6E6E6
      font-size 15px
      color black
      margin 10px
      text-align center
</style>
