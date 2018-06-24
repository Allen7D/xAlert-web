<template>
  <div class="wrapper">
    <header :title="title">
      <el-row :gutter="40">
        <el-col :span="6"><span>{{title}}</span></el-col>
        <el-col :span="18"><slot name="legend"></slot></el-col>
      </el-row>
    </header>
    <main>
      <slot name="lineChart"></slot>
      <slot name="barChart"></slot>
      <slot name="pieChart"></slot>
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
<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    height 330px
    width 600px
    border 1px solid #A0B9FF
    header
      height 50px
      line-height 50px
      padding-left 20px
      border-left 6px solid #A0B9FF
      border-right 2px solid #A0B9FF
      border-top 2px solid #A0B9FF
      border-bottom 2px solid #A0B9FF
</style>
