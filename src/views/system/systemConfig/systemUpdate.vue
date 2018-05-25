<template>
  <div class="sysUpdate-wrapper">
    <systemWrapper title="手动升级" wrapperHeight="225px">
      <manuUpdate></manuUpdate>
    </systemWrapper>
    <systemWrapper title="自动升级" wrapperHeight="250px">
      <autoUpdate></autoUpdate>
    </systemWrapper>
    <systemWrapper title="升级记录" wrapperHeight="350px" tableHeight="200px">
      <updateLog></updateLog>
    </systemWrapper>
  </div>
</template>

<script type="text/ecmascript-6">
  import manuUpdate from './components/manuUpdate'
  import autoUpdate from './components/autoUpdate'
  import updateLog from './components/updateLog'
  import systemWrapper from 'components/table/systemWrapper'
  export default {
    components: {
      manuUpdate,
      autoUpdate,
      updateLog,
      systemWrapper
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sysUpdate-wrapper {
    margin 20px auto
    width 900px
  }
</style>
