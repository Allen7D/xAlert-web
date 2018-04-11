<template>
    <div class="asset-online-table">
      <el-table
        :data="assetOnlineData" border style="width: 100%" height="250">
        <el-table-column
          prop="status"
          label="状态"
          sortable
          header-align="center"
          align="center"
          width="100"></el-table-column>
        <el-table-column
          prop="addressIP"
          label="IP地址"
          header-align="center"
          align="center"
          width="200"></el-table-column>
        <el-table-column
          prop="assetName"
          label="资产名称"
          header-align="center"
          align="center"
          width="180"></el-table-column>
        <el-table-column
          prop="business"
          label="所属业务"
          header-align="center"
          align="center"
          width="150"></el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          header-align="center"
          align="center"
          width="150"></el-table-column>
        <el-table-column
          prop="importance"
          label="重要性"
          sortable
          header-align="center"
          align="center"
          width="130"></el-table-column>
        <el-table-column
          prop="eventsNum"
          label="事件数量"
          sortable
          header-align="center"
          align="center"
          width="130"></el-table-column>
        <el-table-column
          prop="vulnerabilityNum"
          label="漏洞数量"
          sortable
          header-align="center"
          align="center"
          width="130"></el-table-column>
        <el-table-column
          prop="port"
          label="端口"
          header-align="center"
          align="center"
          width="110"></el-table-column>
        <el-table-column
          prop="communicationNum"
          label="通信量"
          sortable
          header-align="center"
          align="center"
          width="130"></el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
          sortable
          header-align="center"
          align="center"
          width="200"></el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          assetOnlineData: [{
            status: '离线',
            addressIP: '192.168.3.65',
            assetName: '西门子PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '10000',
            vulnerabilityNum: '10000',
            port: '50',
            communicationNum: '20MB',
            updateTime: '2018-01-19 17:46:08'
          }, {
            status: '在线',
            addressIP: '192.168.3.35',
            assetName: 'MOXA PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '450',
            vulnerabilityNum: '100',
            port: '80',
            communicationNum: '200MB',
            updateTime: '2018-02-16 04:49:08'
          }, {
            status: '离线',
            addressIP: '192.168.3.165',
            assetName: 'PC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '6000',
            vulnerabilityNum: '1900',
            port: '8080',
            communicationNum: '250MB',
            updateTime: '2018-03-05 7:46:08'
          }, {
            status: '离线',
            addressIP: '192.168.3.65',
            assetName: '西门子PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '10000',
            vulnerabilityNum: '10000',
            port: '50',
            communicationNum: '20MB',
            updateTime: '2018-01-19 17:46:08'
          }, {
            status: '离线',
            addressIP: '192.168.3.65',
            assetName: '西门子PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '10000',
            vulnerabilityNum: '10000',
            port: '50',
            communicationNum: '20MB',
            updateTime: '2018-01-19 17:46:08'
          }, {
            status: '离线',
            addressIP: '192.168.3.65',
            assetName: '西门子PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '10000',
            vulnerabilityNum: '10000',
            port: '50',
            communicationNum: '20MB',
            updateTime: '2018-01-19 17:46:08'
          }, {
            status: '在线',
            addressIP: '192.168.3.65',
            assetName: '西门子PLC',
            business: '行李分拣',
            type: '网络控制设备',
            importance: '重要',
            eventsNum: '10000',
            vulnerabilityNum: '10000',
            port: '50',
            communicationNum: '20MB',
            updateTime: '2018-01-19 17:46:08'
          }
          ]
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .asset-online-table
    height: 320px
    min-width: 520px
    padding: 30px 19px
</style>
