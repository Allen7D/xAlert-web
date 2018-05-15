<template>
  <div class="item">
    <el-row>
      <el-col :span="4" :data="itemArray" v-for="item in itemArray" :key="item"><span class="item-title">{{item.title}}</span><span class="item-data">{{item.data}}</span></el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import { debounce } from '@/utils'
  export default {
    props: {
      itemArray: {
        type: Array
      }
    },
    computed: {
      itemHeight() {
        return {height: `${this.height}px`}
      },
      chartHeight() {
        return {height: `${this.height - 50}px`}
      }
    },
    mounted() {
      this.initChart()
      // 监听窗口的变化
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 50)
      window.addEventListener('resize', this.__resizeHanlder)
      // 监听侧边栏的变化
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      const sidebarElm = document.getElementsByClassName('sidebar')[0]
      sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
      this.chart.dispose()
      this.chart = null
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    height: 100px
    margin 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #f2f2f2
    border-radius 10px
    overflow hidden
    line-height 100px
    text-align center
  .item-title {
    color: #333333
    font-size 20px
    font-weight: bold
  }
  .item-data {
    color: #00a0e9
    font-weight: bolder
    font-size 30px
    padding 0 10px
  }
</style>
