<template>
  <div class="updateLog">
    <div class="updateTab">
      <table width="100%">
        <thead class="tab-title">
          <tr>
            <th>序号</th>
            <th>升级后版本</th>
            <th>升级描述</th>
            <th>升级时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item" style="height: 25px;">
            <td class="item-id">{{item.id}}</td>
            <td class="item-verson">{{item.verson}}</td>
            <td class="item-descrip">{{item.descrip}}</td>
            <td class="item-time">{{item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="confirmBtn">
      <button class="confirm">确定</button>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          list: [
            {id: 1, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 2, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 3, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 4, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 5, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 6, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 7, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'},
            {id: 8, verson: 'xxxxxxxxxx', descrip: 'xxxxxxxxxxxx', time: '2018-5-14 15:05:00'}
            ]
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
  .confirmBtn {
    height: 50px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .confirm {
    width 100px
    background-color #4676ff
    color #fff
    font-size 15px
    border none
    border-radius 5px
    letter-spacing 5px
  }
  .tab-title {
    height 23px
    line-height 23px
    background-color #4676ff
    color #fff
  }
  .item-id
  .item-verson
  .item-descrip
  .item-time {
    text-align center
    line-height 25px
  }
   tbody tr:nth-child(odd){background:#fff;}
   tbody tr:nth-child(even){background:#eee}
</style>
