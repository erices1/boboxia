// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import foot from './components/common/foot';
import 'iview/dist/styles/iview.css';
import '../static/js/validate.js';
import Cookies from 'js-cookie';
import Axios from 'axios'

import Util from './components/libs/util';

Vue.use(iView);

Vue.prototype.axios = Axios;

Vue.config.productionTip = false;
// 加载设置
iView.LoadingBar.config({
  // color: '#5cb85c',
  // failedColor: '#f0ad4e',
  height: 3
})
// 路由设置
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  if (!Cookies.get('user') && to.name !== 'login') {  // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    });
  } else if (Cookies.get('user') && to.name === 'login') {  // 判断是否已经登录且前往的是登录页
    next({
      name: 'home'
    });
  } else {
    next();
  }
});
router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
// 全局组件foot
Vue.component("foot", foot)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
