<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body,html{
  width: 100%;
  height: 100%;
}
a{
  text-decoration:none;
}
#app {
  font-family: arial, "Microsoft Yahei", '微软雅黑';
  width: 100%;
  height: 100%;
}
.fade-out-enter-active, .fade-out-leave-active {
    transition: all .5s
}
.fade-out-enter, .fade-out-leave-active {
    opacity: 0;
    transform: translateX(-400px);
}
.layout-footer-center {
  text-align: center;
    background: #f5f7f9;
    padding: 24px 50px;
    color: #495060;
    font-size: 14px;
}
.help {
    display: block;
    font-size: 11px;
    margin-top: 5px;
}
.help.is-danger {
    color: #ff3860;
    text-align: left;
}
/* notuce 背景设置 */
.ivu-notice-with-info:after, .ivu-notice-with-normal:after{
  background: #199CC4;
}
.ivu-notice-notice-content .ivu-icon-information-circled{
  color: #199CC4;
}
.ivu-btn-info{
  background: #199CC4;
}
</style>
