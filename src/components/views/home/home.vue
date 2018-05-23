<template>
  <div>
    <div :style="{minHeight:minHeight , background: '#fff'}">
      <div class="welcome" >
        欢迎来到啵啵侠管理后台<br/><span>Welcome to bo bo xia management backstage</span>
      </div>
    </div>
    <foot/>
  </div>
</template>
<script>
// import foot from '../../common/foot.vue';
export default {
  //  components:{
  //     foot
  // },
  data(){
    return{
      minHeight:''
    }
  },
  created(){
    this.minHeight = (document.body.clientHeight - 129)+'px';
  }
}
</script>
<style scoped>
.welcome{
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    height: 90px;
    line-height: 35px;
    margin-top: -45px;
    font-size: 50px;
}
.welcome span{
  font-size: 24px;
  color: #a1a1a1;
  letter-spacing: 1px;
}
</style>


