<template>
  <div>
    <side-bar v-bind:toLeftMenu="leftMenu"/>
    <div class="right-content">
      <router-view></router-view>
      <foot/>
    </div>
  </div>
</template>
<script>
import sideBar from "../../common/sideBar.vue";
export default {
  components: {
    sideBar
  },
  data(){
    return{
      leftMenu: [
        {
          id: 1,
          title: "渠道管理",
          icon:"ios-list",
          child: [
            {
              title: "渠道列表",
              url: "analyze/real_time_overview",
            }            
          ]
        }
      ]
    }
  }
};
</script>
<style scoped>
.right-content {
  margin-left: 200px;
  padding-top: 20px;
  position: relative;
  z-index: 1;
  padding-left: 20px;
  padding-right:20px;
}
</style>
