<template>
  <div>
    <h1>生命周期组件</h1>
    <div ref="test">123</div>
    <P>{{ name }}</P>
    <input type="text" v-model="name" />
    <P>{{ age }}</P>
    <input type="text" v-model="age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      age: 18
    };
  },
  // 先执行 beforeCreate
  beforeCreate() {
    // 一般不会在 这里面进行实际的操作
    console.log("初始化实例完成之前执行 beforeCreate");
  },
  created() {
    // 表示 实例已经初始化完毕
    // 可以去加载数据 操作数据了 一般可以在created 获取数据 操作数据
    console.log("初始化实例完成之后执行 created");
  },
  // 页面渲染周期
  beforeMount() {
    // 会在 当前页面渲染完成之前执行
    // 也是可以加载数据的 但是注意 这里并不能获取 dom元素
    // 也可以用来加载数据
    console.log("页面渲染之前执行beforeMount");
    console.log(this.$refs.test);
  },
  mounted() {
    // 一般会在mounted中对元素 进行获取和操作
    // mounted也可以用来加载数据
    // 会在渲染完成之后执行
    console.log("页面渲染之后执行 mounted");
    console.log(this.$refs.test);
  },
  // 不论你有多少数据 只要变化 就会执行 数据更新前后的事件
  // 真正的场景中 几乎不做任何事情
  // 怎么去监听数据的变化呢 ?
  // watch  => 监听谁就写谁的名字
  beforeUpdate() {
    // 数据更新之前执行
    console.log("数据更新之前执行 beforeUpdate");
  },
  updated() {
    // 数据更新之后执行
    console.log("数据更新之后执行 updated");
  },
  // 组件或者实例销毁前后
  beforeDestroy() {
    // 这里一般用作 取消页面中的定时器
    // 因为 这个时候还没有卸载, this 还有东西,
    // 因为页面中的定时器有可能会操作当前的实例 如果不取消 会造成错误
    console.log("组件销毁之前执行 beforeDestroy");
    // 一般的时候会在 beforeDestory中做什么事情 => 一般取消之前定义的定时器
    // 因为如果不销毁定时器 就有可能造成错误
  },
  destroyed() {
    // 表示 组件已经销毁了, 一般做不了任何的操作
    console.log("组件销毁之后执行 destroyed");
  }
};
</script>

<style>
</style>