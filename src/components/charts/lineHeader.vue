<template>
  <div class="lineheader">
  <div class="legend-wrapper">
    <div class="legends" v-for="(item,index) in legendList" :key="index"
         @mouseout="donwplay(item)" @mouseover="highlight(item)">
      <div class="legend" @click="legendToggle(item)" :style="{backgroundColor: item.select ? item.color: '#A0B9FF'}">
        <div class="round" :style="{borderColor: item.select ? item.color: '#A0B9FF'}"></div>
      </div>
      <div class="text" @click="legendToggle(item)" :style="{color: item.select ? item.color: '#A0B9FF'}">{{item.name}}</div>
    </div>
  </div>
    <div class="filter-wrapper">
      <el-button>24h</el-button>
      <el-button>24h</el-button>
      <el-button>24h</el-button>
      <el-button>24h</el-button>
      <el-button>24h</el-button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      params: Array,
      chart: Object
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
    display: flex
    background-color red
    .legend-wrapper
      display: flex
      flex-wrap: wrap
      flex-direction column
      .legends
        width 100px
        height 25px
        display: flex
        align-items: center
        margin-right 5px
        .legend
          border-radius: 1px
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
            border: 1px solid;
        .text
          margin-left 2px
          font-size: 12px
          line-height 25px
          cursor: pointer
    .filter-wrapper
      width 500px
      position relative
      left 200px
</style>
