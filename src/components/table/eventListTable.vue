<template>
  <div class="event-list-table">
    <el-table
      :data="eventListData" border style="width: 100%" height="250">
      <el-table-column
        prop="eventName"
        label="事件名称"
        header-align="center"
        align="center"
        width="210"></el-table-column>
      <el-table-column
        prop="eventType"
        label="事件类型（默认为其它）"
        header-align="center"
        align="center"
        width="250"></el-table-column>
      <el-table-column
        prop="eventLevel"
        label="事件等级"
        header-align="center"
        align="center"
        width="200"></el-table-column>
      <el-table-column
        prop="sourseIP"
        label="源IP地址"
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        prop="destinationIP"
        label="目标IP地址"
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        header-align="center"
        align="center"
        width="210"></el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        sortable
        header-align="center"
        align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          eventListData: [{
            eventName: '行李分拣',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.65',
            destinationIP: '192.168.3.6',
            status: '离线',
            time: '2018-01-19 17:46:08'
          }, {
            eventName: 'xx',
            eventType: '其它',
            eventLevel: '较大',
            sourseIP: '192.168.3.135',
            destinationIP: '192.168.3.36',
            status: '在线',
            time: '2018-02-17 14:49:10'
          }, {
            eventName: '行李分拣',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.88',
            destinationIP: '192.168.3.68',
            status: '在线',
            time: '2018-02-17 04:49:10'
          }, {
            eventName: '行李分拣',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.35',
            destinationIP: '192.168.3.6',
            status: '在线',
            time: '2018-02-16 04:49:10'
          }, {
            eventName: 'xxxxx',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.5',
            destinationIP: '192.168.3.6',
            status: '在线',
            time: '2018-02-16 04:49:10'
          }, {
            eventName: 'xxx',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.35',
            destinationIP: '192.168.3.99',
            status: '在线',
            time: '2018-02-16 04:49:10'
          }, {
            eventName: '行李分拣',
            eventType: '其它',
            eventLevel: '重大',
            sourseIP: '192.168.3.3',
            destinationIP: '192.168.3.6',
            status: '在线',
            time: '2018-02-16 04:49:10'
          }
          ]
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .event-list-table
    height: 320px
    padding: 30px 19px
</style>
