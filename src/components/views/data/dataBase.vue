<template>
  <div>
      <side-bar v-bind:toLeftMenu="leftMenu">
          <div class="game-name">
            <Select v-model="nowGameName" @on-change="gameNameChange">
                <Option v-for="item in gameList" :value="item.game_name" :key="item.id">{{ item.game_name }}</Option>
            </Select>
          </div>
      </side-bar>
      <div class="right-content">
        <top-view ref="pdt"></top-view>
        <div :style="{paddingTop:paddingTop+'px'}">
          <router-view></router-view>
        </div>
      <foot/>
      </div>
  </div>
</template>
<script>
import sideBar from "../../common/sideBar.vue";
import topView from "../../common/dataView.vue";
export default {
  components: {
    sideBar,
    topView
  },
  data() {
    return {
      paddingTop:53,
      gameList: [
        {
          game_name: "仙境传说H5",
          id: 7
        },

        {
          game_name: "卓越之翼",
          id: 5
        },

        {
          game_name: "卓越之翼-测试",
          id: 6
        },

        {
          game_name: "恶魔猎手H5",
          id: 1
        }
      ],
      nowGameName: this.$route.query.gameName,
      leftMenu: [
        {
          id: 1,
          title: "基础数据",
          icon:"ios-analytics",
          child: [
            {
              title: "实时概况",
              url: "analyze/real_time_overview",
            },
            {
              title: "日报",
              url: "analyze/day_report",
            },
            {
              title: "周报",
              url: "analyze/week_report",
            },
            {
              title: "月报",
              url: "analyze/month_report",
            }
          ]
        },
        {
          id: 2,
          title: "收入分析",
          icon:"cash",
          child: [
            {
              title: "ltv",
              url: "analyze/real_time_overvie",
            }
          ]
        },
        {
          id: 3,
          title: "用户管理",
          icon:"android-person-add",
          child: [
            {
              title: "用户管理",
              url: "analyze/real_time_overvi",
            }
          ]
        }
      ]
    };
  },
  beforeCreate(){},
  methods:{
      gameNameChange(name){
        this.nowGameName = name;
        this.$router.push({query: {name:name}});
      },
      paddingTopHeight(){//获取top的高度
        this.$nextTick(()=>{
          let el = this.$refs.pdt.$el;
          this.paddingTop = parseInt(el.offsetHeight);
        })
      }
  },
  mounted(){
    this.paddingTopHeight();
    window.addEventListener('resize',this.paddingTopHeight)
  },
  beforeDestroy(){
      window.removeEventListener('resize', this.paddingTopHeight);
    }
};
</script>
<style scoped>
.game-name{
    width: 200px;
    position: relative;
    z-index: 901;
    background: #272a33;
}
.game-name .ivu-select-single{
    height: 50px;
}
.game-name >>> .ivu-select-single .ivu-select-selection{
    height: 50px;
    background: none;
    border: none;
}
.game-name >>> .ivu-select-single .ivu-select-selected-value{
    height: 50px;
    line-height: 50px;
    text-align: center;
    padding: 0 60px 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #ffffff;
}
.game-name >>> .ivu-select-dropdown{
    border-radius: 0;
    margin:0; 
    text-align: center
}
.game-name >>> .ivu-select-single .ivu-select-dropdown-list .ivu-select-item-selected{
    background: #199CC4;
}
.game-name >>> .ivu-select-single .ivu-select-selection .ivu-select-arrow{
    right: 35px;
}
.right-content {
  margin-left: 200px;
  padding-top: 20px;
  position: relative;
  z-index: 1;
  padding-left: 20px;
  padding-right:20px;
}
</style>
