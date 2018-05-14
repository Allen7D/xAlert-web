<template>
  <div class="item">
    <div class="header">
      <span class="title">{{title}}</span>
    </div>
    <div class="content" :style="{height: tableHeight}">
      <slot></slot>
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
      tableHeight: {
        type: String,
        default: '300px'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    position: relative
    height: 480px
    border: 1px solid #e6e6e6
    margin 20px
    background-color #fff
    border-radius 10px
    .header
      padding-left: 20px
      height: 62px
      line-height: 62px
      background-color #e6e6e6
      border-top-left-radius: 10px
      border-top-right-radius: 10px
    .title {
      color: #333333
      font-size 20px
      font-weight: bold
    }
    .content
      padding: 30px 19px 0
</style>
