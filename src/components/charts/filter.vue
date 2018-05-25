<template>
  <div class="filter-wrapper">
    <el-row type="flex" justify="space-between">
      <el-col :span="4"  v-for="(item, index) in timeList" :key="index">
        <div class="filter-button" @click="filterToggle(index)"
             :style="{backgroundColor: item.select ? '#A0B9FF': ''}">
          <span :style="{color: item.select ? '#06067b': '#4676ff'}">{{item.name}}</span>
        </div>
      </el-col>
      <el-col :span="4"><div class="filter">自定义</div></el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  function zeroPadding(num, digit) {
    var zero = ''
    for (var i = 0; i < digit; i++) {
      zero += '0'
    }
    return (zero + num).slice(-digit)
  }
  export default {
    props: {
      timeArr: {
        type: Array,
        default: function () {
          return []
        }
      },
      chart: Object
    },
      data() {
        return {
          timeRange: 1000 * 3600 * 24,
          time: '',
          date: '',
          timeList: this.timeArr
        }
      },
      created() {
        // this.updateTime()
      },
      methods: {
        updateTime() {
          var self = this
          setInterval(function () {
            var ctime = new Date()
            self.date = zeroPadding(ctime.getFullYear(), 4) + '年' + zeroPadding(ctime.getMonth() + 1, 2) + '月' + zeroPadding(ctime.getDate(), 2) + '日'
            self.time = zeroPadding(ctime.getHours(), 2) + ':' + zeroPadding(ctime.getMinutes(), 2) + ':' + zeroPadding(ctime.getSeconds(), 2)
            let time = new Date(ctime.getTime() - self.timeRange).getMonth() + 1
            console.log(time)
            self.selectDataRange(time)
          }, 1000)
        },
        filterToggle(index) {
          this.timeList.forEach((item) => {
            item.select = false
          })
          this.timeList[index].select = true
          this.timeRange = this.timeList[index].time
          this.selectDataRange(this.timeRange)
        },
        selectDataRange(time) {
          this.chart.dispatchAction({
            type: 'dataZoom',
            startValue: '2016-3',
            end: 100
          })
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .filter-wrapper
    .filter-button
      position relative
      top 8px
      width: 32px
      height: 33px
      border-radius: 50%
      border: 1px #A0B9FF solid;
      line-height: 34px
      text-align center
      font-size 12px
      cursor: pointer
    .filter
      font-size 12px
      color #4676ff
      cursor: pointer
</style>
