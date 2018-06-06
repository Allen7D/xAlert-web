<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :lg="6">
          <indicator title="事件总数" icon="icon-totalAssets" :data="security.summaryTotal"></indicator>
        </el-col>
        <el-col :xs="18" :sm="18" :lg="18">
          <long-indicator title="近一周发现" icon="icon-webloudongjiance" :indicators="lastweekIndex"></long-indicator>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <event-trend id="eventTrend" title="事件趋势" titleType="simple"></event-trend>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <num-rank id="numRank" title="事件数量排名" titleType="simple"></num-rank>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="20">
        <el-col :xs="32" :sm="32" :lg="8">
          <level-dist id="levelDist" title="事件等级分布" titleType="simple"></level-dist>
        </el-col>
        <el-col :xs="32" :sm="32" :lg="16">
          <genre-rank id="genreRank" title="事件类型排名" titleType="simple"></genre-rank>
        </el-col>
      </el-row>
    </div>
    <div class="table-wrapper">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :lg="24">
          <table-wrapper title="事件列表" tableHeight="250px">
            <event-list :dataList="eventListData"></event-list>
          </table-wrapper>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Indicator from 'components/indicator/indicator'
  import LongIndicator from 'components/indicator/longIndicator'

  import EventTrend from './components/eventTrend'
  import NumRank from './components/numRank'
  import LevelDist from './components/levelDist'
  import GenreRank from './components/genreRank'
  import GenreRankPie from './components/genreRankPie'

  import TableWrapper from 'components/table/tableWrapper'
  import EventList from './components/eventList'

  import axios from 'axios'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Indicator,
      LongIndicator,
      EventTrend,
      NumRank,
      LevelDist,
      GenreRank,
      GenreRankPie,
      TableWrapper,
      EventList
    },
    data() {
      return {
        totalIndex: [
          {key: '数量', value: 999}
        ],
        lastweekIndex: [
          {key: '事件总数', value: 13},
          {key: '重大', value: 22},
          {key: '较大', value: 61},
          {key: '一般', value: 181}
          ],
        eventListData: []
      }
    },
    computed: {
      ...mapGetters(['security'])
    },
    methods: {
      getEventListData() {
        axios.get('/api/integrateMonitor/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data.events
              this.eventListData = data.eventList
            }
          })
      }
    },
    created() {
      this.getEventListData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .container
    .indicator
    .chart-wrapper
    .table-wrapper
      margin-top: 18px

</style>
