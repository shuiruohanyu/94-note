<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>
        <!-- 这个位置应该是 容器 承载组件的变化 -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
        <!-- 英雄列表组件 -->
        <!-- <app-list></app-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./app-header"; // 引入头部组件
import appSideBar from "./app-sidebar"; //引入侧边栏组件
import appList from "./app-list"; // 引入英雄列表组件
export default {
  name: "app",
  components: {
    "app-header": appHeader, // 完成组件注册
    "app-sidebar": appSideBar, // 完成侧边栏组件的注册
    "app-list": appList // 完成对英雄列表的注册
  }
};
</script>

<style>
</style>
