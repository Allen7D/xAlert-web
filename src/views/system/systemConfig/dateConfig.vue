<template>
  <div class="timeConfig-wrapper">
    <systemWrapper title="校时" wrapperHeight="400px">
      <prooTime></prooTime>
    </systemWrapper>
  </div>
</template>

<script type="text/ecmascript-6">
  import systemWrapper from 'components/table/systemWrapper'
  import prooTime from './components/prooTime'
  export default {
    components: {
      systemWrapper,
      prooTime
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .timeConfig-wrapper {
    // border 1px solid #6e6e6e
    height 800px
    margin 20px auto
    width 900px
  }
</style>
