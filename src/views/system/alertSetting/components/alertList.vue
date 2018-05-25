<template>
  <div class="updateLog">
    <div class="updateTab">
      <table width="100%">
        <thead class="tab-title">
        <tr>
          <th>告警方式</th>
          <th>联系人</th>
          <th>通知方式</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="index" style="height: 25px;" class="tab-content">
          <td>{{item.alertSty}}</td>
          <td>{{item.contact}}</td>
          <td><input type="checkbox"><label>手机</label><input type="checkbox"><label>邮箱</label></td>
          <td>
            <i class="el-icon-edit"></i><a class="edit">编辑</a><i class="el-icon-delete"></i><a class="delete" v-on:click="deleteContact(index)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="form-group">
      <select class="alertSty">
        <option selected>事件发现</option>
        <option>xxxxxx</option>
      </select>
      <select class="contact">
        <option selected>刘德华</option>
        <option>张学友</option>
        <option>xxxxx</option>
      </select>
      <input type="checkbox" style="margin-left:125px"><label>手机</label><input type="checkbox"><label>邮箱</label>
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
          {alertSty: '事件发现', contact: '刘德华、张学友、xxxxx'},
          {alertSty: '事件发现', contact: '刘德华、张学友、xxxxx'},
          {alertSty: '事件发现', contact: '刘德华、张学友、xxxxx'},
          {alertSty: '事件发现', contact: '刘德华、张学友、xxxxx'}
        ]
      }
    },
    methods: {
      deleteContact(index) {
        this.list.splice(index, 1)
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
  .form-group {
    color #000
  }
  .alertSty {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 120px
    margin-left 30px
    background-color #fff
  }
  .contact {
    height 25px
    line-height 25px
    border 1px solid #aaa
    font-size 16px
    width 200px
    margin-left 80px
    background-color #fff
  }
  button {
    border-radius 6px
    border none
    width 50px
    color #fff
  }
  .confirmBtn {
    background-color #4676ff
    margin-left 120px
  }
  .deleteBtn {
    background-color #777
  }
</style>
