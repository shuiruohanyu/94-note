import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'  // import  '地址'  表示直接引入 并不需要对该对象进行操作
import './assets/index.css' // 引入样式基础样式
// 一般不把鸡蛋放到一个篮子里 
import router from './router'
new Vue({
  el: '#app',
  router, // 挂载
  render: h => h(App)
})
