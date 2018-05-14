<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <!--左侧指示器-->
        <el-col :span="16">
          <el-row :gutter="40">
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="漏洞总数" icon="icon-totalAssets" :data="8888" ></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="未修复" icon="icon-totalAssets" :data="8888" ></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="已修复" icon="icon-totalAssets" :data="8888" ></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="近一周发现" icon="icon-totalAssets" :data="8888" ></vulneIndicator>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :lg="24">
              <VulneStatistic title="漏洞统计" icon="icon-totalAssets" :itemArray="vulneDataList" ></VulneStatistic>
            </el-col>
          </el-row>
        </el-col>
        <!--右侧图表-->
        <el-col :span="8">
          <ringDiagram id="ringDiagram"></ringDiagram>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vulneIndicator from './components/vulneIndicator'
  import VulneStatistic from './components/VulneStatistic'
  import ringDiagram from './components/ringDiagram'
  import axios from 'axios'

  export default {
    components: {
      vulneIndicator,
      VulneStatistic,
      ringDiagram
    },
    data() {
      return {
        securityEvent: 0,
        totalAssets: 0,
        netEventData: [],
        assetDiscoveryData: [],
        vulneDataList: []
      }
    },
    methods: {
      getvulneStatisticList() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.vulneDataList = data.vulneData
            }
          })
      },
      getNetEventData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.netEventData = data.netEvent
            }
          })
      },
      getAssetDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.assetDiscoveryData = data.assetDiscovery
            }
          })
      },
      getVulneDiscoveryData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.overview
              this.vulneDiscoveryData = data.vulneDiscovery
            }
          })
      }
    },
    created() {
      // 顶部，4个指标的数据
      // 中间，5个图表的数据
      // 底部，3个列表的数据
      this.getvulneStatisticList()
      this.getNetEventData()
      this.getAssetDiscoveryData()
      this.getVulneDiscoveryData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .indicator
    .chart-wrapper
    .table-wrapper
      margin-top: 18px
</style>
