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

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    height 330px
    position relative
    border 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
    margin-bottom 28px
    header
      padding-left 16px
      height 50px
      line-height 50px
      background-color #e6e6e6
      border-top-left-radius 10px
      border-top-right-radius 10px
      span
        flex 0 0 300px
        color #333333
        font-size 21px
        font-weight bold
</style>
