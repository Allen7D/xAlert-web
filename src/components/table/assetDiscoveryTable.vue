<template>
  <div class="asset-table">
    <el-table :data="assetData" border style="width: 100%" height="250">
      <el-table-column
        label="时间"
        prop="time"
        width="200"
        header-align="center"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="IP"
        prop="IP"
        width="140"
        header-align="center"
        align="center">
      </el-table-column>
      <el-table-column
        label="业务网络"
        prop="serviceNet"
        width="110"
        header-align="center"
        align="center"
        sortable>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        assetData: [
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          },
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          },
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          },
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          },
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          },
          {
            time: '2018-01-19 17:46:08',
            IP: '192.168.3.25',
            serviceNet: '业务网络1'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .asset-table
    height: 320px
    min-width: 396px
    padding: 30px 19px
</style>