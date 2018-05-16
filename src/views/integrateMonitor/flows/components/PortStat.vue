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
          // grid: {
          //   left: '5%',
          //   width: '50%',
          //   height: '70%',
          //   bottom: '15%'
          // },
          title: [
            {
              text: '服务器',
              top: '85%',
              left: '20%',
              textStyle: {
                color: '#fefefe',
                fontSize: '18'
              }
            },
            {
              text: '客户端',
              top: '85%',
              right: '20%',
              textStyle: {
                color: '#fefefe'
              }
            }
          ],
          series: [
            {
              name: '服务器端口使用情况',
              type: 'pie',
              radius: ['40%', '65%'],
              center: ['25%', '50%'],
              data: [
                {value: 335, name: '250'},
                {value: 310, name: '100'},
                {value: 234, name: '400'},
                {value: 135, name: '100'},
                {value: 1548, name: '150'}
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
              name: '客户端端口使用情况',
              type: 'pie',
              radius: ['40%', '65%'],
              center: ['75%', '50%'],
              data: [
                {value: 335, name: '250'},
                {value: 310, name: '100'},
                {value: 234, name: '400'},
                {value: 135, name: '100'},
                {value: 1548, name: '150'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      }
    }
  }
</script>
