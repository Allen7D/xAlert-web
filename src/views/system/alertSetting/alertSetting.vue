<template>
  <alertTabWrapper title="新增告警项">
    <alertList></alertList>
  </alertTabWrapper>
</template>

<script type="text/ecmascript-6">
  import alertTabWrapper from 'components/table/alertTabWrapper'
  import alertList from './components/alertList'
  export default {
    components: {
      alertTabWrapper,
      alertList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
