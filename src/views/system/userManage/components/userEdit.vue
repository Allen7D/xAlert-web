<template>
    <div class="item">
      <div class="closeBtn"><i class="el-icon-circle-close-outline"></i></div>
      <div class="title">用户编辑</div>
      <form>
        <ul>
          <li><el-col :span="4" :offset="1"><label>帐号</label></el-col><el-col :span="6"><input type="text"/></el-col><el-col :span="10" :offset="3"><span class="tips">(1-32位英文字母或数字组合)</span></el-col></li>
          <li><el-col :span="4" :offset="1"><label>密码</label></el-col><el-col :span="6"><input type="password"/></el-col><el-col :span="10" :offset="3"><span class="tips">(8-15位字符、必须包括大小写字母、数字和特殊字符组合)</span></el-col></li>
          <li><el-col :span="4" :offset="1"><label>确认密码</label></el-col><el-col :span="6"><input type="password"/></el-col></li>
          <li><el-col :span="4" :offset="1"><label>角色</label></el-col><el-col :span="6"><select><option>管理员</option><option>操作员</option></select></el-col></li>
        </ul>
        <el-col :span="4" :offset="8"><button class="confirm">确定</button></el-col><el-col :span="4" :offset="1"><button class="delete">取消</button></el-col>
      </form>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item {
    width 500px
    height 400px
    border 2px solid #4676ff
    border-radius 6px
    color #000
    font-size 15px
  }
  .closeBtn {
    float right
    margin-top 10px
    margin-right 5px
  }
  .title {
    font-size 25px
    height 25px
    width 100px
    line-height 25px
    margin 40px auto
  }
  input{
    border 1px solid #aaa
    width 170px
  }
  select {
    background-color #fff
    width 170px
  }
  ul li {
    height 40px
    line-height 20px
  }
  .tips {
    font-size 13px
    color #666
  }
  button {
    color #fff
    width 70px
    height 25px
    border-radius 5px
    margin-top 70px
    border none
  }
  .confirm {
    background-color #4676ff
  }
  .delete {
    background-color #777
  }
</style>
