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
            <a href="javascript:;" class="edit">修改密码</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--<div class="form-group">-->
      <!--<input type="text" placeholder="hhhh" class="name" v-model="newContact.name">-->
      <!--<input type="text" placeholder="13888888888" class="tel" v-model="newContact.telphone">-->
      <!--<input type="email" placeholder="1388888888@163.com" class="email" v-model="newContact.email">-->
      <!--<input type="text" placeholder="xxxx" class="post" v-model="newContact.post">-->
      <!--<button class="confirmBtn" v-on:click="createContact">确认</button>-->
      <!--<button class="deleteBtn" v-on:click="deleteInput">取消</button>-->
    <!--</div>-->
    <button class="save">新建用户</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {account: 'Admin@lanxum.com', role: '操作员', tips: ''}
        ],
        newUser: {
          account: '', role: '', tips: ''
        }
      }
    },
    methods: {
      createContact() {
        this.list.push(this.newContact)
        this.newContact = {
          name: '', telphone: '', email: '', post: ''
        }
      },
      deleteContact(index) {
        this.list.splice(index, 1)
      },
      deleteInput() {
        this.newContact = {
          name: '', telphone: '', email: '', post: ''
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
