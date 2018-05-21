<template>
  <div class="legend-wrappers">
    <div class="legends" :span="24" v-for="(item,index) in legendList" :key="index"
                @mouseout="donwplay(item)" @mouseover="highlight(item)">
          <div class="legend" @click="legendToggle(item)" :style="{backgroundColor: item.select ? item.color: '#A0B9FF'}"></div>
          <div class="text" @click="legendToggle(item)" :style="{color: item.select ? item.color: '#A0B9FF'}">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
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
  .legend-wrappers
    height 50px
    display flex
    flex-direction: column
    flex-wrap wrap
    .legends
      display flex
      align-items center
      height: 25px
      .legend
        border-radius: 1px
        width: 24px
        height: 7px
        cursor: pointer
      .text
        font-size: 12px
        line-height 25px
        margin-left 2px
        cursor: pointer
</style>
