<script type="text/ecmascript-6">
  // http://echarts.baidu.com/examples/editor.html?c=multiple-x-axis
  import analysis from 'components/analysis/analysis'
  export default {
    extends: analysis,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'axis',
            formatter: '{a} <br/>{b} : {c}%'
          },
          title: [
            {
              text: '事件等级数量统计',
              x: '15%',
              y: '85%',
              textAlign: 'center',
              textStyle: {
                color: 'black',
                fontSize: '15'
              }
            },
            {
              text: '事件数量趋势',
              x: '65%',
              y: '85%',
              textAlign: 'center',
              textStyle: {
                color: 'black',
                fontSize: '15'
              }
            }
          ],
          grid: [
            {
              left: '30%',
              top: '10%',
              bottom: '20%',
              width: '65%',
              containLabel: true
            }
          ],
          xAxis: [
            {
              type: 'category',
              data: ['9:00', '12:00', '15:00', '18:00', '21:00', '24:00', '3:00'],
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: '15'
                }
              },
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '事件等级',
              type: 'pie',
              radius: '60%',
              center: ['15%', '45%'],
              data: [
                {value: 335, name: '中危'},
                {value: 310, name: '重大'},
                {value: 234, name: '特别重大'},
                {value: 135, name: '低危'}
              ]
            },
            {
              name: '事件数量',
              type: 'line',
              data: [10, 52, 20, 34, 90, 67, 12]
            }
          ]
        }
      }
    }
  }
</script>
