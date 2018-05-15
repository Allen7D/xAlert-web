<template>
  <div class="item">
    <div class="header">
      <span>{{title}}</span>
    </div>
    <slot name="chart"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '未名'
      },
      chart: Object,
      params: Array
    },
    methods: {
      receive(data) {
        console.log('hehe', this.params)
        this.params = data.params
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .item
    height: 330px
    margin-bottom: 28px
    position: relative
    border: 1px solid $color-theme-d
    .header
      padding-left: 16px
      height: 50px
      line-height: 50px
      border-top: 1px solid $color-theme-d
      border-right: 1px solid $color-theme-d
      border-left: 8px solid  $color-theme-d
      border-bottom: 2px solid  $color-theme-d
</style>