<template>
  <div style="background: white;padding-top: 20px">
    <div class="log">
      <div class="log-filter">
        <el-row style="margin-bottom: 15px">
          <el-col :span="5" :offset="2">
            <div class="text">类型：</div>
            <el-select v-model="selectValue[0]" size="mini" class="select">
              <el-option
                v-for="item in type"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="text">等级：</div>
            <el-select v-model="selectValue[1]" size="mini" class="select">
              <el-option
                v-for="item in grade"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 15px">
          <el-col :span="5" :offset="2">
            <div class="text">源IP：</div>
            <el-select v-model="selectValue[2]" size="mini" class="select">
              <el-option
                v-for="item in sourceip"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="text">源MAC：</div>
            <el-select v-model="selectValue[3]" size="mini" class="select">
              <el-option
                v-for="item in sourcemac"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="text">源端口：</div>
            <el-select v-model="selectValue[4]" size="mini" class="select">
              <el-option
                v-for="item in sourceport"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 15px">
          <el-col :span="5" :offset="2">
          <div class="text">目标IP：</div>
            <el-select v-model="selectValue[5]" size="mini" class="select">
              <el-option
                v-for="item in targetip"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="text">目标MAC：</div>
            <el-select v-model="selectValue[6]" size="mini" class="select">
              <el-option
                v-for="item in targetmac"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="text">目标端口：</div>
            <el-select v-model="selectValue[7]" size="mini" class="select">
              <el-option
                v-for="item in targetport"
                :key="item.value"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row style="margin-bottom:15px">
          <el-col :span="12" :offset="2">
            <div class="text">开始时间：</div>
            <div style="display: inline-block"><time-picker :time="nowTime"></time-picker></div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 15px">
          <el-col :span="12" :offset="2">
            <div class="text">结束时间：</div>
            <div style="display: inline-block"><time-picker :time="nowTime"></time-picker></div>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small">查询</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="small">导出</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="log-table">
        <div class="table-header">查询结果</div>
        <div class="table-body">
          <el-table :data="eventData">
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="time" sortable label="时间" width="140"></el-table-column>
            <el-table-column prop="name" label="事件名称" width="120"></el-table-column>
            <el-table-column prop="type" label="类型" width="60"></el-table-column>
            <el-table-column prop="grade" label="等级" width="60"></el-table-column>
            <el-table-column prop="sourceip" label="源IP" width="110"></el-table-column>
            <el-table-column prop="sourcemac" label="源MAC" width="150"></el-table-column>
            <el-table-column prop="targetip" label="目标IP" width="120"></el-table-column>
            <el-table-column prop="targetmac" label="目标MAC"></el-table-column>
          </el-table>
        </div>
        <el-pagination
          :current-page.sync="listQuery.page"
          :page-sizes="[10, 20, 30, 50]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <div class="log-footer"><log-footer></log-footer></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import timePicker from 'components/time-picker/timePicker'
  import logFooter from 'components/footer/footer'
  import axios from 'axios'
  export default {
    components: {
      timePicker,
      logFooter
    },
    data() {
      return {
        nowTime: new Date(),
        eventData: [],
        listQuery: {
          limit: 10,
          page: 1
        },
        type: ['Dos', 'Windows'],
        grade: ['中', '高', '低'],
        sourceip: ['192.168.1.10', '192.168.1.11'],
        sourcemac: ['9C-5C-8E-D4-6A-54', '9C-5C-8E-D4-6A-55'],
        sourceport: ['10', '11'],
        targetip: ['192.168.1.10', '192.168.1.11'],
        targetmac: ['9C-5C-8E-D4-6A-54', '9C-5C-8E-D4-6A-55'],
        targetport: ['10', '11'],
        total: 100,
        selectValue: ['', '', '', '', '', '', '', '']
      }
    },
    methods: {
      geteventData() {
        axios.get('/api/log/table.json')
          .then(res => {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.eventData = data.event
            }
          })
      }
    },
    mounted() {
      this.geteventData()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .log
    width 1000px
    padding-top 20px
    margin-left 20%
    color black
    background #f2f2f2
    border 2px #f2f2f2 solid
    .log-filter
      width 100%
      padding-top 20px
      padding-bottom 20px
      background #f2f2f2
      .text
        width 80px
        text-align right
        display inline-block
        font-size 15px
      .select
        width 120px
        height 17px
        line-height 17px
        display inline-block
      .log-button
        height: 23px
        width 70px
        line-height 23px
        color white
        background #00A0E9
        text-align center
    .log-table
      .table-header
        background #E6E6E6
        height 42px
        line-height 42px
        padding-left 26px
        font-size 20px
        font-weight bolder
      .table-body
        background white
        padding 10px 12px 20px 13px
        .table-item
          height 10px
  .log-footer
    background white
    padding-top 80px
    color black
    padding-bottom 50px
</style>
