<template>
  <div class="layout">
      <Layout>
        <Header :style="{position: 'fixed', width: '100%',zIndex:'50'}">
          <Menu mode="horizontal" theme="dark" :active-name="menuActive" @on-select='changeMenu'>
            <div class="layout-logo">平台管理系统</div>
            <div class="layout-nav">
              <MenuItem :name="item.urlName" v-for="item in menu" :key="item.urlName">
                <Icon :type="item.icon"></Icon>
                {{item.title}}
              </MenuItem>
            </div>
            <div class="layout-right">
              <div class="online-time">
                <Row type="flex" justify="center" align="middle">
                  <Icon type="clock" class="ios-clock"></Icon>今天是：{{time}}
                </Row>
              </div>
              <div class="user-dropdown-menu-con">
                <Row type="flex" justify="center" align="middle" class="user-dropdown-innercon">
                  <Dropdown trigger="click" @on-click="handleClickUserDropdown">
                      <a href="javascript:void(0)">
                        <span class="main-user-name">{{ userName }}</span>
                        <Icon type="arrow-down-b" class="arrow-down-b"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem name="ownSpace">个人中心</DropdownItem>
                        <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                  <Avatar class="head-portrait"></Avatar>
                </Row>
              </div>
            </div>
          </Menu>
        </Header>
        <Content :style="{margin: '60px 0px 0', minHeight: minHeight}">
          <router-view></router-view>
        </Content>
      </Layout>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "HelloWorld",
  data() {
    return {
      menuActive: "1", //菜单选中首页
      userName: "",
      time: "",
      minHeight: "",
      menu: [
        {
          urlName: "1",
          title: "首页",
          icon: "ios-navigate"
        },
        {
          urlName: "2",
          title: "渠道管理",
          icon: "ios-keypad"
        },
        {
          urlName: "3",
          title: "数据统计",
          icon: "ios-analytics"
        },
        {
          urlName: "4",
          title: "配置管理",
          icon: "ios-keypad"
        },
        {
          urlName: "5",
          title: "系统管理",
          icon: "android-settings"
        },
        {
          urlName: "6",
          title: "帮助中心",
          icon: "ios-help"
        }
      ]
    };
  },
  created() {
    this.userName = Cookies.get('user');
    this.getCurrentDate();
    this.minHeight = document.body.clientHeight - 60 + "px";
    let menuActive = Cookies.get("menuActive");
    if (!menuActive) {
      this.menuActive = "1";
    } else {
      this.menuActive = menuActive; //不为空时选中最近一次菜单
    }
  },
  mounted() {
    this.hasGreet()
  },
  methods: {
    getCurrentDate() {
      var now = new Date();
      var year = now.getFullYear(); //得到年份
      var month =
        now.getMonth() + 1 < 10
          ? "0" + (now.getMonth() + 1)
          : now.getMonth() + 1; //得到月份
      var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate(); //得到日期
      this.time = `${year}年${month}月${date}日`;
    },
    changeMenu(name) {
      Cookies.set("menuActive", name); //每次点击更新选中状态
      if (name == "1") {
        this.$router.push({ name: "home" });
      } else if (name == "2") {
        this.$router.push({ name: "channel" });
      } else if (name == "3") {
        this.$router.push({ name: "gamelist" });
      }
    },
    hasGreet() {
      // 问候信息相关
      if (!Cookies.get("hasGreet")) {
        let now = new Date();
        let hour = now.getHours();
        let greetingWord = {
          title: "",
          words: ""
        };
        let userName = Cookies.get("user");
        if (hour < 6) {
          greetingWord = {
            title: "凌晨好~" + userName,
            words: "早起的鸟儿有虫吃~"
          };
        } else if (hour >= 6 && hour < 9) {
          greetingWord = {
            title: "早上好~" + userName,
            words: "来一杯咖啡开启美好的一天~"
          };
        } else if (hour >= 9 && hour < 12) {
          greetingWord = {
            title: "上午好~" + userName,
            words: "工作要加油哦~"
          };
        } else if (hour >= 12 && hour < 14) {
          greetingWord = { title: "中午好~" + userName, words: "午饭要吃饱~" };
        } else if (hour >= 14 && hour < 17) {
          greetingWord = {
            title: "下午好~" + userName,
            words: "下午也要活力满满哦~"
          };
        } else if (hour >= 17 && hour < 19) {
          greetingWord = {
            title: "傍晚好~" + userName,
            words: "下班没事问候下爸妈吧~"
          };
        } else if (hour >= 19 && hour < 21) {
          greetingWord = {
            title: "晚上好~" + userName,
            words: "工作之余品一品书香吧~"
          };
        } else {
          greetingWord = {
            title: "深夜好~" + userName,
            words: "夜深了，注意休息哦~"
          };
        }
        this.$Notice.config({
          top: 130
        });
        this.$Notice.info({
          title: greetingWord.title,
          desc: greetingWord.words,
          duration: 4,
          name: "greeting"
        });
        Cookies.set("hasGreet", 1);
      }
    },
    handleClickUserDropdown (name) {
        if (name === 'ownSpace') {

        } else if (name === 'loginout') {
            // 退出登录
            Cookies.remove('user');
            Cookies.remove('password');
            Cookies.remove('hasGreet');
            Cookies.remove('menuActive');
            Cookies.remove('activeName');
            Cookies.remove('openName');
            this.$Notice.close('greeting');
            this.$router.push({
                name: 'Login'
            });
        }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  background: #199cc4;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout .ivu-layout-header {
  padding: 0;
  background: #199cc4;
  height: 60px;
}
.layout .ivu-layout-header .ivu-menu {
  background: none;
}
.layout-logo {
  width: 200px;
  background: #13809f;
  height: 60px;
  float: left;
  color: #fff;
  position: relative;
  text-align: center;
  font-size: 22px;
}
.layout-nav {
  width: 700px;
  float: left;
  margin-left: 80px;
}
.layout-right {
  float: right;
  height: 60px;
  line-height: 60px;
  color: #ffffff;
  padding-right:20px;
  margin-top: -2px;
}
.layout-right .online-time {
  display: inline-block;
  margin-right: 20px;
  height: 100%;
}
.user-dropdown-menu-con {
  display: inline-block;
  height: 100%;
  top: -2px;
  position: relative;
}
.layout-right .ios-clock {
  padding-right: 10px;
  font-size: 18px;
}
.user-dropdown-menu-con .main-user-name {
  color: #ffffff;
}
.user-dropdown-menu-con .arrow-down-b {
  color: #ffffff;
}
.head-portrait {
  background-color: #619fe7;
  margin-left: 10px;
  background-image: url("../../assets/images//599a521472424.jpg");
  background-size: 100%;
}
</style>
