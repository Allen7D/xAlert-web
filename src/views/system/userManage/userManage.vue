<template>
  <div class="container">
    <div class="userManage-wrapper">
      <system-wrapper title="用户管理" wrapperHeight="350px">
        <userList></userList>
      </system-wrapper>
    </div>
    <div class="passModify-wrapper">
      <currentPass></currentPass>
      <newPass></newPass>
    </div>
    <div class="createUser">
      <userEdit></userEdit>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import systemWrapper from 'components/table/systemWrapper'
  import currentPass from './components/currentPass'
  import newPass from './components/newPass'
  import userList from './components/userList'
  import userEdit from './components/userEdit'
  export default {
    components: {
      systemWrapper,
      currentPass,
      newPass,
      userList,
      userEdit
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
    margin-left 200px
    margin-right 20px
  }
  .passModify-wrapper {
    float right
    margin-right 60px
    position relative
    top -300px
  }
  .createUser {
    margin-top 30px
    margin-left 400px
  }
</style>
