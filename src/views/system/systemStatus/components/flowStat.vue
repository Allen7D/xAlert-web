<script>
  import system from 'components/system/system'
    export default {
      extends: system,
      data() {
        return {
          chart: null,
          option: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                animation: false
              }
            },
            legend: {
              data: ['上传流量', '下载流量'],
              show: false
            },
            axisPointer: {
              link: {xAxisIndex: 'all'}
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                data: ['2/1', '3/1', '4/1', '5/1', '6/1', '7/1', '8/1']
              },
              {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {onZero: true},
                data: ['2/1', '3/1', '4/1', '5/1', '6/1', '7/1', '8/1'],
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
            grid: [{
              left: 50,
              right: 50,
              height: '35%'
            }, {
              left: 50,
              right: 50,
              top: '55%',
              height: '35%'
            }],
            series: [
              {
                name: '上传流量',
                type: 'line',
                symbolSize: 2,
                hoverAnimation: false,
                data: [
                  2.34, 23.4, 12.8, 45.2, 34.7, 13.77, 36.2
                ]
              },
              {
                name: '下载流量',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 2,
                hoverAnimation: false,
                data: [
                  2.34, 23.4, 12.8, 45.2, 34.7, 13.77, 36.2
                ]
              }
            ]
          }
        }
      }
    }
</script>
