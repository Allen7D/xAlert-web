<template>
  <div class="container">
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <wrapper-one title="安全趋势">
            <line-legend slot="legend" :params="lineParams" :chart="lineChart"></line-legend>
            <timer slot="timePicker" :timeArr="timeList" :chart="lineChart"></timer>
            <line-chart slot="lineChart" v-on:legend="linelegend" v-on:draw="drawLineChart" id="chartOne"></line-chart>
            <!--<pieChart slot="chartTwo" chartWidth="35%" :option="pieSetting"></pieChart>-->
          </wrapper-one>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <wrapper-one title="安全趋势">
            <rect-legend slot="legend" :params="pieParams" :chart="pieChart"></rect-legend>
            <pieChart slot="pieChart" :selfOption="pieSetting" v-on:pieLegend="pieLegend" v-on:drawPie="drawPieChart" id="chartTwo" :data="chartData" width="40%" float="left"></pieChart>
            <singleBarChart slot="barChart" id="chartThree" :data="chartData" width="50%" float="left"></singleBarChart>
          </wrapper-one>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <wrapper-one title="安全趋势">
            <rect-legend slot="legend" :params="complexBarParams" :chart="complexBarChart"></rect-legend>
            <complex-bar-chart slot="barChart" v-on:complexBarLegend="complexBarLegend" v-on:drawComplexBar="drawComplexBar" id="complexbarchart"></complex-bar-chart>
          </wrapper-one>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <wrapper-one title="安全趋势">
            <rect-legend slot="legend" :params="drawStackBarParams" :chart="drawStackBarChart"></rect-legend>
            <stackBarChart slot="barChart" v-on:stackBarLegend="stackBarLegend" v-on:drawStackBar="drawStackBar" id="stackBarChart"></stackBarChart>
          </wrapper-one>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="24" :lg="12">
          <wrapper-two title="安全趋势">
            <line-legend slot="legend" :params="lineParams" :chart="lineChart"></line-legend>
            <timer slot="timePicker" :timeArr="timeList" :chart="lineChart"></timer>
            <line-chart slot="lineChart" v-on:legend="linelegend" v-on:draw="drawLineChart" id="linechartTwo"></line-chart>
          </wrapper-two>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import wrapperOne from './components/wrapperOne'
  import wrapperTwo from './components/wrapperTwo'
  import lineLegend from 'components/charts/lineLegends'
  import rectLegend from './components/rectLegend'
  import lineChart from './components/lineChart'
  import pieChart from './components/pieChart'
  import singleBarChart from './components/singleBarChart'
  import complexBarChart from './components/complexBarChart'
  import stackBarChart from './components/stackBarChart'
  import timer from './components/timer'
  export default {
    components: {
      wrapperOne,
      wrapperTwo,
      lineLegend,
      rectLegend,
      lineChart,
      pieChart,
      singleBarChart,
      complexBarChart,
      stackBarChart,
      timer
    },
    data() {
      return {
        lineParams: [],
        pieParams: [],
        complexBarParams: [],
        drawStackBarParams: [],
        lineChart: null,
        pieChart: null,
        complexBarChart: null,
        drawStackBarChart: null,
        chartData: [
          {value: 4, name: '访问行为'},
          {value: 5, name: '流量'},
          {value: 17, name: '关键操作'},
          {value: 1, name: '其他'}
          ],
        pieSetting: {
          radius: '55%',
          center: ['45%', '50%']
        },
        timeList: [
          {
            select: true,
            name: '24h',
            time: 1000 * 3600 * 24
          },
          {
            select: false,
            name: '7天',
            time: 1000 * 3600 * 24 * 7
          },
          {
            select: false,
            name: '30天',
            time: 1000 * 3600 * 24 * 30
          },
          {
            select: false,
            name: '90天',
            time: 1000 * 3600 * 24 * 90
          },
          {
            select: false,
            name: '半年',
            time: 1000 * 3600 * 24 * 180
          }]
      }
    },
    methods: {
      linelegend(data) {
        if (Array.isArray(data)) {
          this.lineParams = data
        }
      },
      pieLegend(data) {
        if (Array.isArray(data)) {
          this.pieParams = data
        }
      },
      drawLineChart(data) {
        this.lineChart = data
      },
      drawPieChart(data) {
        this.pieChart = data
      },
      complexBarLegend(data) {
        if (Array.isArray(data)) {
          this.complexBarParams = data
        }
      },
      drawComplexBar(data) {
        this.complexBarChart = data
      },
      stackBarLegend(data) {
        if (Array.isArray(data)) {
          this.drawStackBarParams = data
        }
      },
      drawStackBar(data) {
        this.drawStackBarChart = data
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
     top 0
     left 0
     right 0
     bottom 0
     margin auto
     z-index -1
     background-size cover
     background-repeat no-repeat
     background-image url(./bg.jpg)
     padding 50px 50px 0 50px
     overflow auto
</style>
