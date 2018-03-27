<template>
  <div class="net-event-table">
    <el-table
      :data="netEventData" border style="width: 100%" height="250">
      <el-table-column
        prop="time"
        label="日期"
        sortable
        header-align="center"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="eventName"
        label="事件名称"
        header-align="center"
        align="center"
        width="140">
      </el-table-column>
      <el-table-column
        prop="sourceIP"
        label="源IP"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="destinationIP"
        label="目标IP"
        header-align="center"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceNet"
        label="业务网络"
        sortable
        header-align="center"
        align="center"
        width="110">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        netEventData: [{
          time: '2018-01-19 17:46:08',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.25',
          destinationIP: '192.168.3.28',
          serviceNet: '业务网络1'
        }, {
          time: '2018-01-21 09:31:25',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.25',
          destinationIP: '192.168.3.21',
          serviceNet: '业务网络1'
        }, {
          time: '2018-01-22 17:32:18',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.25',
          destinationIP: '192.168.3.11',
          serviceNet: '业务网络2'
        }, {
          time: '2018-01-22 19:56:08',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.26',
          destinationIP: '192.168.3.28',
          serviceNet: '业务网络3'
        }, {
          time: '2018-01-22 19:56:08',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.26',
          destinationIP: '192.168.3.28',
          serviceNet: '业务网络3'
        }, {
          time: '2018-01-22 19:56:08',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.26',
          destinationIP: '192.168.3.28',
          serviceNet: '业务网络3'
        }, {
          time: '2018-01-22 19:56:08',
          eventName: '读取服务器数据',
          sourceIP: '192.168.3.26',
          destinationIP: '192.168.3.28',
          serviceNet: '业务网络3'
        }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .net-event-table
    height: 320px
    min-width: 592px
    padding: 30px 19px
</style>