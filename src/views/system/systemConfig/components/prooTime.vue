<template>
  <div class="prooTime">
    <div class="timeSync">
      <dl class="info">
        <dt>
          <el-col :span="4">服务器时间：</el-col><span>2018/05/14 13:14:37</span>
        </dt>
        <dd>
          <button class="timeSyncBtn">一键时间同步</button>
        </dd>
        <dt>
          <el-col :span="4">平台时间：</el-col><span>2018/05/14 14:14:19</span>
        </dt>
      </dl>
    </div>
    <ul class="info">
      <li class="timeServer">
        <label>时钟服务器</label>
        <input placeholder="192.168.2.1" class="inputArea">
      </li>
      <li class="checkLabel">
        <input type="checkbox"/><label>开启后自动校准一次</label>
      </li>
      <li>
        <input type="checkbox"/><label>同步间隔</label>
        <select class="select-wrapper">
          <option label="1小时" value="oneHour"></option>
          <option label="2小时" value="twoHour"></option>
          <option label="3小时" value="threeHour"></option>
        </select>
      </li>
      <li>
        <button class="confirm">确定</button>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .prooTime {
    color #000
    font-size 15px
  }
    .timeSync {
      width 100%
      height 141px
      background-color #f7f7f7
    }
    .info {
      padding-top 39px
      padding-left 100px
    }
    .info
       li {
         height 25px
         line-height 25px
       }
  .timeServer {
    margin-bottom 30px
  }
  .inputArea {
    height 22px
    width 150px
    border 1px solid #aaa
    font-size 12px
    padding-left 10px
  }
  .select-wrapper {
    height 22px
    width 160px
    background-color #fff
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
      margin-top 20px
  }
  .timeSyncBtn {
    width 100px
    background-color #4676ff
    color #fff
    border none
    border-radius 5px
    font-size 12px
    height 20px
    margin-left 350px
  }
</style>
