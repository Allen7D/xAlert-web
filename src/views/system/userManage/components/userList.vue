<template>
  <div class="userManage">
    <div class="userTab">
      <table width="100%">
        <thead class="tab-title">
        <tr>
          <th>序号</th>
          <th>帐号</th>
          <th>角色</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="index" style="height: 25px;" class="tab-content">
          <td>{{index+1}}</td>
          <td>{{item.account}}</td>
          <td>{{item.role}}</td>
          <td>{{item.tips}}</td>
          <td>
            <a class="edit" @click="dialogCurpassVisible = true">修改密码</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <button class="save" @click="dialogCreateVisible = true">新建用户</button>
    <!--输入当前密码提示框-->
    <el-dialog :visible.sync="dialogCurpassVisible" center width="30%">
      <el-form :model="curPassform">
        <el-form-item label="请输入当前密码" :label-width="formLabelWidth">
          <el-input v-model="curPassform.curPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogNewpassVisible = true,dialogCurpassVisible = false">确 定</el-button>
        <el-button @click="dialogCurpassVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--修改密码提示框-->
    <el-dialog :visible.sync="dialogNewpassVisible" center width="30%">
      <el-form :model="newPassform" status-icon :rules="rules" ref="newPassform" class="demo-ruleForm">
        <el-form-item label="请输入新密码" prop="pass" :label-width="formLabelWidth">
          <el-input type="password" v-model="newPassform.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请再次输入密码" prop="checkPass" :label-width="formLabelWidth">
          <el-input type="password" v-model="newPassform.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogNewpassVisible = false">确 定</el-button>
        <el-button @click="dialogNewpassVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--新建用户提示框-->
    <el-dialog :visible.sync="dialogCreateVisible" center width="30%">
      <el-form :model="createform" status-icon :rules="rules2" ref="createform" class="demo-ruleForm">
        <el-form-item label="帐号" prop="account" :label-width="formLabelWidth">
          <el-input v-model="createform.account" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
          <el-input type="password" v-model="createform.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" :label-width="formLabelWidth">
          <el-input type="password" v-model="createform.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role" :label-width="formLabelWidth">
          <el-select v-model="createform.role" placeholder="管理员">
            <el-option label="管理员" value="manager"></el-option>
            <el-option label="操作员" value="operator"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogCreateVisible = false">确 定</el-button>
        <el-button @click="dialogCreateVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码(8-15位字符，必须包括大小写字母、数字和特殊字符组合)'))
        } else {
          if (this.newPassform.checkPass !== '') {
            this.$refs.newPassform.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.newPassform.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('帐号不能为空'))
        }
      }
      var ValidatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码(8-15位字符，必须包括大小写字母、数字和特殊字符组合)'))
        } else {
          if (this.createform.checkPass !== '') {
            this.$refs.createform.validateField('checkPass')
          }
          callback()
        }
      }
      var ValidatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.createform.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        list: [
          {account: 'Admin@lanxum.com', role: '操作员', tips: ''}
        ],
        newUser: {
          account: '', role: '', tips: ''
        },
        dialogCurpassVisible: false,
        dialogNewpassVisible: false,
        dialogCreateVisible: false,
        curPassform: {
          curPass: ''
        },
        createform: {
          account: '',
          pass: '',
          checkPass: '',
          role: ''
        },
        formLabelWidth: '120px',
        newPassform: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        rules2: {
          pass: [
            { validator: ValidatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: ValidatePass2, trigger: 'blur' }
          ],
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .userTab {
    margin 10px 13px
    color #000
    font-size 15px
    // height 200px
  }
  .save {
    width 100px
    background-color #4676ff
    color #fff
    font-size 15px
    border none
    border-radius 5px
    letter-spacing 5px
    position absolute
    bottom 25px
    margin-left 45%
  }
  .tab-title {
    height 23px
    line-height 23px
    background-color #4676ff
    color #fff
  }
  .tab-content {
    height 25px
    line-height 25px
    text-align center
  }
  .edit {
    color #4676ff
    padding-right 10px
  }
  tbody tr:nth-child(odd){background:#fff;}
  tbody tr:nth-child(even){background:#eee}
</style>
