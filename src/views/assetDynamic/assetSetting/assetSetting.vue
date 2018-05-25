<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>资产配置</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <el-row class="container" :gutter="20">
          <el-col :span="10">
            <div class="header">资产</div>
            <el-table :data="setData" size="mini">
              <el-table-column type="index" width="30"></el-table-column>
              <el-table-column prop="address" label="网络地址" width="110"></el-table-column>
              <el-table-column prop="segment" label="网段" width="120"></el-table-column>
              <el-table-column prop="mac" label="MAC地址"></el-table-column>
            </el-table>
          </el-col>
          <el-col :span="14">
            <div class="header">配置</div>
            <div class="body">
              <el-form :model="asset">
                <el-col :span="12">
                <el-form-item label="资产名称:">
                  <el-input v-model="asset.name" placeholder="资产名称" size="mini" style="width: 130px"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="资产等级:">
                  <el-select v-model="asset.grade" placeholder="高/中/低" size="mini" style="width: 130px">
                    <el-option label="高" value="high"></el-option>
                    <el-option label="中" value="middle"></el-option>
                    <el-option label="低" value="low"></el-option>
                  </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="资产类型:">
                    <el-select v-model="asset.type" placeholder="资产类型" size="mini" style="width: 130px">
                      <el-option label="xxx" value="type1"></el-option>
                      <el-option label="xxx" value="type2"></el-option>
                      <el-option label="xxx" value="type3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="厂商:">
                    <el-select v-model="asset.firm" placeholder="厂商" size="mini" style="width: 130px">
                      <el-option label="GE" value="GE"></el-option>
                    </el-select>
                    <el-tooltip class="item" effect="dark" content="添加/删除列表" placement="bottom">
                      <i class="el-icon-circle-plus-outline" @click="dialogVisible = true"></i>
                    </el-tooltip>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所属网络:">
                    <el-select v-model="asset.net" placeholder="所属网络" size="mini" style="width: 130px">
                      <el-option label="业务网络1" value="net1"></el-option>
                      <el-option label="业务网络2" value="net2"></el-option>
                    </el-select>
                    <el-tooltip class="item" effect="dark" content="添加/删除列表" placement="bottom">
                      <i class="el-icon-circle-plus-outline" @click="dialogVisible = true"></i>
                    </el-tooltip>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所属部门:">
                    <el-select v-model="asset.deparment" placeholder="所属部门" size="mini" style="width: 130px">
                      <el-option label="部门1" value="department1"></el-option>
                      <el-option label="部门2" value="department2"></el-option>
                    </el-select>
                    <el-tooltip class="item" effect="dark" content="添加/删除列表" placement="bottom">
                      <i class="el-icon-circle-plus-outline" @click="dialogVisible = true"></i>
                    </el-tooltip>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="所在位置:">
                    <el-input v-model="asset.location" placeholder="所在位置" size="mini" style="width: 130px"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="资产状态:">
                    <el-select v-model="asset.status" placeholder="资产状态" size="mini" style="width: 130px">
                      <el-option label=未知 value="unknown"></el-option>
                      <el-option label="确认" value="confirm"></el-option>
                      <el-option label="可疑" value="suspected"></el-option>
                    </el-select>
                    <el-tooltip class="item" effect="dark" content="添加/删除列表" placement="bottom">
                      <i class="el-icon-circle-plus-outline" @click="dialogVisible = true"></i>
                    </el-tooltip>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="描述说明:">
                    <el-input type="textarea" v-model="asset.illustrate" style="width: 400px"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="资产型号:">
                    <el-select v-model="asset.model" placeholder="型号" size="mini" style="width: 130px">
                      <el-option label="xxxx" value="model1"></el-option>
                    </el-select>
                    <el-select v-model="asset.version" placeholder="版本" size="mini" style="width: 130px">
                      <el-option label="xxxx" value="version1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="操作系统:">
                    <el-select v-model="asset.system" placeholder="系统" size="mini" style="width: 130px">
                      <el-option label="xxxx" value="model1"></el-option>
                    </el-select>
                    <el-select v-model="asset.version" placeholder="版本" size="mini" style="width: 130px">
                      <el-option label="xxxx" value="version1"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="应用程序:">
                      <el-row>
                        <el-col :span="12">
                          <el-select v-model="asset.system" placeholder="应用程序1" size="mini" style="width: 130px">
                            <el-option label="xxxx" value="model1"></el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="8">
                          <el-select v-model="asset.version" placeholder="版本" size="mini" style="width: 130px">
                            <el-option label="xxxx" value="version1"></el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="8" >
                          <el-select v-model="asset.system" placeholder="应用程序2" size="mini" style="width: 130px">
                            <el-option label="xxxx" value="model1"></el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="8">
                          <el-select v-model="asset.version" placeholder="版本" size="mini" style="width: 130px">
                            <el-option label="xxxx" value="version1"></el-option>
                          </el-select>
                        </el-col>
                        <el-col :span="8">
                    <div style="width: 80px;height: 20px;background: darkgrey;
                            line-height: 20px;text-align: center;margin-left: 100px">
                      <i class="el-icon-circle-plus-outline"></i>新增
                    </div>
                        </el-col>
                      </el-row>
                  </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                <el-form-item>
                    <el-col :span="6" :offset="4"><el-button @click="clickKeep" type="primary">保存</el-button></el-col>
                    <el-col :span="6" :offset="6"><el-button @click="clickReset" type="info">重置</el-button></el-col>
                </el-form-item>
                </el-col>
              </el-form>
            </div>
          </el-col>
        </el-row>
    </div>
  </div>
    <el-dialog title="编辑列表" :visible.sync="dialogVisible" width="400px">
          <div style="background: #f2f2f2;padding-top: 5%;height: 400px">
            <div><i class="el-icon-plus"></i></div>
            <div style="height: 300px;width: 90%;background: white;margin-left: 3%;
                        padding-left: 10px;padding-top: 10px">
              <el-checkbox-group v-model="checkList">
                <el-col :span="24"><el-checkbox label="业务网络"></el-checkbox></el-col>
                <el-col :span="24"><el-checkbox label="业务网络1"></el-checkbox></el-col>
                <el-col :span="24"><el-checkbox label="业务网络2"></el-checkbox></el-col>
                <el-col :span="24"><el-checkbox label="业务网络3"></el-checkbox></el-col>
              </el-checkbox-group>
            </div>
            <div style="margin-top: 20px;margin-left: 50%">
            <el-button @click="dialogComfirm">确定</el-button>
            <el-button @click="dialogClose">取消</el-button>
            </div>
          </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  // import {fetchList} from '../../../api/article'
  export default {
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
</style>
