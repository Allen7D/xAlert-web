<template>
  <div class="probe" :style="{height: Height}">
    <div class="header">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <ul>
        <li class="item">
          <label>名称：</label>
          <input placeholder="手动编辑物理地址" class="inputArea">
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
          <label>网络地址：</label>
          <span>xxxxxxxxxxxx(IPV6)</span>
        </li>
        <li class="item">
          <label>序列号：</label>
          <span>xxxxxxxxxxxxx</span>
        </li>
        <li class="item">
          <label>设备时间：</label>
          <span>2018年5月21日18：15：30</span>
        </li>
        <li class="item">
          <label>平台时间：</label>
          <span>2018年5月21日18：45：34</span>
          <button class="timeSync">时间同步</button>
        </li>
        <li class="item">
          <label>所在位置：</label>
          <input placeholder="手动编辑物理地址" class="inputArea">
        </li>
        <li class="item">
          <label>设备描述：</label>
        </li>
        <textarea placeholder="手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方手动编辑其他需要备注说明的地方" class="textArea"></textarea>
        <li class="item">
          <button class="confirm">确定</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '未名'
      },
      Height: {
        type: String,
        default: '401px'
      }
    },
    data() {
      return {
        list: [
          {id: '1', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '2', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '3', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '4', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '5', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '6', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '7', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'},
          {id: '8', add: 'xxxxxxxxxxx', name: 'xxxxxxxxxxxxxx'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .probe
    background-color #eee
    .header
      padding-left: 16px
      height: 30px
      line-height: 30px
      background-color #4676ff
      color #fff
  .content {
    color #000
    padding 15px
  }
  .item {
    height 28px
    color #000
    line-height 28px
    font-size 14px
  }
  .select-wrapper {
    height 22px
    width 120px
    background-color #fff
  }
  .inputArea {
    height 22px
    width 300px
    border 1px solid #aaa
    font-size 12px
  }
  .textArea {
    border 1px solid #aaa
    font-size 12px
    height 50px
    width 511px
    line-height 25px
  }
  .timeSync {
    background-color #4676ff
    color #fff
    border none
    border-radius 5px
    font-size 12px
    height 22px
    margin-left 60px
  }
  .confirm {
    width 70px
    background-color #4676ff
    color #fff
    border none
    border-radius 5px
    font-size 14px
    height 24px
    letter-spacing 5px
    margin-left 45%
    margin-top 10px
  }
</style>
