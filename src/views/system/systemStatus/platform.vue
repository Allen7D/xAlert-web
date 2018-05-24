<template>
  <div>
    <div class="text-wrapper">
      <platformList></platformList>
    </div>
    <div class="info-wrapper">
      <systemWrapper title="系统资源">
        <sysResource></sysResource>
      </systemWrapper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import platformList from './components/platformList'
  import systemWrapper from 'components/table/systemWrapper'
  import sysResource from './components/sysResource'
  export default {
    components: {
      systemWrapper,
      sysResource,
      platformList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .text-wrapper {
    width 800px
    height 420px
    background-color #eee
    margin-top 20px
    margin-left auto
    margin-right auto
    padding 20px
  }
  .info-wrapper {
    margin 0 auto
    width 840px
    // border 1px solid #f00
  }
</style>
