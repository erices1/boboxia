<template>
  <div class="sidebar" :style="{height:minHeight,position:'fixed'}">
    <slot></slot>
    <Menu mode="vertical" :active-name="activeName" :open-names="openName" width="200px" @on-select="selectName" @on-open-change="changeOpenMenu">
        <Submenu :name="item.id" v-for="item in leftMenu" :key="item.id">
          <template slot="title">
            <Icon :type="item.icon"></Icon>
            {{item.title}}
          </template>
          <MenuItem :name="itemchild.url" v-for="itemchild in item.child" :key="itemchild.url">{{itemchild.title}}</MenuItem>
        </Submenu>
    </Menu>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      minHeight: "",
      activeName: "", //选中的菜单
      openName: [],
      leftMenu: this.toLeftMenu,//父组件传来的侧边菜单
    };
  },
  props:["toLeftMenu"],
  created() {
    this.minHeight = document.body.clientHeight - 60 + "px";
    // 侧边导航选中
    let activeName = Cookies.get("activeName");
    if (!activeName) {
      this.activeName = this.toLeftMenu[0].child[0].url;
    } else {
      this.activeName = activeName; //不为空时选中最近一次菜单
    }
    // 侧边菜单展开
    let openN = Cookies.get("openName");
    if (!openN) {
      let arr = [];
      arr.push(this.toLeftMenu[0].id);
      this.openName = arr; //默认展开第一个

    } else {
      this.openName = JSON.parse(openN);
    };
  },
  methods: {
    selectName(name) {
      Cookies.set("activeName", name);
    },
    changeOpenMenu(name) {
      this.openName = name;
      Cookies.set("openName", name);
    }
  }
};
</script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #3d464d;
  border-right: 1px solid #ffffff;
}
.sidebar .ivu-menu-light {
  background: none;
}
.sidebar>>>.ivu-menu-vertical
  .ivu-menu-child-item-active
  > .ivu-menu-submenu-title {
  color: #ffffff !important;
}
.sidebar .ivu-menu-item,
.sidebar>>>.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-submenu-title {
  color: #cccccc;
}
.sidebar .ivu-menu-item:hover {
  color: #ffffff;
}
.sidebar .ivu-menu-submenu .ivu-menu-item:hvoer {
  color: #ffffff;
}
.sidebar>>>.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  background: none;
}
.sidebar .ivu-menu .ivu-menu-item-active:hover:not(.ivu-menu-submenu),
.sidebar .ivu-menu .ivu-menu-item-active:not(.ivu-menu-submenu) {
  color: #ffffff;
  border-right: 2px solid #13809f;
  background: #199cc4;
}
.sidebar .ivu-menu-vertical .ivu-menu-item:hover {
  background: none;
}
</style>

