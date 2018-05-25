<template>
  <div class="container">
    <div class="userManage-wrapper">
      <system-wrapper title="用户管理" wrapperHeight="350px">
        <userList></userList>
      </system-wrapper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import systemWrapper from 'components/table/systemWrapper'
  import userList from './components/userList'
  export default {
    components: {
      systemWrapper,
      userList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container {
    background-color #fff
    height 1300px
    padding-top 50px
  }
  .userManage-wrapper {
    width 850px
    margin 20px auto
  }
</style>
