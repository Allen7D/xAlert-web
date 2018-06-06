<template>
  <div class="item">
    <div class="title">
      <i :class="icon"></i><span>{{title}}</span>
    </div>
    <div class="content">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :lg="4" :push="1" :data="itemArray" v-for="item in itemArray" :key="item"><span class="item-title">{{item.title}}</span><span class="item-data">{{item.data}}</span></el-col>
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
      itemArray: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    margin-top 28px
    margin-bottom: 28px
    position: relative
    .title
      position: absolute
      top: -13px
      left: 27px
      width: 130px
      height: 28px
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
      height: 100px
      color: $color-theme
  .item-title{
    padding-right 10px
  }
  .item-data {
    color: $color-theme-d
    font-size: 30px
    font-weight bolder
  }
</style>
