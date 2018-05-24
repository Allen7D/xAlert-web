<template>
    <div class="item">
      <div class="closeBtn"><i class="el-icon-circle-close-outline"></i></div>
      <form class="passForm">
        <label>请输入当前密码</label><input type="text"/>
        <div>
          <button class="confirm">确定</button><button class="delete">取消</button>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item {
    border 2px solid #4676ff
    height 150px
    width 320px
    border-radius 6px
    margin 0 auto
    color #000
    font-size 13px
  }
  .closeBtn {
    float right
    margin-top 10px
    margin-right 5px
  }
  .passForm {
    margin-top 60px
    margin-left 30px
  }
  input[type='text'] {
    border 1px solid #aaa
    width 170px
    margin-left 10px
  }
  button {
    color #fff
    width 70px
    height 25px
    border-radius 5px
    margin-top 30px
    border none
  }
  .confirm {
    background-color #4676ff
    margin-left 20%
    margin-right 20px
  }
  .delete {
    background-color #777
  }
</style>
