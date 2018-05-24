<template>
    <div class="ploy-wrapper">
      <div class="closeBtn"><i class="el-icon-circle-close-outline"></i></div>
      <div class="title">策略配置</div>
      <form>
        <ul>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>名称</label>
              </el-col>
              <el-col :span="6">
                <input type="text" />
              </el-col>
            </el-col>
          </li>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>级别</label>
              </el-col>
              <el-col :span="6">
                <select>
                  <option>高</option>
                  <option>中</option>
                  <option>低</option>
                </select>
              </el-col>
            </el-col>
          </li>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>源区域</label>
              </el-col>
              <el-col :span="6">
                <select>
                  <option>业务网络1</option>
                  <option>业务网络2</option>
                  <option>业务网络3</option>
                </select>
              </el-col>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>目标区域</label>
              </el-col>
              <el-col :span="6">
                <select>
                  <option>业务网络1</option>
                  <option>业务网络2</option>
                  <option>业务网络3</option>
                </select>
              </el-col>
            </el-col>
          </li>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>源IP</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>目的IP</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
          </li>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>源端口</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>目标端口</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
          </li>
          <li>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>传输协议</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
            <el-col :xs="24" :sm="12" :lg="12">
              <el-col :span="6" :offset="2">
                <label>应用协议</label>
              </el-col>
              <el-col :span="6">
                <el-col :span="16">
                  <input type="checkbox"/>不是
                </el-col>
                <el-col :span="8">
                  <select class="short">
                    <option>ANY</option>
                    <option>ANY</option>
                    <option>ANY</option>
                  </select>
                </el-col>
              </el-col>
            </el-col>
          </li>
        </ul>
        <el-col :span="4" :offset="9"><button class="confirm">确定</button></el-col><el-col :span="4"><button class="delete">取消</button></el-col>
      </form>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ploy-wrapper {
    width 600px
    height 350px
    border 2px solid #4676ff
    margin 50px auto
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
    margin 30px auto
  }
  input[type='text']{
    border 1px solid #aaa
    width 170px
  }
  select {
    background-color #fff
    width 170px
    height 22px
  }
  .short {
    width 120px
  }
  ul li {
    height 30px
    line-height 30px
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
    margin-top 30px
    border none
  }
  .confirm {
    background-color #4676ff
  }
  .delete {
    background-color #777
  }
</style>
