<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   data: ['业务网络1', '业务网络2', '业务网络3', '业务网络4', '业务网络5']
          // },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '70%',
              center: ['50%', '45%'],
              data: [
                {value: 335, name: '类型1'},
                {value: 310, name: '类型2'},
                {value: 234, name: '类型3'},
                {value: 135, name: '类型4'},
                {value: 548, name: '类型5'}
              ],
              label: {
                fontSize: 15
              },
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