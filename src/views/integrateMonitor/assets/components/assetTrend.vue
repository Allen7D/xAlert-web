<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-y-category-stack
  import Chart from 'components/charts/chart'
  import { getColor } from '@/utils/index'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          legend: {
            show: false,
            data: ['行李分拣', '业务3']
          },
          grid: {
            left: '5%',
            right: '5%',
            top: '5%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
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
              name: '行李分拣',
              type: 'line',
              smooth: true,
              data: [2, 125, 39, 26, 28, 70, 175, 182, 48, 18, 6, 2]
            },
            {
              name: '业务3',
              type: 'line',
              smooth: true,
              data: [3, 5, 11, 18, 148, 69, 231, 46, 55, 98, 10, 0]
            }
          ]
        }
      }
    },
    computed: {
      params() {
        let i = 0
        return this.option.series.map((item) => {
          return {name: item.name, color: this.option.color[i++], select: true}
        })
      }
    },
    created() {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          this.option.series[j].data.push(Math.round(Math.random() * 10))
        }
      }
    }
  }
</script>
