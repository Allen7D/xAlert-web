<template>
  <div class="item">
    <div class="title">
      <i :class="icon"></i><span>{{title}}</span>
    </div>
    <div class="content">
      <el-row type="flex" justify="space-between">
        <el-col v-for="(item, index) of indicators" :key="index" :span="8">
          <span v-if="item.key">{{item.key + ':'}}</span>
          <span class="index">{{item.value}}</span>
        </el-col>
      </el-row>
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
      indicators: {
        type: Array
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
      height: 100px
      font-size: 20px
      font-weight: 700
      padding-left: 27px
      line-height: 100px
      border: 1px solid $color-theme-d
      color: $color-theme
      .index
        color: $color-theme-d
        font-size: 48px
        margin-left: 10px
</style>
