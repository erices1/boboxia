import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/views/Main'
import u from '@/components/views/u'
import Login from '@/components/views/Login'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login - 登录'
      },
    },
    {
      path: '/',
      redirect: '/home',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'home',
          title: '首页',
          name: 'home',
          // 懒加载
          component: resolve => require(['@/components/views/home/home.vue'], resolve)
        },
        {
          path: '/channel',
          title: '渠道管理',
          name: 'channel',
          redirect: 'channel/channellist',
          // 懒加载
          component: resolve => require(['@/components/views/channel/channelBase.vue'], resolve),
          children: [
            {
              path: '/channel/channellist',
              title: '渠道列表',
              name: 'channellist',
              // 懒加载
              component: resolve => require(['@/components/views/channel/page/channelList.vue'], resolve)
            },
            {
              path: '/channel/channeledit',
              title: '渠道编辑',
              name: 'channeledit',
              // 懒加载
              component: resolve => require(['@/components/views/channel/page/channelEdit.vue'], resolve)
            },
            {
              path: '/channel/channeladd',
              title: '新增渠道',
              name: 'channeladd',
              // 懒加载
              component: resolve => require(['@/components/views/channel/page/channelAdd.vue'], resolve)
            }
          ]
        },
        {
          path:'/gamelist',
          titlle:'游戏列表',
          name:'gamelist',
          // 懒加载
          component: resolve => require(['@/components/views/data/gameList.vue'], resolve),
        },
        {
          path:'/database/',
          titlle:'基础数据',
          name:'database',
          redirect: '/database/realtime',
          // 懒加载
          component: resolve => require(['@/components/views/data/dataBase.vue'], resolve),
          children:[
            {
              path: '/database/realtime',
              title: '实时数据',
              name: 'realtime',
              // 懒加载
              component: resolve => require(['@/components/views/data/baseData/realTime.vue'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/u',
      name: 'u',
      component: u,
      meta: {
        title: '测试'
      },
    }
  ]
});
export default router
