<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <!--左侧指示器-->
        <el-col :span="17">
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
        <el-col :span="7">
          <ringDiagram id="ringDiagram"></ringDiagram>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetVulneDistribution id="assetVulneDistribution" title="资产漏洞分布"></assetVulneDistribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <BNetVulnerDistribution id="BNetVulnerDistribution" title="业务网络漏洞分布"></BNetVulnerDistribution>
        </el-col>
      </el-row>
    </div>
    <div class="chartList-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetVulneDistribution title="资产漏洞分布"></assetVulneDistribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <table-Wrapper title="最新发现漏洞列表" wrapperHeight="330px" tableHeight="230px">
            <newDiscoverVulneList :dataList="newDiscoverVulneData"></newDiscoverVulneList>
            <!--分页-->
            <el-pagination style="margin-top:20px;margin-left:150px;"
              background
              layout="prev, pager, next"
              :total="100">
            </el-pagination>
          </table-Wrapper>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import vulneIndicator from './components/vulneIndicator'
  import VulneStatistic from './components/VulneStatistic'
  import ringDiagram from './components/ringDiagram'
  import assetVulneDistribution from './components/assetVulnerDistribution'
  import BNetVulnerDistribution from './components/BNetVulner Distribution'
  import TableWrapper from 'components/table/tableWrapper'
  import newDiscoverVulneList from './components/newDiscoverVulneList'
  import axios from 'axios'

  export default {
    components: {
      vulneIndicator,
      VulneStatistic,
      ringDiagram,
      assetVulneDistribution,
      BNetVulnerDistribution,
      TableWrapper,
      newDiscoverVulneList
    },
    data() {
      return {
        vulneDataList: [],
        newDiscoverVulneData: []
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
      getnewDiscoverVulneData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.newDiscoverVulneData = data.newDiscoverVulne
            }
          })
      }
    },
    created() {
      this.getvulneStatisticList()
      this.getnewDiscoverVulneData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    .chart-wrapper
      position relative
      top: -28px
    .chartList-wrapper
      margin-top 15px
</style>
