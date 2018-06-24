<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :xs="24" :sm="24" :lg="12">
        <wrapper-one title="安全趋势">
          <chart-legend slot="legend" :params="params" :chart="chart"></chart-legend>
          <line-chart id="linechartOne" slot="lineChart" width="60%" float="left" v-on:legend="drawLegend" v-on:draw="drawChart"></line-chart>
          <bar-chart id="barChartOne" slot="barChart" width="35%" float="left"></bar-chart>
        </wrapper-one>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="12">
        <wrapper-one title="安全趋势">
          <rect-legend slot="legend" :params="pieParams" :chart="pieChart"></rect-legend>
          <pie-chart id="pieChartOne" slot="pieChart" width="60%" float="left" v-on:pieLegend="drawPieLegend" v-on:drawPie="drawPie" :data="chartData"></pie-chart>
        </wrapper-one>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import wrapperOne from './components/wrapperOne.vue'
  import lineChart from './components/lineChart.vue'
  import pieChart from './components/pieChart.vue'
  import chartLegend from './components/chartLegend.vue'
  import rectLegend from './components/rectLegend.vue'
  import barChart from './components/barChart.vue'
  export default {
    components: {
      wrapperOne,
      lineChart,
      barChart,
      pieChart,
      chartLegend,
      rectLegend
    },
    data() {
      return {
        chart: null,
        pieChart: null,
        pieParams: [],
        params: [],
        chartData: [
          { name: '业务1', value: 23 },
          { name: '业务2', value: 45 },
          { name: '业务3', value: 120 },
          { name: '业务4', value: 4 }
        ]
      }
    },
    computed: {
    },
    methods: {
      drawLegend(data) {
        if (Array.isArray(data)) {
          this.params = data
        }
      },
      drawChart(data) {
        this.chart = data
      },
      drawPieLegend(data) {
        if (Array.isArray(data)) {
          this.pieParams = data
        }
      },
      drawPie(data) {
        this.pieChart = data
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
