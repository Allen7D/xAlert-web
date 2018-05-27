<template>
  <div style="background-color: white">
    <div class="box">
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>漏洞：{{title}}</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <div class="table">
          <el-row>
            <el-col :span="13" offset="6"  style="background: #E6E6E6;border: 1px #E6E6E6 solid">
          <el-row>
            <el-col :span="6" class="th" style="border-top: 1px white solid">CNVD-ID</el-col>
            <el-col :span="18" class="td" style="border-top: 1px white solid">CNVD-2017-34490</el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="th">公开日期</el-col>
            <el-col :span="18" class="td">CNVD-2017-34490</el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="th">危害级别</el-col>
            <el-col :span="18" class="td">
              <div style="width:25px;background: red;height:5px;display: inline-block;
                          margin-bottom: 5px"></div>
              <span>高(AV:N/AC:L/Au:N/I:N/A:C)</span></el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="th" style="height: 180px;line-height: 180px">影响产品</el-col>
            <el-col :span="18" class="td" style="height: 180px">
              <div>MOXA NPort 5150 3.7</div>
              <div>MOXA NPort 5130 3.7</div>
              <div>MOXA NPort 5150 2.2</div>
              <div>MOXA NPort 5150 2.4</div>
              <div>MOXA NPort 5110 2.6</div>
              <div>MOXA NPort 5110 2.7</div>
            </el-col>
          </el-row>
              <el-row>
                <el-col :span="6" class="th">CVE ID</el-col>
                <el-col :span="18" class="td">
                  <el-button type="text">CVE-217-16719</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th" style="height: 120px;line-height: 120px">漏洞描述</el-col>
                <el-col :span="18" class="td" style="height: 120px">
                  <div>Moxa NPort5110、5130和5150都是摩莎(Moxa)公司的用于将工业设串口设备连上网络的串口通讯服务器。</div>
                  <div>多款Moxa NPort产品存在拒绝服务漏洞，攻击者通过注入可破坏设备可用性的数据包，从而发起拒绝服务攻击。</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">参考链接</el-col>
                <el-col :span="18" class="td">
                  <el-button type="text">https://ics-cert.us-cert.gov/advisories/ICSA-17-320-01</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">报送时间</el-col>
                <el-col :span="18" class="td">2017-11-17</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">收录时间</el-col>
                <el-col :span="18" class="td">2017-11-17</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">更新时间</el-col>
                <el-col :span="18" class="td">2017-11-17</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">漏洞附件</el-col>
                <el-col :span="18" class="td">(无附件)</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th" style="height: 150px;line-height: 150px">漏洞解决方案</el-col>
                <el-col :span="18" class="td" style="height: 150px">用户可参考如下厂商提供的安全公告获取补丁以修复该漏洞：
                  https://www.moxa.com/support/download.aspx?type=support&id=882
                  https://www.moxa.com/support/download.aspx?type=support&id=356
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">厂商补丁</el-col>
                <el-col :span="18" class="td">
                  <el-button type="text">多款Moxa NPort产品拒绝服务漏洞(CNDV-2017-34490)</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="th">验证信息</el-col>
                <el-col :span="18" class="td">(暂无验证信息)</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>漏洞(未修复)分布</span></el-col>
        </el-row>
        <div class="table">
        <el-row :gutter="20">
          <el-col :span="8">
            <type-distribution id="typeDistribution" title="该漏洞在资产类型中的分布"></type-distribution>
          </el-col>
          <el-col :span="8">
            <grade-distribution id="gradeDistribution" title="该漏洞在资产等级中的分布"></grade-distribution>
          </el-col>
          <el-col :span="8">
            <repair-rate id="repairRate" title="该漏洞在网络中的修复率"></repair-rate>
          </el-col>
        </el-row>
        </div>
      </div>
      <div class="cards">
        <el-row class="header">
          <el-col :span="4"><span>漏洞：{{title}}</span></el-col>
          <el-col :span="2" :offset="18"><el-button type="text">返回</el-button></el-col>
        </el-row>
        <div class="table">
          <el-row :gutter="5">
            <el-col :span="2" :offset="20">
              <select id="business" class="select">
                <option value="type1" selected>所有业务</option>
              </select>
            </el-col>
            <el-col :span="2">
              <select id="result" class="select">
                <option value="type1" selected>修复情况</option>
              </select>
            </el-col>
          </el-row>
          <el-table :data="listData" size="mini">
            <el-table-column prop="name" sortable label="漏洞名称" width="150"></el-table-column>
            <el-table-column prop="grade" label="等级" width="120"></el-table-column>
            <el-table-column prop="type" sortable label="类型" width="120"></el-table-column>
            <el-table-column prop="asset" label="所属资产" width="150"></el-table-column>
            <el-table-column prop="address" label="地址" width="150"></el-table-column>
            <el-table-column prop="bussiness" label="所属业务" width="150"></el-table-column>
            <el-table-column prop="result" label="修复结果"></el-table-column>
          </el-table>
          <el-row>
            <el-col :span="16" :offset="4">
              <el-pagination
                :current-page.sync="listQuery.page"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="listQuery.limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
            </el-col>
          </el-row>
        </div>
      </div>
      <footer class="footer">
        <p>Copyright © LANXUM ALL Right Reserved. 北京立思辰科技股份有限公司 京ICP备13008717号-1</p>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import typeDistribution from './components/typeDistribution'
  import gradeDistribution from './components/gradeDistribution'
  import repairRate from './components/repairRate'
  import axios from 'axios'
  export default {
    components: {
      typeDistribution,
      gradeDistribution,
      repairRate
    },
    props: {
      title: {
        type: String,
        default: 'HTTP'
      }
    },
    data() {
      return {
        labels: ['CNVD-ID', '公开日期', '危害级别', '影响产品',
          'CVE ID', '漏洞描述', '参考链接', '报送时间', '收录时间',
          '更新时间', '漏洞附件', '漏洞解决方案', '厂商补丁', '验证信息'],
        total: 100,
        vulneData: [],
        listData: [],
        listQuery: {
          limit: 10,
          page: 1
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        axios.get('/api/otherDynamic/vulneTable.json')
          .then(res => {
            res = res.data
            if (res.vulneList) {
              const data = res.vulneList
              this.listData = data
            }
          })
        // fetchList(this.listQuery).then((res) => {
        //   this.total = res.data.total
        //   res.data.data.forEach((item, index) => {
        //     this.eventData.push({
        //       time: item.time,
        //       name: item.name,
        //       type: item.type,
        //       grade: item.grade,
        //       application: item.application
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
      padding-top 20x
      margin-bottom 20px
      width 100%
      border-radius 5px
      border 2px #E6E6E6 solid
      .header
        height 50px
        border-radius 5px
        line-height 50px
        background-color #E6E6E6
        padding-left 26px
        padding-right 26px
        color #333333
      .table
        padding-top 26px
        padding-left 20px
        padding-right 20px
        color black
        padding-bottom 50px
        .th
          border-left 1px white solid
          border-bottom 1px white solid
          border-right 1px white solid
          color #333
          text-align right
          line-height 30px
          height 30px
          padding-right 10px
        .td
          border-bottom 1px white solid
          border-right 1px white solid
          color #333
          padding-left 5px
          height 30px
          line-height 30px
        .select
          width 100%
          height 25px
          line-height 25px
          background-color white
          margin-bottom 3px
  .footer
    margin-top 50px
    color black
    height 50px
    text-align center
</style>
