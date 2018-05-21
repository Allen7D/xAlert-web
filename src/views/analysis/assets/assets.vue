<template>
  <div class="container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="资产情况" name="first">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
          </el-col>
          <el-col :span="21">
            <div class="assetIndicator">
              <assetIndicator :itemArray="assetsAllDataList"></assetIndicator>
            </div>
            <div class="assetGrade">
              <assetGrade :itemArray="assetsGradeList" title="资产等级"></assetGrade>
            </div>
            <new-table-wrapper title="资产列表" tableHeight="250px">
              <assetList :dataList="assetsList"></assetList>
            </new-table-wrapper>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="仪表盘">
        <el-row>
          <el-col :span="3" class="left">
            <business title="业务"></business>
            <assetClassSta></assetClassSta>
          </el-col>
          <el-col :span="21">
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <assetTrend id="analysis-assetOnline" title="资产在线数据统计趋势"></assetTrend>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <assetTypeStatistics id="assetTypeStatistics" title="资产类型统计"></assetTypeStatistics>
                </el-col>
              </el-row>
            </div>
            <div class="chart-wrapper">
              <el-row>
                <el-col :xs="24" :sm="24" :lg="24">
                  <gradeDistribution id="gradeDestribution" title="等级分布"></gradeDistribution>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script type="text/ecmascript-6">
  import assetTrend from './components/assetTrend'
  import assetTypeStatistics from './components/assetTypeStatistics'
  import gradeDistribution from './components/gradeDistribution'
  import assetIndicator from './components/assetIndicator'
  import assetGrade from './components/assetGrade'
  import newTableWrapper from 'components/table/newTableWrapper'
  import assetList from './components/assetList'
  import business from './components/business'
  import assetClassSta from './components/AssetClassSta'
  import axios from 'axios'
  export default {
    components: {
      assetTrend,
      assetTypeStatistics,
      gradeDistribution,
      assetIndicator,
      assetGrade,
      newTableWrapper,
      assetList,
      business,
      assetClassSta
    },
    data() {
      return {
        activeName: 'first',
        assetsAllDataList: [],
        assetsGradeList: [],
        assetsList: []
      }
    },
    methods: {
      getAssetDataList() {
        axios.get('/api/analysis/indicator.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.assetsAllDataList = data.assetsAll
            }
          })
      },
      getAssetsGradeList() {
        axios.get('/api/analysis/indicator.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.assetsGradeList = data.assetsGrade
            }
          })
      },
      getAssetList() {
        axios.get('/api/analysis/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.assets
              this.assetsList = data.assetsList
            }
          })
      }
    },
    created() {
      this.getAssetDataList()
      this.getAssetsGradeList()
      this.getAssetList()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
</style>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container {
    background-color #fff
  }
  .left {
    background-color #f5f5f5
    height 1164px
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .container
    .el-tabs--card>.el-tabs__header {
      margin-bottom 0
    }
</style>
