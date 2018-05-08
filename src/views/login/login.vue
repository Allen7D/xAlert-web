<template>
  <div class="bg">
    <div class="login">
      <div class="logo"><img src="./login-logo.png" alt="logo"></div>
      <div class="container">
        <div class="title"><span>xx网络安全监控系统V 1.0</span></div>
        <el-form :model="ruleForm" status-icon ref="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <x-footer></x-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import XFooter from 'components/footer/footer'
  import { mapState } from 'vuex'
  export default {
    components: {
      XFooter
    },
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      var checkPassword = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          username: '',
          pass: ''
        },
        rules: {
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapState(['is-login'])
    },
    methods: {
      submitForm(formName) {
        let postData = 'username=' + this.ruleForm.username + '&password=' + this.ruleForm.pass
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('postData: ' + postData)
              this.$router.push('/')
          } else {
            console.log('error submit!!')
            this.$notify.error({
              title: '错误',
              message: '账号密码错误'
            })
            this.$router.push('/login')
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bg
    top: 0
    left: 0
    width: 100%
    height: 100%
    zoom : 1
    z-index : -10
    background-position:0
    background-size: cover
    background-repeat : no-repeat
    background-image: url("login-bg.jpg")
    overflow: hidden
  .login
    height : 80%
    padding-top: 10%
    width : 400px
    margin : 0 auto
    text-align: center
    .logo
      img
        width: 130px
        height: 130px
        background-color : #fff
        border-radius: 50%

  .container
    width : 362px
    box-sizing : border-box
    border: 1px solid #51d9ff
    background: rgba(6, 6, 123, 0.5)
    border-radius : 10px
    padding: 53px 41px 20px
    margin: 60px auto 0
    .title
      color: #51d9ff
      font-size: 23px
      text-indent : 7px
      font-weight: bold
      margin-bottom : 47px
    .el-form
      margin-left : -95px
      .el-input
        margin-bottom: 10px
      .el-button
        margin-top: 8px
        width: 120px
        height: 50px
        font-size: 20px
        background-color : #51d9ff
        color: #06067b
        font-weight: bold
        letter-spacing: 20px
        text-indent : 10px
        border-radius : 5px
      .el-button:focus,
      .el-button:hover
        color: #fff
        background : #4676ff
        outline : none
  .footer
    position: absolute !important
    width: 100%     !important
    bottom : 29px
    left : 0
    top: 900px
    font-size : 14px
    height: 29px
    text-align : center
</style>
