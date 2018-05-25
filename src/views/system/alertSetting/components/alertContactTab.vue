<template>
  <div class="updateLog">
    <div class="updateTab">
      <table width="100%">
        <thead class="tab-title">
        <tr>
          <th>联系人</th>
          <th>手机</th>
          <th>Email</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="index" style="height: 25px;" class="tab-content">
          <td>{{item.name}}</td>
          <td>{{item.telphone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.post}}</td>
          <td>
            <i class="el-icon-edit"></i><a href="javascript:;" class="edit">编辑</a><i class="el-icon-delete"></i><a class="delete" href="javascript:;" v-on:click="deleteContact(index)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="form-group">
      <input type="text" placeholder="hhhh" class="name" v-model="newContact.name">
      <input type="text" placeholder="13888888888" class="tel" v-model="newContact.telphone">
      <input type="email" placeholder="1388888888@163.com" class="email" v-model="newContact.email">
      <input type="text" placeholder="xxxx" class="post" v-model="newContact.post">
      <button class="confirmBtn" v-on:click="createContact">确认</button>
      <button class="deleteBtn" v-on:click="deleteInput">取消</button>
    </div>
      <button class="confirm">保存</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {name: '刘德华', telphone: '13888888888', email: '13888888888@163.com', post: '公司总经理'},
          {name: '张德华', telphone: '13888888888', email: '13888888888@163.com', post: '公司总经理'},
          {name: '李德华', telphone: '13888888888', email: '13888888888@163.com', post: '公司总经理'},
          {name: '宋德华', telphone: '13888888888', email: '13888888888@163.com', post: '公司总经理'}
        ],
        newContact: {
          name: '', telphone: '', email: '', post: ''
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
  .updateTab {
    margin 10px 13px
    color #000
    font-size 15px
    // height 200px
  }
  .confirm {
    width 100px
    background-color #4676ff
    color #fff
    font-size 15px
    border none
    border-radius 5px
    letter-spacing 5px
    margin-top 40px
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
  .delete {
    color #f56c6c
  }
  tbody tr:nth-child(odd){background:#fff;}
  tbody tr:nth-child(even){background:#eee}
  .name {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 90px
    margin-left 20px
  }
  .tel {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 120px
    margin-left 15px
  }
  .email {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 210px
    margin-left 80px
  }
  .post {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 120px
    margin-left 50px
  }
  button {
    border-radius 6px
    border none
    width 50px
    color #fff
  }
  .confirmBtn {
    background-color #4676ff
    margin-left 60px
  }
  .deleteBtn {
    background-color #777
  }
</style>
