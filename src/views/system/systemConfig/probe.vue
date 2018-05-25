<template>
  <div>
    <div class="left">
      <collector title="采集器"></collector>
    </div>
    <div class="right">
      <basic-info title="基本信息"></basic-info>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import collector from './components/collector'
  import basicInfo from './components/basicInfo'
  export default {
    components: {
      collector,
      basicInfo
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .left {
    width 413px
    margin-left: 245px
    margin-top: 25px
    float left
  }
  .right {
    width 536px
    margin-top 25px
    margin-left 13px
    float left
  }
</style>
