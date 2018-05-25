<template>
  <div class="text-wrapper">
    <ul>
      <li class="item">
        <label>平台名称：</label>
        <span>xx管理平台1</span>
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
        <label>平台时间：</label>
        <span>2018年5月21日18：45：34</span>
      </li>
      <li class="item">
        <label>型号：</label>
        <span>xProbe-xxxx</span>
      </li>
      <li class="item">
        <label>版本：</label>
        <span>V1.0.1</span>
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
      <li class="item">
        <button class="confirm">确定</button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
  .item {
    height 30px
    color #000
    line-height 30px
    font-size 14px
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
  .confirm {
    width 80px
    height 30px
    line-height 30px
    font-size 15px
    color #fff
    background-color #4688dd
    border-radius 2px
    border none
    letter-spacing 2px
    margin-top 80px
    margin-left 45%
  }
</style>
