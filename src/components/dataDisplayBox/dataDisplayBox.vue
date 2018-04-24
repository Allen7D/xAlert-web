<template>
  <div class="item" >
    <div class="title">
      <i :class="iconClass"></i>
      <span>{{dataName}}</span>
    </div>
    <div class="content">
      <div class="number">
        <span>数量:</span>
        <span class="item-data">{{handleData}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    // import { handleDataBox } from '@/api/article'
    export default {
        name: 'data-display-box',
        props: {
          iconClass: String,
          dataName: String,
          handleData: 0
        }
        // created() {
        //   this.getList()
        // },
        // methods: {
        //   getList() {
        //     handleDataBox(handleData)
        //   }
        // }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    flex: 1
    align-items: space-around
    margin-right: 90px
    position: relative
    .title
      position: absolute
      top: -13px
      left: 27px
      width: 130px
      height: 26px
      beveled-corners($color-theme, 5px)
      color: $color-theme-r
      font-size: 16px
      text-align: center
      line-height: 26px
    .content
      font-size: 20px
      font-weight: 700
      padding-left: 27px
      line-height: 100px
      border: 1px solid $color-theme-d
      width: 314px
      height: 100px
      color: $color-theme
      .item-data
        color: $color-theme-d
        font-size: 28px
</style>
