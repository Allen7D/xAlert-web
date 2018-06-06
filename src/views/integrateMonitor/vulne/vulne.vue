<template>
  <div class="container">
    <div class="indicator">
      <el-row>
        <!--左侧指示器-->
        <el-col :span="17">
          <el-row :gutter="40">
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="漏洞总数" icon="icon-totalAssets" :data="8" ></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="未修复" icon="icon-totalAssets" :data="8" ></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="已修复" icon="icon-totalAssets" :data="0"></vulneIndicator>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="6">
              <vulneIndicator title="近一周发现" icon="icon-totalAssets" :data="5"></vulneIndicator>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :lg="24">
              <vulne-statistic title="漏洞统计" icon="icon-totalAssets" :itemArray="vulneDataList" ></vulne-statistic>
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
          <assetVulneDistribution id="assetVulneDistribution" title="资产漏洞分布" titleType="simple" :height="330" width="50%" float="left">
            <div style="padding: 20px 19px 0">
              <assetVulnerTable :dataList="assetVulData"></assetVulnerTable>
            </div>
          </assetVulneDistribution>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <BNetVulnerDistribution id="BNetVulnerDistribution" title="业务网络漏洞分布" titleType="simple"></BNetVulnerDistribution>
        </el-col>
      </el-row>
    </div>
    <div class="chartList-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <assetVulnerGrade id="assetVulnerGrade" title="资产漏洞分布" titleType="simple" :height="330" width="50%" float="left">
            <div style="padding: 20px 19px 0">
              <assetVulGradeTable :dataList="assetVulGradeData"></assetVulGradeTable>
            </div>
          </assetVulnerGrade>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <table-Wrapper title="最新发现漏洞列表" wrapperHeight="330px" tableHeight="230px">
            <newDiscoverVulneList :dataList="newDiscoverVulneData"></newDiscoverVulneList>
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
  import assetVulnerTable from './components/assetVulnerTable'
  import assetVulnerGrade from './components/assetVulnerGrade'
  import assetVulGradeTable from './components/assetVulGradeTable'
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
      assetVulnerTable,
      assetVulnerGrade,
      assetVulGradeTable,
      BNetVulnerDistribution,
      TableWrapper,
      newDiscoverVulneList
    },
    data() {
      return {
        vulneTotalData: 0,
        noRepairedData: 0,
        RepairedData: 0,
        recentWeekData: 0,
        vulneDataList: [],
        newDiscoverVulneData: [],
        assetVulData: [],
        assetVulGradeData: []
      }
    },
    methods: {
      getVulneTotalData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.vulneTotalData = data.vulneTotal
            }
          })
      },
      getNoRepairedData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.noRepairedData = data.noRepaired
            }
          })
      },
      getRepairedData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.RepairedData = data.Repaired
            }
          })
      },
      getRecentWeekData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.recentWeekData = data.recentWeek
            }
          })
      },
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
      },
      getAssetVulData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.assetVulData = data.assetVulner
            }
          })
      },
      getAssetVulGradeData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.vulne
              this.assetVulGradeData = data.assetVulGrade
            }
          })
      }
    },
    created() {
      this.getVulneTotalData()
      this.getNoRepairedData()
      this.getRepairedData()
      this.getRecentWeekData()
      this.getvulneStatisticList()
      this.getnewDiscoverVulneData()
      this.getAssetVulData()
      this.getAssetVulGradeData()
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
