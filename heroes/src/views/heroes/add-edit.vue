<template>
  <div>
    <h2 class="sub-header">{{ btnText }}英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <!-- v-model的修饰符 trim  -->
        <input
          v-model.trim="formData.name"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入您的姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          v-model.trim="formData.gender"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入您的性别"
        />
      </div>
      <button @click.prevent="saveHero" class="btn btn-success">{{ btnText }}英雄</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // 定义对象的目的是 : 当我们获取数据的时候 可以直接用对象获取所有的字段数据
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    // 定义保存英雄方法
    // 保存英雄方法 有两种情景 一种是添加 一种是编辑
    saveHero() {
      // 首先应该判断 姓名和性别不能为空啊
      if (this.formData.name && this.formData.gender) {
        //  都存在才能保存
        // 调用新增接口 restful => get /put /post /delete
        if (this.$route.params.id) {
          // 应该调用 编辑接口
          this.$axios
            .put(`/heroes/${this.$route.params.id}`, this.formData)
            .then(() => {
              // 一旦成功了 说明编辑成功了  回到列表页
              this.$router.push("/heroes"); // 回到列表页
            });
        } else {
          // 应该调用新增接口
          this.$axios.post("/heroes", this.formData).then(() => {
            // 一旦进入then 说明新增成功了
            // 回到列表页
            //
            this.$router.push("/heroes"); // 回到列表页
          });
        }
      } else {
        alert("兄嘚,得填全啊");
      }
    },
    // 加载对应的英雄
    loadHero() {
      if (this.$route.params.id) {
        // 如果id存在 表示 当前有id  表示当前是修改状态
        this.$axios.get(`/heroes/${this.$route.params.id}`).then(result => {
          //   获取到对应英雄的数据
          this.formData = result.data; // 将数据赋值给formData
        });
      }
    }
  },
  created() {
    this.loadHero(); // 实例创建完毕 就加载英雄数据
  },
  // 计算属性 有缓存机制
  computed: {
    btnText() {
      return this.$route.params.id ? "编辑" : "添加";
    }
  }
};
</script>

<style>
</style>