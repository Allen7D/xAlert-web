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
      <el-row>
        <el-col span="4"  v-for="(item, index) in timeList" :key="index">
          <div class="filter-button" @click="filterToggle(index)"
               :style="{backgroundColor: item.select ? '#A0B9FF': ''}">
            <span :style="{color: item.select ? '#06067b': '#4676ff'}">{{item.time}}</span>
          </div>
        </el-col>
        <el-col span="4"><div class="filter">自定义</div></el-col>
      </el-row>
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
        legendList: [],
        timeList: [
          {
          select: true,
          time: '24h'},
          {
            select: false,
            time: '7天'
          },
          {
            select: false,
            time: '30天'
          },
          {
            select: false,
            time: '90天'
          },
          {
            select: false,
            time: '半年'
          }]
      }
    },
    mounted() {
      this.legendList = this.params
    },
    methods: {
      filterToggle(index) {
        this.timeList.forEach((item) => {
          item.select = false
        })
        this.timeList[index].select = true
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
    display: flex
    width 673px
    justify-content: space-between
    .legend-wrapper
      flex: 0 0 10%
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
      flex 0 0 50%
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
        background green
        position relative
        width 50px
        height 50px
        right 20px
</style>
