<template>
  <div class="item">
    <div class="title">
      <i :class="icon"></i><span>{{title}}</span>
    </div>
    <div class="content">
      <span class="index">{{data || 0}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '未名'
      },
      icon: {
        type: String,
        default: 'icon-log'
      },
      data: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    margin-bottom: 28px
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
      font-size: 40px
      font-weight: bold
      text-align center
      line-height: 100px
      border: 1px solid $color-theme-d
      color: $color-theme-d
      max-width: 314px
      height: 100px
      .index {
        font-weight bolder
      }
</style>
