<template>
  <el-table
    :data="dataList"
    style="width: 50%">
    <el-table-column
      :prop=name
      :label=title
      width="250">
    </el-table-column>
    <el-table-column
      prop="flow"
      label="流量"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: {
      dataList: Array,
      title: {
        type: String,
        default: '应用协议'
      },
      name: {
        type: String,
        default: 'protocol'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .col
    border-bottom 1px black solid
    height 10px
    line-height 50px
    text-align center
    font-size 12px
    .head
      width 120px
</style>
