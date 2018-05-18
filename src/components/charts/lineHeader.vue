<template>
  <div class="lineheader">
    <el-row>
      <el-col :span="6">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="24">
            <div v-for="(item,index) in legendList" :key="index"
                 @mouseout="donwplay(item)" @mouseover="highlight(item)">
              <el-row>
                <el-col :span="6">
                  <div class="legend" @click="legendToggle(item)" :style="{backgroundColor: item.select ? item.color: '#A0B9FF'}">
                  <div class="round" :style="{borderColor: item.select ? item.color: '#A0B9FF'}"></div>
                </div>
                </el-col>
                <el-col :span="16">
                  <div class="text" @click="legendToggle(item)" :style="{color: item.select ? item.color: '#A0B9FF'}">{{item.name}}</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14" :offset="4">
          <el-row type="flex" justify="space-between">
            <el-col :span="4"  v-for="(item, index) in timeList" :key="index">
              <div class="filter-button" @click="filterToggle(index)"
                   :style="{backgroundColor: item.select ? '#A0B9FF': ''}">
                <span :style="{color: item.select ? '#06067b': '#4676ff'}">{{item.name}}</span>
              </div>
            </el-col>
            <el-col :span="4"><div class="filter">自定义</div></el-col>
          </el-row>
      </el-col>
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
      params: Array,
      chart: Object
    },
    data() {
      return {
        timeRange: 1000 * 3600 * 24 * 7,
        legendList: [],
        time: '',
        date: '',
        timeList: [
          {
          select: true,
          name: '24h',
          time: 1000 * 3600 * 24
          },
          {
            select: false,
            name: '7天',
            time: 1000 * 3600 * 24 * 7
          },
          {
            select: false,
            name: '30天',
            time: 1000 * 3600 * 24 * 30
          },
          {
            select: false,
            name: '90天',
            time: 1000 * 3600 * 24 * 90
          },
          {
            select: false,
            name: '半年',
            time: 1000 * 3600 * 24 * 180
          }]
      }
    },
    created() {
     // this.updateTime()
    },
    mounted() {
      this.legendList = this.params
    },
    methods: {
      updateTime() {
        var self = this
        setInterval(function () {
          var ctime = new Date()
          self.date = zeroPadding(ctime.getFullYear(), 4) + '年' + zeroPadding(ctime.getMonth() + 1, 2) + '月' + zeroPadding(ctime.getDate(), 2) + '日'
          self.time = zeroPadding(ctime.getHours(), 2) + ':' + zeroPadding(ctime.getMinutes(), 2) + ':' + zeroPadding(ctime.getSeconds(), 2)
          let time = new Date(ctime.getTime() - self.timeRange).getMonth() + 1
          self.selectDataRange(time)
        }, 1000)
      },
      filterToggle(index) {
        this.timeList.forEach((item) => {
          item.select = false
        })
        this.timeList[index].select = true
        this.timeRange = this.timeList[index].time
      },
      selectDataRange(time) {
        this.chart.dispatchAction({
          type: 'dataZoom',
          start: time,
          end: 100
        })
      },
      legendToggle(item) {
        item.select = !item.select
        this.chart.dispatchAction({
          type: 'legendToggleSelect',
          name: item.name
        })
      },
      highlight(item) {
        this.chart.dispatchAction({
          type: 'highlight',
          seriesName: item.name
        })
      },
      donwplay(item) {
        this.chart.dispatchAction({
          type: 'downplay',
          seriesName: item.name
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .lineheader
    width 673px
    .legend
      position relative
      top 10px
      width: 40px
      height: 1px
      cursor: pointer
      .round
        position relative
        bottom 5px
        left 14px
        width 10px
        height: 10px
        background-color white
        border-radius 50%
        border: 1px solid
    .text
      font-size: 12px
      line-height 25px
      cursor: pointer
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
