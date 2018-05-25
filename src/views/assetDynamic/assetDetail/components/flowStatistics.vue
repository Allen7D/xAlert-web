<script type="text/ecmascript-6">
  import assetChart from 'components/assetDynamic/assetChart'

  export default {
    extends: assetChart,
    data() {
      return {
        chart: null,
        option: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: [{
            top: 50,
            left: 50,
            right: '40%',
            height: '35%'
          }, {
            left: 50,
            right: '40%',
            top: '55%',
            height: '35%'
          }],
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLine: {onZero: true},
              data: ['2/1', '2/2', '2/3', '2/4', '2/5', '2/6', '2/7']
            },
            {
              gridIndex: 1,
              type: 'category',
              boundaryGap: false,
              axisLine: {onZero: true},
              data: ['2/1', '2/2', '2/3', '2/4', '2/5', '2/6', '2/7'],
              position: 'top'
            }
          ],
          yAxis: [
            {
              name: '上传流量',
              type: 'value',
              max: 50
            },
            {
              gridIndex: 1,
              name: '下载流量',
              type: 'value',
              inverse: true
            }
          ],
          series: [
            {
              name: '上传流量',
              type: 'line',
              symbolSize: 8,
              data: [10, 30, 22, 45, 15, 16, 33]
            },
            {
              name: '下载流量',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              symbolSize: 8,
              data: [10, 30, 22, 45, 15, 16, 33]
            }
          ]
        }
      }
    }
  }
</script>
