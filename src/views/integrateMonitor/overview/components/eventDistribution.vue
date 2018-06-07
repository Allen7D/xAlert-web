<script>
  // http://echarts.baidu.com/examples/editor.html?c=pie-simple
  import Chart from 'components/charts/chart'
  export default {
    extends: Chart,
    props: {
      data: Array
    },
    data() {
      return {
        chart: null
      }
    },
    computed: {
      option() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '事件等级分布',
              type: 'pie',
              radius: '75%',
              center: ['50%', '47%'],
              data: this.data,
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