<template>
  <div class="item" :style="{height: wrapperHeight}">
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
        default: '250px'
      },
      wrapperHeight: {
        type: String,
        default: '320px'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-bottom-right-radius: 6px
    border-bottom-left-radius: 6px
    margin-bottom 20px
    .header
      padding-left: 20px
      height: 45px
      line-height: 45px
      background-color #e6e6e6
    .title {
      color: #333333
      font-size 18px
      font-weight: bold
    }
</style>
