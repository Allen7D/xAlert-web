<template>
    <div class="autoUpdate">
      <div class="line">
        <el-col :span="1">
          <input type="checkbox" value="start">
        </el-col>
        <el-col :span="5">
          <label>启动</label>
        </el-col>
        <el-col :span="6">升级服务器地址</el-col>
        <el-col :span="6">
          <input type="email" placeholder="test@gushenxing.com"/>
        </el-col>
      </div>
      <div class="line">
        <el-col :span="1">
          <input type="checkbox" value="update">
        </el-col>
        <el-col :span="5">
          <label>定时升级</label>
        </el-col>
        <el-col :span="6">周期</el-col>
        <el-col :span="2">
          <select class="select-wrapper">
            <option label="每天" value="everyDay"></option>
            <option label="每个星期" value="everyWeek"></option>
            <option label="每个月" value="everyMon"></option>
          </select>
        </el-col>
        <el-col :span="2" :offset="3">
          <select class="select-wrapper">
            <option label="时间" value="time"></option>
          </select>
        </el-col>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .autoUpdate {
    margin 32px auto
    height 116px
    width 564px
    color #000
    font-size 15px
    padding-top 50px
  }
  .line {
    height 30px
    line-height 30px
    margin-left 30px
  }
  input[type='checkbox'] {
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 1px solid #aaa;
    margin-right 15px
  }
  input[type='email'] {
    width: 210px;
    height: 22px;
    background-color: #fff
    border: 1px solid #aaa;
  }
  .select-wrapper {
    width 100px
    height 22px
    background-color #fff
    border 1px solid #aaa
  }
</style>
