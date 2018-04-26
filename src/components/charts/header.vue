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
    <div class="select">
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
        legendList: []
      }
    },
    mounted() {
      this.legendList = this.params
    },
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
      flex 0 1 100px
    .legend-wrappers
      flex: 1 1 200px
      display: flex
      flex-direction column
      flex-wrap: wrap
      .legends
        height: 25px
        display: flex
        .legend
          margin-top 7px
          border-radius: 1px
          width: 24px
          height: 7px
          cursor: pointer
        .text
          margin-left 5px
          font-size: 12px
          line-height 25px
          cursor: pointer
    .select
      flex: 0 1 200px
      margin-right: 47px;
</style>
