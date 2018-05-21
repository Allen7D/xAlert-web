<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=bar-tick-align
  import Chart from 'components/charts/chart'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['行李分拣', '自助值机', '行李分拣', '自助值机', '监控', '监控', '业务系统4', '业务系统4', '业务系统5', '业务系统5', '业务系统6', '业务系统6', '业务系统7', '业务系统7', '业务系统8', '业务系统8', '业务系统9', '业务系统9', '业务系统10', '业务系统10', '业务系统11', '业务系统11', '业务系统12', '业务系统12', '业务系统13', '业务系统13'],
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '10'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#A0B9FF'
                }
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: '#A0B9FF',
                  fontSize: '15'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#A0B9FF'
                }
              }
            }
          ],
          grid: {
            left: '1%',
            width: '50%',
            height: '70%',
            bottom: '15%'
          },
          series: [
            {
              name: '流量统计',
              type: 'pie',
              radius: '60%',
              center: ['65%', '50%'],
              data: [
                {value: 335, name: '业务网络2'},
                {value: 310, name: '业务网络5'},
                {value: 234, name: '业务网络4'},
                {value: 135, name: '业务网络3'},
                {value: 1548, name: '业务网络1'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name: '流量统计',
              type: 'bar',
              barWidth: '40%',
              data: [100, 52, 200, 334, 390, 188, 88, 85, 555, 333, 200, 334, 390, 188, 100, 52, 200, 334, 188, 88, 85, 555, 333, 200, 155, 244],
              color: '#4676ff'
            }
          ]
        }
      }
    }
  }
</script>
