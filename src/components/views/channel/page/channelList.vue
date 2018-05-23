<template>
  <div class="box-common">
      <div class="title">
          <h3>渠道管理</h3>
      </div>
      <div class="content">
          <top-view/>
          <div class="tableBox">
              <Table border  :columns="channel" :data="channelData"></Table>
          </div>
         <Page :total="totlaPage" class="page" show-elevator :page-size="pageSize" @on-change="changepage"></Page>
      </div>

  </div>
</template>
<script>
import topView from "../../../common/topView.vue";
import table_mock from '@/mock/goods.js'
export default {
  components: {
    topView
  },
  data() {
    return {
      pageSize:10,//每页显示条数
      totlaPage:0,//总条数
      totalHistoryData:[],//表格总数据
      channel: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "渠道ID",
          key: "id",
          align: "center"
        },
        {
          title: "渠道名称",
          key: "name",
          align: "center"
        },
        {
          title: "渠道账号",
          key: "account",
          align: "center"
        },
        {
          title: "注册时间",
          key: "register",
          align: "center"
        },
        {
          title: "最后登录时间",
          key: "loginTime",
          align: "center"
        },
        {
          title: "渠道类型",
          key: "class",
          align: "center"
        },
        {
          title: "归属渠道",
          key: "under",
          align: "center"
        },
        {
          title: "系统",
          key: "system",
          align: "center"
        },
        {
          title: "平台专员",
          key: "commissioner",
          align: "center"
        },
        {
          title: "状态",
          key: "status",
          align: "center"
        },
        {
            title:"操作",
            key:"action",
            fixed:'right',
            align:"center",
            width:120,
            render:(h,params)=>{
                return h('Button',{
                    props:{
                        type:'primary',
                        size:'small'
                    },
                    on:{
                        click:()=>{
                            this.edit(params.row.id)
                        }
                    }
                },'编辑')
            }
        }
      ],
      channelData: []
    };
  },
  mounted(){
    this.getData();
  },
  methods: {
    edit(id){
        this.$router.push({name: 'channeledit',query: {cl_id:id}});
    },
    getData(){
      this.axios.get("http://127.1.1.0:9091").then(res=>{
        let channelData = res.data.array;
        for(let val of channelData){
          if(val.status == 1){
            val.status = "审核"
          }else{
            val.status = "未审核"
          }
        }
        this.totalHistoryData = channelData;
        this.totlaPage = channelData.length;
        if(this.totalHistoryData.length < this.pageSize){
          this.channelData = this.totalHistoryData;
        }else{
          this.channelData = this.totalHistoryData.slice(0,this.pageSize);
        }
      })
    },
    changepage(page){
      var _start = (page -1) * this.pageSize;
      var _end = page * this.pageSize;
      this.channelData = this.totalHistoryData.slice(_start, _end);
    }
  }
};
</script>
<style>
.box-common {
  border: 1px solid #e1e1e1;
  background: #fff;
  margin-bottom: 15px;
}
.box-common .title {
  background: #ffffff;
  border-bottom: 1px solid #d8d8d8;
  font-size: 12px;
  line-height: 0;
  min-height: 40px;
  position: relative;
}
.box-common .title h3 {
  color: #333;
  font-size: 16px;
  line-height: 40px;
  padding-left: 20px;
  vertical-align: middle;
  font-weight: normal;
  float: left;
}
.box-common .content {
  padding: 15px;
  overflow: hidden;
}
</style>
<style scoped>
.box-common .content .tableBox{
    margin-bottom:30px;
}
.page{
    float: right;
    margin-right: 20px;
}
</style>


