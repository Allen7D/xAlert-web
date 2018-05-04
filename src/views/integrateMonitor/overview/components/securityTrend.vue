<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=multiple-x-axis
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        data: {
          data1: [],
          data2: [],
          time: []
        },
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['事件数量', '漏洞数量'],
            textStyle: {
              color: '#FFF100',
              fontSize: '15'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 30,
              end: 80
            },
            {
              type: 'slider',
              show: 'true',
              start: 30,
              end: 80,
              fillerColor: 'rgba(81,217,255,0.5)'
            }
          ],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [],
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#4676FF'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#4676FF',
                fontSize: '15'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#4676FF'
              }
            }
          },
          yAxis: [
            {
              type: 'value',
              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#4676FF'
                }
              },
              axisLabel: {
                textStyle: {
                  color: '#4676FF',
                  fontSize: '15'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#4676FF'
                }
              }
            }
          ],
          color: getColor(),
          series: [
            {
              name: '事件数量',
              type: 'line',
              smooth: true,
              data: []
            },
            {
              name: '漏洞数量',
              type: 'line',
              smooth: true,
              data: []
            }
          ]
        }
      }
    },
    computed: {
      params() {
        let i = 0
        return this.option.series.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true, le: this.data.time.length}
        })
      }
    },
    created() {
      // for (let i = 0; i < 5; i++) { // 生成折线图数据
      //   for (let j = 0; j < 2; j++) {
      //     this.option.series[j].data.push(Math.round(Math.random() * 10))
      //   }
      // }
      this.getData()
    },
    methods: {
      getData() {
        setInterval(() => {
          let now = new Date()
          this.data.data1.push(Math.round(Math.random() * 100))
          this.data.data2.push(Math.round(Math.random() * 100))
          this.data.time.push([now.getHours(), now.getMinutes(), now.getSeconds()].join(':'))
         this.chart.setOption({
            xAxis: {
              data: this.data.time
            },
            series: [{
              data: this.data.data1
            },
              {
                data: this.data.data2
              }]
          })
      }, 1000)
      }
    }
  }
</script>
