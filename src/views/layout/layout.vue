<template>
  <div class="app">
    <sidebar></sidebar>
    <div class="main">
      <div class="main-warpper">
        <navbar></navbar>
        <div class="table">
          <div class="title">
            <i class="icon-log"></i>
            <span>安全事件</span>
          </div>
          <div class="table-wrapper">
            <div class="number">
              <span>数量:</span>
              <span></span>
            </div>
            <div class="compare">
              <span>比昨日:</span>
              <i class="icon-arrow-down"></i>
              <span>23%</span>
            </div>
          </div>
        </div>
        <div class="bar-wrapper">
          <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <x-footer class=""></x-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sidebar from './sidebar/sidebar'
  import Navbar from './navbar/navbar'
  import Screenfull from 'components/screenfull/screenfull'
  import XFooter from 'components/footer/footer'
  import IMonitor from 'components/integrate-monitor/integrate-monitor'
  import CMonitor from 'components/custom-monitor/custom-monitor'
  import Analysis from 'components/analysis/analysis'
  import SystemStatus from 'components/system-status/system-status'
  import Log from 'components/log/log'
  import Admin from 'components/admin/admin'

  import axios from 'axios'
  import echarts from 'echarts'

  export default {
    components: {
      Sidebar,
      Navbar,
      Screenfull,
      XFooter,
      IMonitor,
      CMonitor,
      Analysis,
      SystemStatus,
      Log,
      Admin
    },
    data() {
      return {
        jsonData: 'hehe',
        xValue: ['自定义'],
        yValue: [10]
      }
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        console.log('methods', this.xValue)
        var base = +new Date(1968, 9, 3)
        var oneDay = 24 * 3600 * 1000
        var date = []

        var data = [Math.random() * 300]

        for (var i = 1; i < 20000; i++) {
          var now = new Date(base += oneDay)
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
          data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
        }

        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%']
            }
          },
          title: {
            left: 'center',
            text: '大数据量面积图'
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: 'rgb(255, 70, 131)'
                }
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }])
                }
              },
              data: data
            }
          ]
        })
      }
    },
    created() {
      axios.get('/api/assets', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        console.log('axios', this.xValue)
        var data = res.data
        for (let key in data) {
          this.xValue.push(data[key].label)
          this.yValue.push(parseInt(data[key].count))
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    mounted() {
      console.log('mounted', self.xValue, this.yValue)
      this.drawLine()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .app
    display: flex
    width: 100%
    height: 100%
    .main
      flex: 1
      height: 100%
    .main-warpper
      position: relative
      height: 100%
      .title
        position: absolute
        top: 40px
        left: 27px
        width: 128px
        height: 25px
        beveled-corners($color-theme, 5px)
        color: $color-theme-r
        font-size: 16px
        text-align: center
      .table-wrapper
        width: 315px
        height: 100px
        color: red
        beveled-corners(white, 0, 15px)
      .bar-wrapper
        width: 1100px
        margin-left: 50px
        background: white
</style>
