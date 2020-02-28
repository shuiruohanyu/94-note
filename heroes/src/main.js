import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'  // import  '地址'  表示直接引入 并不需要对该对象进行操作
import './assets/index.css' // 引入样式基础样式
import axios from 'axios'
// 将axios赋值给Vue的原型属性  Vue的所有属性都以$为开头 这是一个约定
// 对axios进行统一的请求头地址设置 这个地址 就是所有的重复的协议: 端口
axios.defaults.baseURL = "http://localhost:3001"
// 如果请求的时候 有其他域名的地址 直接完整地址即可 就会自动忽略 baseURL
Vue.prototype.$axios = axios

// 组件就是一种特殊 Vue实例 派生自Vue
// 一般不把鸡蛋放到一个篮子里 
import router from './router'
new Vue({
  el: '#app',
  router, // 挂载
  render: h => h(App)
})
