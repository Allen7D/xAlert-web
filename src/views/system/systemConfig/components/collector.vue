<template>
  <div class="probe" :style="{height: Height}">
    <div class="header">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <table width="100%">
        <tr class="content-title">
          <th></th>
          <th>地址</th>
          <th>名称</th>
        </tr>
        <tr v-for="item in list" :key="item" style="height: 20px;">
          <td class="item-id">{{item.id}}</td>
          <td class="item-add">{{item.add}}</td>
          <td class="item-name">{{item.name}}</td>
        </tr>
      </table>
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
          default: '235px'
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
  }
  .content-title {
    height 46px
    line-height 46px
    font-size 20px
    font-weight bolder
  }
  .item-id {
    width 36px
    line-height 20px
    text-align: center
    border-right 1px solid #aaa
  }
  .item-add
  .item-name {
    line-height 20px
    text-align: center
    font-size 15px
  }
  .item-add {
    width 150px
  }
  .item-name {
    width 180px
  }
  table tr:nth-child(odd){background:#eee;}
  table tr:nth-child(even){background:#fff}
</style>
