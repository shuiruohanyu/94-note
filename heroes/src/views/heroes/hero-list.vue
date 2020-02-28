<template>
  <!-- 英雄列表组件 -->
  <div class>
    <h2 class="sub-header">英雄列表</h2>
    <!-- 导航跳转 -->
    <router-link class="btn btn-success" to="/add-edit">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for 循环生成谁在谁的标签上写v-for -->
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <router-link :to="`/add-edit/${item.id}`">编辑</router-link>&nbsp;&nbsp;
              <a href="#" @click.prevent="delItem(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 引入axios插件
// import axios from "axios";
export default {
  name: "hero-list",
  data() {
    return {
      // 响应式数据
      list: [] // 接收英雄列表的数据
    }; // 因为组件数据是独立的
  },
  methods: {
    //  定义方法
    loadData() {
      // 将 原来的地址 优化成 新地址
      // this.$axios.get("http://localhost:3001/heroes").then(result => {
      //   // 拿到了result数据 赋值给 list axios封装了一层数据 我们应该取data
      //   this.list = result.data;
      // });
      this.$axios.get("/heroes").then(result => {
        // 拿到了result数据 赋值给 list axios封装了一层数据 我们应该取data
        this.list = result.data;
      });
    },
    delItem(id) {
      // 友好的提示一下
      if (confirm("您是否要删除此条数据啊?")) {
        // 调用删除接口
        this.$axios.delete(`/heroes/${id}`).then(() => {
          // 如果删除成功了 会进入到then方法中
          this.loadData(); //重新拉取数据
        });
      }
    }
  },
  created() {
    // 实例创建完成事件
    this.loadData(); // 获取列表数据
  }
};
</script>

<style>
</style>