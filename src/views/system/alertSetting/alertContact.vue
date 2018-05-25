<template>
  <alertTabWrapper title="添加联系人">
    <alertContactTab></alertContactTab>
  </alertTabWrapper>
</template>

<script type="text/ecmascript-6">
  import alertTabWrapper from 'components/table/alertTabWrapper'
  import alertContactTab from './components/alertContactTab'
  export default {
    components: {
      alertTabWrapper,
      alertContactTab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
