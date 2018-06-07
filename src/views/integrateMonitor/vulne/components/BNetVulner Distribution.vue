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
              data: ['gushenxing-eth0', 'master-eth0', 'airport-eth0', 'lot-eth0', 'medical-eth0', 'cnc-eth0'],
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
              data: [5, 1, 1, 3, 2, 1]
            }
          ]
        }
      }
    }
  }
</script>
