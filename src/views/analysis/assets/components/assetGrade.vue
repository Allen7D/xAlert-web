<template>
  <div class="item">
    <el-row>
      <el-col :span="4"><span class="title" >{{title}}</span></el-col>
      <el-col v-for="(item, index) of itemArray" :key="index" :span="4">
        <span class="item-title" v-if="item.key">{{item.key}}</span>
        <span class="item-data">{{item.value}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      itemArray: {
        type: Array
      },
      title: {
        type: String,
        default: '未名'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item {
    height: 100px
    margin 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #f2f2f2
    border-radius 10px
    overflow hidden
    line-height 100px
    text-align center
  }
  .title {
    color: #333333
    font-size 20px
    font-weight: bold
  }
  .item-title {
    color: #808080
    font-size 15px
    font-weight: bold
  }
  .item-data {
    color: #00a0e9
    font-weight: bolder
    font-size 30px
    padding 0 10px
  }
</style>
