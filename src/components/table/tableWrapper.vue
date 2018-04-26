<template>
  <div class="item">
    <div class="header">
      <span>{{title}}</span>
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
    height: 350px
    border: 1px solid $color-theme-d
    .header
      padding-left: 16px
      height: 50px
      line-height: 50px
      border-top: 1px solid $color-theme-d
      border-right: 1px solid $color-theme-d
      border-left: 8px solid  $color-theme-d
      border-bottom: 2px solid  $color-theme-d
    .content
      padding: 30px 19px 0
</style>