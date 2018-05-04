<template>
  <div class="header">
    <div class="title">{{title}}</div>
    <div class="legend-wrappers">
      <div class="legends" v-for="(item,index) in legendList" :key="index"
           @mouseout="donwplay(item)" @mouseover="highlight(item)"
      >
        <div class="legend" @click="legendToggle(item)" :style="{backgroundColor: item.select ? item.color: '#A0B9FF'}"></div>
        <div class="text" @click="legendToggle(item)" :style="{color: item.select ? item.color: '#A0B9FF'}">{{item.name}}</div>
      </div>
    </div>
    <div>
      <el-button @click="changetime(1)">one</el-button>
      <el-button @click="changetime(30)">two</el-button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      params: Array,
      chart: Object,
      title: String
    },
    data() {
      return {
        legendList: [],
        time: 5,
        date: 1
      }
    },
    mounted() {
      this.legendList = this.params
      // this.date = this.params[0].le
    },
    // watch: {
    //   date: function (newdate, olddate) {
    //     this.chart.dispatchAction({
    //       type: 'dataZoom',
    //       start: (1 - (this.time * 60 / newdate)) * 100,
    //       end: 100
    //     })
    //   }
    // },
    methods: {
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
        this.chart.dispatchAction({
          type: 'highlight',
          name: item.name
        })
      },
      donwplay(item) {
        this.chart.dispatchAction({
          type: 'downplay',
          seriesName: item.name
        })
        this.chart.dispatchAction({
          type: 'downplay',
          name: item.name
        })
      },
      changetime(data) {
        this.time = data
        this.datazoom()
      },
      datazoom() {
        // var now = +new Date()
         // let date = new Date(now - data * 1000 * 60)
         // let time = [date.getHours(), date.getMinutes()].join(':')
        let i = (1 - (this.time * 60 / this.params[0].le)) * 100
        console.log('data' + i)
          this.chart.dispatchAction({
            type: 'dataZoom',
            start: i,
            end: 100
          })
        }
      }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .header
    display: flex
    padding-left: 16px
    height: 50px
    line-height: 50px
    border-top: 1px solid $color-theme-d
    border-right: 1px solid $color-theme-d
    border-left: 8px solid  $color-theme-d
    border-bottom: 2px solid  $color-theme-d
    .title
      flex 0 0 100px
    .legend-wrappers
      flex: 0 0 60%
      display: flex
      flex-wrap: wrap
      align-content: space-around
      align-items: center
      .legends
        height 30%
        display: flex
        align-items: center
        margin-right 5px
        .legend
          border-radius: 1px
          width: 24px
          height: 7px
          cursor: pointer
          align-items: center
        .text
          margin-left 2px
          font-size: 12px
          line-height 25px
          cursor: pointer
          align-items: center
</style>
