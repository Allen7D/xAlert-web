<template>
  <div class="item">
    <div class="title">
      <i class="icon-log"></i><span>{{title}}</span>
    </div>
    <div class="content">
      <span>数量:</span><span class="item-data">{{dataIndex}}</span>
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
      iconName: {
        type: String
      }
    },
    data() {
      return {
        dataIndex: 0
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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