<template>
  <div :style="itemHeight">
    <div class="title">{{title}}</div>
    <div class="item" :id="id" :style="[chartHeight, chartWidth, chartPosition]"></div>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  // import {fetchList} from '../../../api/article'
  export default {
    props: {
      id: {
        type: String,
        default: 'chart'
      },
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 300
      },
      width: {
        type: String,
        default: '100%'
      },
      float: {
        type: String,
        default: 'none'
      }
    },
    data() {
      return {
        checkList: ['业务网络'],
        dialogVisible: false,
        setData: [],
        asset: {
          name: '',
          grade: '',
          type: '',
          firm: '',
          net: '',
          deparment: '',
          location: '',
          status: '',
          illustrate: '',
          model: '',
          system: '',
          application: '',
          version: ''
        }
      }
    },
    created() {
      this.getsetData()
    },
    methods: {
      dialogClose() {
        this.dialogVisible = false
      },
      dialogComfirm() {
        this.dialogVisible = false
      },
      clickKeep() {
        this.$confirm('保存配置?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      clickReset() {
        this.$confirm('重置配置?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        })
      },
      getsetData() {
        axios.get('/api/assetDynamic/table.json')
          .then(res => {
            res = res.data
            if (res.assets) {
              const data = res.setting
              this.setData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       time: item.time,
        //       eventname: item.eventname,
        //       eventtype: item.eventtype,
        //       eventgrade: item.eventgrade,
        //       source: item.source,
        //       target: item.target,
        //       status: item.status
        //     })
        //   })
        // })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
<<<<<<< HEAD
  .box
    margin auto
    width 70%
    padding-top 25px
    .cards
      width 100%
      border-radius 5px
      border 2px #E6E6E6 solid
      height 1000px
      .header
        height 50px
        border-top-left-radius 5px
        border-top-right-radius 5px
        line-height 50px
        background-color #E6E6E6
        padding-left 26px
        color #333333
      .container
        height 500px
        width 100%
        margin-top 26px
        padding-left 13px
        .header
          background-color #00A0E6
          height 26px
          line-height 26px
          color white
        .body
          background-color #f2f2f2
          padding-top 22px
          padding-bottom 11px
          color black
          font-weight bolder
          height 600px
</style>

<style>
  .el-table th{
    background: #f2f2f2;
    padding-top: 22px;
    padding-bottom: 11px;
    font-weight: bolder;
    color: black;
    text-align: center;
  }
  .el-table tr:nth-child(even){
    color: grey;
    background: #f2f2f2;
    text-align: center;
  }
  .el-table tr:nth-child(odd){
    color: gray;
    background: white;
    text-align: center;
  }
  .el-form-item {
    margin-bottom: 0
  }
=======
  @import "~common/stylus/variable"
  .title
    height 25px
    line-height 25px
    color black
    font-weight bolder
  .item
    /*height: 330px*/
    margin-top 5px
    margin-right 20px
    position: relative
    border: 1px solid #e6e6e6
    background-color #fff
    border-radius 10px
>>>>>>> origin/lml
</style>
