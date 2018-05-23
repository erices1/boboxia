<template>
  <div>
    <iframe src="http://192.168.1.229:8090/" height="200" ref="iframe" width="100%" frameborder="0"></iframe>
    <!-- <iframe src="https://www.baidu.com/" height="500" ref="iframe1" width="100%" frameborder="0"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // this.getMessage();
    this.sendMessage();
    // this.reay();
  },
  methods:{
    getMessage(){
      window.addEventListener('message',function(rs){
         console.log(rs.data);
      })
    },
    sendMessage(){
      this.$nextTick(() => {
        var ifr = this.$refs.iframe;
        var fdata = "parrent平台发送到游戏";
        //页面加载完后，执行发送方法
        setTimeout(function(){
          ifr.contentWindow.postMessage(fdata,"*");
        },2000);
  　　})
    },
    reay(){
      this.$nextTick(() => {
        var oFrm = this.$refs.iframe1;
        oFrm.onload = oFrm.onreadystatechange = function() {
          if (this.readyState && this.readyState != 'complete') return;
          else {
            alert('加载完成！');
          }
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
