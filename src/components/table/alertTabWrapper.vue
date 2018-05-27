<template>
  <div class="item" :style="{height: wrapperHeight}">
    <div class="header">
      <div class="headerBtn">
        <i :class="icon"></i><span>{{title}}</span>
      </div>
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
      icon: {
        type: String,
        default: 'icon-log'
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
    border-radius 6px
    margin-bottom 20px
    width 950px
    margin 30px auto
    .header
      padding-left: 20px
      height: 45px
      line-height: 45px
      background-color #e6e6e6
      border-top-right-radius: 6px
      border-top-left-radius: 6px
  .headerBtn {
    height 35px
    line-height 35px
    float right
    width 120px
    margin 5px 13px
    background-color #4676ff
    color #fff
    border-radius 5px
    text-align center
  }
</style>
