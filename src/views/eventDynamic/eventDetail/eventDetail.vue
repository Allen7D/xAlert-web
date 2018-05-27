<template>
  <div style="background: white">
    <div class="event-form">
      <div class="title">
        <el-col :span="3">事件：{{title}}</el-col>
      <el-col :span="3" :offset="18">
        <el-button type="text">返回</el-button>
      </el-col>
      </div>
      <div class="body">
        <el-row>
        <el-col :span="8" :offset="1" style="padding-top: 15px" v-for="(item, index) in eventData" :key="index">
          <div style="width:100px;text-align: right;display: inline-block">{{item.label}}：</div>
          <span style="text-align: right">{{item.value}}</span>
        </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="1" style="padding-top: 15px">
            <div style="width:100px;text-align: right;display: inline-block">有效载荷：</div>
          </el-col>
          <el-col :span="7" :offset="8">
            <ul>
              <li class="li-tab" v-for="(item, index) in tabsName" :key="index"
              @click="toggleTabs(index)" :class="{active:index!=nowIndex}">{{item}}</li>
            </ul>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <div class="divTab" v-show="nowIndex===0">十六进制</div>
            <div class="divTab" v-show="nowIndex===1">文本</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="event-form">
      <div class="title">
        <el-col :span="3">事件趋势</el-col>
        <el-col :span="10" :offset="11">
          <div class="filter-wrapper">
            <el-row type="flex" justify="space-between">
              <el-col :span="4"  v-for="(item, index) in timeList" :key="index">
                <div class="filter-button" @click="filterToggle(index)"
                     :style="{backgroundColor: item.select ? '#333': ''}">
                  <span :style="{color: item.select ? '': '#333'}">{{item}}</span>
                </div>
              </el-col>
              <el-col :span="4"><div class="filter">自定义</div></el-col>
            </el-row>
          </div>
        </el-col>
      </div>
      <div class="body">
        <event-trend id="eventTrend"></event-trend>
      </div>
    </div>
    <div class="footer"><event-footer></event-footer></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import eventTrend from './../../assetDynamic/assetDetail/components/eventTrend'
  import eventFooter from 'components/footer/footer'
  export default {
    components: {
      eventTrend,
      eventFooter
    },
    props: {
      title: {
        type: String,
        default: '未名'
      },
      dataList: {
        type: Array,
        default: () => [
          {
            label: '最近发现',
            value: '2018-5-15 10:38:31'
          },
          {
            label: '首次发现',
            value: '2018-5-15 10:38:31'
          },
          {
            label: '发送源地址',
            value: '192.168.1.1'
          },
          {
            label: '目标地址',
            value: '192.168.1.2'
          },
          {
            label: '发送端口',
            value: '60'
          },
          {
            label: '目标端口',
            value: '80'
          },
          {
            label: '事件类型',
            value: 'xxxxxx'
          },
          {
            label: '事件总计',
            value: '20'
          },
          {
            label: '事件状态',
            value: '已确认'
          }
        ]
      }
    },
    data() {
      return {
        eventData: this.dataList,
        tabsName: ['十六进制显示', '文本显示'],
        nowIndex: 0,
        timeList: ['周', '月', '季度', '半年', '一年']
      }
    },
    methods: {
      toggleTabs(index) {
        this.nowIndex = index
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .event-form
    background white
    width 60%
    margin auto
    padding-top 20px
    margin-bottom 20px
    .title
      line-height 50px
      background #E6E6E6
      height: 50px
      padding-left 26px
      font-size 20px
      font-weight bold
      color #333
      border-top-right-radius 5px
      border-top-left-radius 5px
      .filter-wrapper
        .filter-button
          position relative
          top 8px
          width: 32px
          height: 33px
          border-radius: 50%
          border: 1px #333 solid;
          line-height: 34px
          text-align center
          font-size 12px
          cursor: pointer
        .filter
          font-size 12px
          color #333
          cursor: pointer
    .body
      border-bottom-left-radius 5px
      border-bottom-right-radius 5px
      border 2px #E6E6E6 solid
      color #333
      padding-left 20px
      padding-right 20px
      .li-tab
        margin-left 3px
        width 100px
        height 30px
        line-height 30px
        display inline-block
        text-align center
        background white
        border-left 1px #333 solid
        border-top 1px #333 solid
        border-right 1px #333 solid
      .active
        background #E6E6E6
      .divTab
        border 1px #333 solid
        height 150px
        margin auto
        margin-bottom 20px
  .footer
    background white
    padding-top 50px
    color black
    padding-bottom 50px
</style>
