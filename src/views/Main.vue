<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" :default-active="$route.path" router>
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}}`"
        >
          <template slot="title">{{item.title}}</template>
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`menu-item-${index}-${subIndex}`"
            :index="subItem.path"
          >{{subItem.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <h3>bilibili后台管理界面</h3>
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "up主内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "课程管理", path: "/courses/list" },
          { title: "课时管理", path: "/episodes/list" }
        ]
      },
      {
        title: "用户管理",
        items: [
          { title: "基本信息", path: "/users/list" },
        ]
      },
      {
        title: "首页管理",
        items: [
          { title: "轮播", path: "/home-swipes/list" },
          { title: "封面", path: "/home-covers/list" },
          { title: "视频", path: "/home-videos/list" }
        ]
      },
    ]
  };
}
</script>

<style>
</style>