<template>
  <!-- 这里是表单么 -->
  <div class="config">
    <div class="item">
      类型:
      <el-select v-model="type" placeholder="请选择">
        <el-option label="Dos" value="1"></el-option>
        <el-option label="木马程式" value="2"></el-option>
        <el-option label="协议仿冒" value="3"></el-option>
      </el-select>
    </div>
    <div class="item">
      <div clsss="sub-item">
        <span>源IP:</span>
        <el-input v-model="src.ip" placeholder="请输入源IP" :style="{width: '205px'}"></el-input>
      </div>
      <div clsss="sub-item">
        <span>源MAC:</span>
        <el-input v-model="src.mac" placeholder="请输入源MAC" :style="{width: '205px'}"></el-input>
      </div>
      <div clsss="sub-item">
        <span>源端口:</span>
        <el-input v-model="src.port" placeholder="请输入源端口" :style="{width: '205px'}"></el-input>
      </div>
    </div>
    <div class="item">
      <div clsss="sub-item">
        <span>目标IP:</span>
        <el-input v-model="dst.ip" placeholder="请输入目标IP" :style="{width: '205px'}"></el-input>
      </div>
      <div clsss="sub-item">
        <span>目标MAC:</span>
        <el-input v-model="dst.mac" placeholder="请输入目标MAC" :style="{width: '205px'}"></el-input>
      </div>
      <div clsss="sub-item">
        <span>目标端口:</span>
        <el-input v-model="dst.port" placeholder="请输入目标端口" :style="{width: '205px'}"></el-input>
      </div>
    </div>
    <div class="item">
      <span>严重程度</span>
      <el-radio-group v-model="listQuery.severity" @change="handleBlur">
        <el-radio-button label="3">高</el-radio-button>
        <el-radio-button label="2">中</el-radio-button>
        <el-radio-button label="1">低</el-radio-button>
      </el-radio-group>
    </div>
    <div class="item">
      <div class="time">
        <span>开始时间:</span>
        <time-picker :time.sync="listQuery.startTime"></time-picker>
      </div>
      <div class="time">
        <span>结束时间:</span>
        <time-picker :time.sync="listQuery.endTime"></time-picker>
      </div>
    </div>
    <div class="item">
      <el-button type="primary" @click="search">查询</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {fetchList} from '@/api/log'
  import TimePicker from 'components/time-picker/timePicker'
  export default {
    components: {
      TimePicker
    },
    data() {
      return {
        type: '',
        src: {
          ip: '',
          mac: '',
          port: ''
        },
        dst: {
          ip: '',
          mac: '',
          port: ''
        },
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          severity: 2,
          startTime: new Date(),
          endTime: new Date()
        }
      }
    },
    methods: {
      handleBlur(val) {
        console.log(val)
      },
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(res => {
          this.list = res.data.items
          this.total = res.data.total
          this.listLoading = false
        })
      },
      search() {
        console.log(this.listQuery)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item
    margin: 15px 0
    .time
      margin: 15px 0
</style>