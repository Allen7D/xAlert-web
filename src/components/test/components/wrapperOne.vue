<template>
  <div class="wrapper">
    <header :title="title">
      <el-row>
        <el-col :span="4"><span>{{title}}</span></el-col>
        <el-col :span="8">
          <slot name="legend"></slot>
        </el-col>
        <el-col :span="8">
          <slot name="timePicker"></slot>
        </el-col>
      </el-row>
    </header>
    <main>
        <slot name="lineChart"></slot>
        <slot name="pieChart"></slot>
        <slot name="barChart"></slot>
        <slot name="table"></slot>
    </main>
  </div>
</template>
<script>
  export default {
      props: {
        title: {
          type: String,
          default: '未名'
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .wrapper
    height 330px
    margin-bottom 28px
    position relative
    border 1px solid $color-theme-d
    header
      padding-left 16px
      height 50px
      line-height 50px
      border-top 1px solid $color-theme-d
      border-right 1px solid $color-theme-d
      border-left 8px solid  $color-theme-d
      border-bottom 2px solid  $color-theme-d
</style>
