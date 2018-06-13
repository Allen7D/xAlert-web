<template>
  <div class="container">
    <div class="indicator">
      <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :lg="6">
          <indicator title="事件总数" icon="icon-totalAssets" :data="event.count"></indicator>
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
          <!--<num-rank id="numRank" :data="event.statData" title="事件数量排名" titleType="simple"></num-rank>-->
          <pie-charts id="numRank"
                      title="事件数量排名"
                      :data="event.statData"
                      titleType="simple"
                      seriesName="事件数量排名"
                      chartStyle="bar"
                      gridLeft="3%"
                      gridRight="4%"
                      gridTop="10%"
                      gridBottom="3%">
          </pie-charts>
        </el-col>
      </el-row>
    </div>

    <div class="chart-wrapper">
      <el-row :gutter="20">
        <el-col :xs="32" :sm="32" :lg="8">
          <!--<level-dist id="levelDist" :data="pieChartData" title="事件等级分布" titleType="simple"></level-dist>-->
          <pie-charts id="levelDist"
                      title="事件等级分布"
                      :data="pieChartData"
                      titleType="simple"
                      seriesName="事件等级分布"
                      pieSize="75%"
                      :piePosition="pieCenter"
                      labelFontSize="18"
                      chartStyle="pie">
          </pie-charts>
        </el-col>
        <el-col :xs="32" :sm="32" :lg="16">
          <!--<genre-rank id="genreRank" title="事件类型排名" titleType="simple"></genre-rank>-->
          <pie-charts id="genreRank"
                      title="事件类型排名"
                      :data="ChartData"
                      titleType="simple"
                      seriesName="事件类型排名"
                      pieSize="65%"
                      :piePosition="pieBarCenter"
                      labelFontSize="11"
                      chartStyle="pieBar"
                      barWidth="30%"
                      gridLeft="30%"
                      gridTop="10%"
                      gridBottom="3%"
                      gridWidth="65%">
          </pie-charts>
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
  import pieCharts from 'components/charts/piecharts'
  import LongIndicator from 'components/indicator/longIndicator'

  import EventTrend from './components/eventTrend'
  import NumRank from './components/numRank'
  import LevelDist from './components/levelDist'
  import GenreRank from './components/genreRank'
  import GenreRankPie from './components/genreRankPie'

  import TableWrapper from 'components/table/tableWrapper'
  import EventList from './components/eventList'

  import axios from 'axios'
  import constants from '@/utils/constants'
  import {mapGetters} from 'vuex'
  import keyopApi from '@/api/keyop'

  export default {
    components: {
      pieCharts,
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
        pieCenter: ['50%', '50%'],
        pieBarCenter: ['16%', '50%'],
        event: {
          count: 0,
          data: {
            high: 0,
            medium: 0,
            low: 0
          },
          recentWeekData: {
            high: 0,
            medium: 0,
            low: 0
          },
          statData: []
        },
        totalIndex: [
          {key: '数量', value: 999}
        ],
        eventListData: [],
        ChartData: [
          {value: 4, name: '访问行为'},
          {value: 5, name: '流量'},
          {value: 17, name: '关键操作'},
          {value: 1, name: '其他'}
        ]
      }
    },
    computed: {
      ...mapGetters(['security']),
      lastweekIndex() {
        return [
          {key: '事件总数', value: this.event.recentWeekData.high + this.event.recentWeekData.medium + this.event.recentWeekData.low},
          {key: '重大', value: this.event.recentWeekData.high},
          {key: '较大', value: this.event.recentWeekData.medium},
          {key: '一般', value: this.event.recentWeekData.low}
        ]
      },
      pieChartData() {
        return [
          {value: this.event.data.high, name: '重大'},
          {value: this.event.data.medium, name: '较大'},
          {value: this.event.data.low, name: '一般'}
        ]
      }
    },
    methods: {
      getKeyopData() {
        // 最近一年的数据
        keyopApi.fetchKeyopEvent({range: 'LAST_YEAR'}).then(res => {
          const data = res.data.data.data
          const stat = {}
          let set = new Set()
          data.forEach((item, index, array) => {
            this.event.count += item.count.count
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              this.event.data.high += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              this.event.data.medium += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              this.event.data.low += item.count.count
            }

            if (set.has(`${item.rule.probe}-${item.rule.iface}`)) {
              stat[`${item.rule.probe}-${item.rule.iface}`] += 1
            } else {
              set.add(`${item.rule.probe}-${item.rule.iface}`)
              stat[`${item.rule.probe}-${item.rule.iface}`] = 1
            }
          })
          for (let key in stat) {
            this.event.statData.push({name: key, value: stat[key]})
          }
          console.log('this.event.statData', this.event.statData)
        })
          // 最近一周的数据
        keyopApi.fetchKeyopEvent({range: 'LAST_WEEK'}).then(res => {
          const data = res.data.data.data
          data.forEach((item, index, array) => {
            if (item.rule.severity === constants.SEVERITY.HIGH) {
              this.event.recentWeekData.high += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.MEDIUM) {
              this.event.recentWeekData.medium += item.count.count
            }
            if (item.rule.severity === constants.SEVERITY.LOW) {
              this.event.recentWeekData.low += item.count.count
            }
          })
        })
      },
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
    mounted() {
      this.getEventListData()
      this.getKeyopData()
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
