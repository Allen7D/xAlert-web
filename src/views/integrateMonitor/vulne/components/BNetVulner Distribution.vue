<script type="text/ecmascript-6">
  import Chart from 'components/charts/chart'

  export default {
    extends: Chart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {},
          color: ['#4676FF'],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['行李分拣', '自助', '监控', '业务系统4', '业务系统5', '业务系统6', '业务系统7', '业务系统8', '业务系统9', '业务系统10'],
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#A0B9FF'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#A0B9FF'
                }
              }
            }
          ],
          series: [
            {
              name: '业务网络漏洞分布',
              type: 'bar',
              barWidth: '60%',
              data: [999, 888, 800, 777, 767, 700, 400, 350, 200, 150]
            }
          ]
        }
      }
    }
  }
</script>
