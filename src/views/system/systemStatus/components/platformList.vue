<template>
  <ul>
    <li class="item">
      <label>管理平台：</label>
      <select class="select-wrapper">
        <option label="管理平台1" value="platform-one"></option>
        <option label="管理平台2" value="platform-two"></option>
      </select>
      <label class="notice">
        <i class="el-icon-circle-check-outline"></i>
        <span class="normal">正常</span>
      </label>
      <!--<label class="notice">-->
        <!--<i class="el-icon-warning"></i>-->
        <!--<span class="inormal">异常</span>-->
      <!--</label>-->
      <!--<label class="notice">-->
        <!--<i class="el-icon-circle-close-outline"></i>-->
        <!--<span class="offline">离线</span>-->
      <!--</label>-->
    </li>
    <li class="item">
      <label>名称：</label>
      <span>xx管理平台1</span>
    </li>
    <li class="item">
      <label>型号：</label>
      <span>xAlert-xxxx</span>
    </li>
    <li class="item">
      <label>版本：</label>
      <span>V1.1.1</span>
    </li>
    <li class="item">
      <label>系统状态：</label>
      <!--<label class="notice">-->
        <!--<i class="el-icon-circle-check-outline"></i>-->
        <!--<span class="normal">正常</span>-->
      <!--</label>-->
      <!--<label class="notice">-->
        <!--<i class="el-icon-warning"></i>-->
        <!--<span class="inormal">异常</span>-->
      <!--</label>-->
      <label class="notice">
        <i class="el-icon-circle-close-outline"></i>
        <span class="offline">离线</span>
      </label>
    </li>
    <li class="item">
      <label>网络地址：</label>
      <span>xxxxxxxxxxxx地址</span>
    </li>
    <li class="item">
      <label>序列号：</label>
      <span>xxxxxxxxxxxxx</span>
    </li>
    <li class="item">
      <label>投运时间：</label>
      <span>2018年5月21日18：15：30</span>
    </li>
    <li class="item">
      <label>平台时间：</label>
      <span>2018年5月21日18：45：34</span>
    </li>
    <li class="item">
      <label>所在位置：</label>
    </li>
    <li class="item">
      <input placeholder="手动编辑物理地址" class="inputArea">
    </li>
    <li class="item">
      <label>设备描述：</label>
    </li>
    <li class="item">
      <textarea placeholder="手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方" class="inputArea textArea"></textarea>
    </li>
  </ul>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item {
    height 30px
    color #000
    line-height 30px
    font-size 14px
  }
  .select-wrapper {
    height 22px
    width 120px
    background-color #fff
  }
  .inputArea {
    height 22px
    width 95%
    border 1px solid #aaa
    border-radius 2px
    font-size 12px
    padding-left 10px
  }
  .textArea {
    height 50px
  }
  .notice {
    margin-left 15px
  }
  .inormal
  .normal
  .offline {
    display inline-block
    width 40px
    height 18px
    line-height 18px
    text-align: center
    background-color #67c23a
    color #fff
    // border 1px solid #f00
    font-weight bold
    font-size 14px
  }
  .inormal {
    background-color #f56c6c
  }
  .offline {
    background-color #909399
  }
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .notice i.el-icon-circle-check-outline {
    font-weight bolder
    color: #67c23a;
    font-size 17px
    position relative
    top 2px
  }
  .notice i.el-icon-circle-close-outline {
    font-weight bolder
    color: #909399;
    font-size 17px
    position relative
    top 2px
  }
</style>
