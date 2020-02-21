# Vue基础-基础选项和指令

## 基础-vue 是什么之前端现状

>**`目标`**: 了解Vue是什么 
>
>* Vue是一个优秀的**`前端框架`**  ,几乎所有前端必学.
>* 开发者按照Vue的**`规范`**进行开发
>
>**`英语水平限制你的发展`**
>
>1. 和DOM**`解耦`**  
>2. 适应当前**`SPA`**的项目开发 Single Page  Application
>3. 传统网站开发 一般来说 需求不大 传统网站就是 MPA => Muti Page Application
>4. 当下各种新框架都采用了**`类Vue`**或者**`类React`**的语法去作 为主语法
>
>     *  微信小程序 =>  借鉴了 Vue 和 React的语法 
>     *  百度小程序/支付宝/头条/..  => 借鉴了 微信小程序的做法
>
> 多端应用 => uni-app 就是Vuejs语法
>
>​                       taro 是 react语法  
>
>   滴滴  

## 基础-vue 特点

>**`目标`**了解Vue的特点  
>
>1. **`响应式数据`** 数据驱动视图  可以让我们只关注数据  Vue中数据是响应式的 => 数据变化 => 视图一定变化
>2. **`MVVM`** 双向绑定 => 数据 <=> 视图 , 数据变化 ==>视图变化 ,视图变化 => 数据变化
>3. **`指令`**增强了html功能 新特性 ,Vue扩展了html标签的功能 用指令,  angular 是最早的开发spa的MVVM框架, knockout / smartclient
>4. **`组件化开发`** => SPA => 只有一个页面 => 所有的功能都会按照组件开发

## 基础-一些链接

>**`目标`** 知道如何查阅文档
>
>[Vue官方文档](https://cn.vuejs.org/)  介绍所有的关于Vue的教程/API
>
>[Vue开源项目汇总](https://github.com/opendigg/awesome-github-vue)
>
>[Vue.js中文社区](https://www.vue-js.com/)
>
>* 所有关于Vue的问题都可以通过**`查阅文档`**解决
>
>**`任务`** 学会Vue官网官方文档 查阅资料

## 基础-vue 三种安装方式

>**`目标`**: 了解采用几种方式安装vue
>
>1. 采用本地文件引入的方式  直接下载 在页面中引入
>2. 采用 在线cdn引入的方式
>   * cdn相当于把一个文件放在了全国各地,然后你离哪里近,就从哪里调拨给你
>   * 用更快的方式获取到文件资源
>3. 采用npm安装的方式
>

现状: 都会采用npm的方式来进行正式项目开发

教学阶段: 基础部分 先采用本地引用方式的学习方式

**`任务`**: 

1. 下载一个vue.js
2. 新建一个html页面
3. 在页面中引入vue.js

## 基础-HelloWorld

>**`目标`** 掌握如何在页面中实例化 一个Vue对象	写出 hello world
>
>**`步骤`**:
>
>1. body中,设置Vue管理的视图<div id="app"></div>
>2. 引入vue.js
>3. 实例化Vue对象 new Vue();
>4. 设置Vue实例的选项:如el、data...     
>	new Vue({选项:值});
>5. 在视图中通过**`{{ }}`**使用data中的数据
>
>**`任务`**:  
>
>1. 在一个html页面中实现 将hello world显示在页面上
>

## 基础-实例选项-el

>**`目标`**:了解 Vue实例中el选项的含义
>
>- 作用:**`当前Vue实例所管理的html视图`**  在视图之外 ,就不能应用Vue特性
>- 值:通常是id选择器(或者是一个 HTMLElement 实例
>- id/class/标签/dom对象
>
>- 不要让el所管理的视图是html或者body!
>
>`注意`:  不论是什么选择器 , Vue实例只能对应选择器所选择的dom元素的**`第一个`**, Vue实例 对应视图 是 
>
>**`1 对 1`** 
>
>正常开发过程中:  只有一个Vue实例, 然后的内容都从这个实例进行派生,
>
>**`一般项目中,只有一个实例, el一般都会用id选择器`**
>
>**`任务`**
>
>1. 尝试用 id选择器 设置el 页面显示  **`跟紧老高小步跑`**
>2. 尝试用class选择器 设置el 页面显示  **`vuejs真奇妙`**
>3. 尝试 用 dom对象 设置el 页面显示    **`今天写个demo瞧一瞧`**
>4. 尝试设置 html 或者body为el 查看效果

## 基础-实例选项-data

>**`目标`**: 掌握**`响应式数据`**的操作方式 和更新方法
>
>- Vue 实例的数据对象，是响应式数据(数据驱动视图) 数据变化 => 视图变化
>- 可以通过 `vm.$data` 访问原始数据对象 =>Vue框架给所有的属性都加了$特殊符号
>- Vue 实例 **`vm`**也代理了 data 对象上所有的属性，因此访问 `vm.a` 等价于访问 `vm.$data.a`
>- 视图中绑定的数据必须**`显式`**的初始化到 data 中
>- 数据对象的更新方式 直接 采用 **`实例.属性 = 值`** ,也就是 vm.属性 = 值
>
>**`任务`**
>
>1.  将数据对象中message初始值设置为 **`天生我才必有用`**,   money为  **`13000`**, list为 数组 **`["盖茨","巴菲特","贝索斯"]`**
>2.  通过vm.属性的方式打印 以上三个属性
>3.  通过 {{ 变量名 }} 的方式 将以上三个属性显示在页面上
>4.  通过vm.属性 = 赋值的方式 改变 message为 **`千金散去还复来`** money为 **`15000`**数组为**`["盖茨","巴菲特","贝索斯","我"]`**
>

## 基础-实例选项-methods

>**`目标`**: 掌握 实例选项methods中方法的使用及注意事项
>
>- methods是一个对象,对象里面是多个方法
>- 可以直接通过 **`VM 实例`**访问这些方法，或者在**`指令/表达式中使用`**。
>- 方法中的 `this` 自动绑定为 Vue 实例**`vm`**。
>- methods中所有的方法 同样也被代理到了 Vue实例对象上,都可通过this访问
>- Vue实例代理了data中所有属性,代理了methods方法 ,定义属性或者方法时 要考虑**`重名`**问题
>- 注意，**`不应该使用箭头函数来定义 method 函数`** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined
>
>```js
>new Vue({
>el:"#app",
>data:{
>  name:"Hello world",
>  name2:"Hello world2"
>},
>methods:{
>  fn1:function(){
>      // 常规写法
>      console.log(this.name)
>      this.fn2() // 调用方法2
>  },
>  fn2() {
>      // es6 写法
>      console.log(this.name2)
>  }
>}
>})
>```
>
>**`任务:`** 
>
>1. 实例化一个Vue实例, 
>2. 定义两个属性  alipay   wechat    初始值分别为  支付宝    腾讯
>3. 定义两个方法 fn1 fn2  两个方法中分别输出 alipay   和 wechat    的值
>
>**注意** 可以在控制台中 分别调用 fn1 和 fn2方法 调用

## 基础-术语解释-插值表达式(重要)

> **`目标`**: 理解和使用插值表达式

> 作用:会将绑定的数据实时的显示出来:
>
> 形式: 通过 **`{{ 插值表达式 }}`**包裹的形式 
>
> 通过任何方式修改所绑定的数据,所显示的数据都会被实时替换(响应式数据)

{{js表达式、三元运算符、方法调用等}}

{{  a }}   纯变量形式

{{  a  = 10 }}   赋值形式

{{  a > 10  }} 逻辑判断

{{  a + b + c  }} 逻辑运算

{{  fn() }}  方法调用

{{ a > 0 ? "成功" : "失败"  }} 三元运算符

**`注意`**:不能写 `var a = 10; 分支语句 循环语句`  if  else  /for 

插值表达式不能写 关键字  var/const /let /if /else

```html
        <!-- 为所欲为 -->
        <!-- 1  纯变量形式 -->
        <!-- {{ name }} -->
        <p>名字:{{ name }}</p>
        <!-- 2 赋值形式 -->
        <p>{{ name = '朱祥亮' }}</p>
        <!-- 3 逻辑判断  -->
        <p>{{ money > 8000  }}</p>
        <!-- 4 逻辑运算 -->
        <p>{{ money - house }}</p>
        <!-- 5 方法调用 需要小括号 -->
        <p>{{ getName() }}</p>
        <!--6 三元表达式 -->
        <p>{{ money > 10000 ? '入职' : '离职' }}</p>
```

>**`任务`**
>
>1. 初始化一个Vue实例
>2. 在data中定义  msg :  **`我要成为前端程序员`**   showMessage: **`false`**, 数组: **`[1,2,3]`**
>3. 要求根据data中的数据用插值表达式输出   **`知道前端的水有多深吗`**,  false,   321（**`特别注意`**）
>
>You may have an infinite update loop in a component render function. **`有死循环`**
>
>list.reverse => 改变的是**`原数组的数据`** => 数据变化  => 视图更新 => 重新执行list.reverse()
>
>如果想要实现  list:[1,2,3]   => 显示321的效果,就需要摆脱原数组

## 基础-术语解释-指令(重要)

>**`目标:`**了解指令的基本含义 并应用一个指令
>
>* 指令 (Directives) 是带有 `v-` 前缀的特殊特性。 对于html标签的功能扩展,一个指令对应一个功能
>
>```html
><p v-text="name"></p> // 将name这个变量(data中定义的变量)给了v-text指令
><p title="name"></p> // 将name这个字符串给了title属性
>```
>
>一般的指令后面的值都是 变量表达式,
>
>* 指令特性的值预期是**`单个 JavaScript 表达式`**(`v-for` 是例外情况，稍后我们再讨论)。
>* 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
>* 指令位置:  起始标签
>
>**`语法`**  v-指令=“表达式”  如果 表达式想要是一个静态字符串 就必须这样写（用单引号包裹）  v-指令=**`" '字符串' "`**，否则会被当做一个 data数据中的变量
>
>代码示例
>
>```html
> <div v-text="'老高讲的一点都不nice'"></div>  // 如果想展示静态字符串 就需要 加单引号
>```
>
>**`任务`**: 
>
>1. 初始化一个Vue实例
>2. 定义一个data属性 name:   **`赶紧回北京吧,北漂它不香吗`**
>3. 使用v-text指令将data内容显示在p标签上
>

## 基础-系统指令-v-text 和 v-html

>**`目标`**:掌握如何使用v-text 和 v-html
>
>> 很像innerText和innerHTML
>
>- v-text:更新标签中的文本内容
>
>- v-text和插值表达式的区别
>  - v-text  更新**`整个`**标签中的内容
>  - 插值表达式: 更新标签中**`局部`**的内容
>
>- v-html:更新标签中的内容/标签
>
>- 可以渲染内容中的HTML标签
>- 注意:尽量避免使用，容易造成危险 , 因为 可以注入html标签就意味着 可以 写入script标签, 有可能造成 被不法分子共计
>
>```html
> <div id="app">
>        <!-- 插值表达式 局部替换内容-->
>        <p>肖战: {{ content }}</p>
>        <!-- 指令 v-text是替换标签内的所有内容 -->
>        <p v-text="content">
>            肖战 是程老师的偶像
>        </p>
>        <div v-text="contentHtml"></div>
>        <div v-html="contentHtml"></div>
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {
>                content: '长得好看的人如果能力强,就不可阻挡',
>                contentHtml: `<span style="font-size: 20px; color:blue"> 肖战同学如此欢迎 </span>`
>            },
>            methods: {}
>        });
>    </script>
>```
>
>
>
>**`任务`**
>
>1. 初始化一个vue实例
>2. 定义一个 数据对象 name:  **`人生最大的奢侈竟然是上班`**
>3. 分别使用v-text和插值表达式将 内容显示在p标签上
>4. 定义一个数据对象 **`nameHtml`**:  **`程序员最痛苦的是调bug`**    ,使用v-html将   显示在p标签上,并且内容为红色
>

## 基础-系统指令-v-if 和 v-show

> **`目标`**:掌握**`条件渲染`**指令的两种方式
>
> ​     根据条件决定内容的显示与否
>
> * 场景:  需要根据条件决定 元素是否显示  使用以上指令
> * 使用: v-if 和 v-show 后面的表达式返回的布尔值 来决定 该元素显示隐藏
> * **注意** :   **`v-if 是直接决定元素 的 添加 或者删除  而 v-show 只是根据样式来决定 显示隐藏`**
>
> v-if  可以 和 v-else 并用  
>
> * 如果 v-if 的表达式为 true, v-else 这个元素就不会渲染
> * 如果v-if的表达式 为false    v-else 这个元素就会渲染
>
> ```html
>     <button onclick="openLight()">开/关</button>
>     <div id="app">
>         <!-- 开灯 -->
>         <!-- 条件渲染 v-if -->
>         <!-- <div v-if="light" class='light'></div> -->
>         <!-- 关灯 -->
>         <!-- <div v-if="!light" class='night'></div> -->
>         <!-- v-else写法 -->
>         <!-- <div v-else class='night'></div> -->
>         <div v-show="light" class='light'></div>
>         <div v-show="!light" class='night'></div>
> 
>     </div>
>     <script src="./vue.js"></script>
>     <script>
>         var vm = new Vue({
>             el: '#app',
>             data: {
>                 light: true // light 为true表示开灯状态 light false表示 关灯状态
>             },
>             methods: {}
>         });
>         // 开灯
>         function openLight() {
>             vm.light = !vm.light // 数据变化  => 视图更新
>         }
>     </script>
> ```
>
> v-if决定元素是否删除或者增加 v-show决定元素 的样式 是否是display:none
>
> `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
>
> 一般来说, 用v-if 的 频率比v-show要多
>
> 因此，如果需要非常频繁地切换，则使用 `v-show` 较好；
>
> 如果在运行时条件很少改变，则使用 `v-if` 较好。
>
> 如果 切换频繁 前者 开销更大  

**`扩展`**   如果 有多个元素需要根据条件进行渲染，怎么办？我们可以用一个**`div标签`**来**`包裹多个元素`**，

但是这样的话 我们相当于**`多了一个div标签`**，我们可以采用一个**`template`**标签，来解决这个问题，template标签不会产生任何实质的标签在页面上，并且能完成相应的功能

> **`任务`**:
>
> 1. 定义一个Vue实例
> 2. 定义一个布尔型变量showMessage : **`false`**  
> 3. 分别使用v-if 和 v-show来 做一个**`开关灯`**的效果
>

## 基础-系统指令-v-on绑定事件

>**`目标:`**掌握vue绑定事件的方式
>
>* 场景:  使用v-on指令给元素绑定事件
>* 使用: 绑定 **`v-on:事件名.修饰符="方法名"`**   可使用 **`@事件名="方法名"`**
>* **`注意`** 方法 中 可以采用**`$event`**的方式传形参  也可以直接写方法名 默认第一个参数为event事件参数
>* 如果只写方法名 不写括号 =>方法中默认传入的第一个参数就是事件参数 =>event
>* **`修饰符(可不写)`**  修饰符是对于当前事件的修饰和描述
>
>- `.once` - 只触发一次回调。
> - `.prevent` - 调用 `event.preventDefault()`。表示自动帮你执行了 **`event.preventDefault()`**
>
>```html
>  <!-- v-on注册事件  v-on:事件名.修饰符="方法名" 
>      .修饰符 可不写
>     -->
>     <!-- 
>         简写方式 @事件名="方法名"
>      -->
>     <!-- 如果直接写方法名  -->
>     <div id="app">
>         <!-- 直接写方法名的形式 -->
>         <button v-on:click="happy">今天是好日子,离解封不远了</button>
>         <button @click="happy">我更开心</button>
>         <!--如果是另外一种形式  方法调用的形式-->
>         <button @click="nice($event)"> 方法调用的形式</button>
>         <!-- 带修饰符的事件  once 表示该事件只会执行一次-->
>         <button @click.once="btn">带修饰符的事件</button>
>     </div>
>     <script src="./vue.js"></script>
>     <script>
>         var vm = new Vue({
>             el: '#app',
>             data: {
>                 msg: '开心'
>             },
>             methods: {
>                 happy(event) {
>                     // 如果不写括号 第一个参数就是事件对象
>                     console.log(event)
>                     // this指向 vm实例
>                     alert(this.msg)
>                 },
>                 nice(event) {
>                     // 如果写了括号 想要获取事件参数 需要在括号中 显示的传入 $event
>                     console.log(event)
>                     alert("very nice")
>                 },
>                 // 带修饰符的方法
>                 btn() {
>                     alert("我是带修饰符的哦")
>                 }
>             }
>         });
>         // document.getElementById("btn").onclick = function (e) {
>         //     // e是 事件参数
>         // }
>     </script>
> ```
> 
> **`任务`**: 
>
>1. 初始化一个Vue实例, 定义data中name  为   **`Vuejs竟干出如此的事`**!
>2. 添加一个 input  button 
>3. 注册input**`值改变事件`** 值改变时获取 文本框内容
>4. 注册botton**`点击事件`** 点击按钮时 获取当前data对象中的name值 **`并且输出`** 



## 基础-系统指令-v-for-数组

>**`目标`**:掌握v-for循环数组的用法 
>
>* v-for 可以 根据一组数组或对象的选项列表进行渲染。
>* `v-for` 指令需要使用 `item in items` 或者 `item of items` 形式的特殊语法，
>* `items` 是源数据数组 /对象,来源于 data中的变量或者 计算属性中变量 props变量
>* **`循环生成谁,就在谁的标签上写v-for指令`**
>
>当要渲染相似的标签结构时用v-for
>
>```js
>item in items   // item为当前遍历属性数组项的值
>(item,index) in items   //item为当前遍历属性数组项的值 index为数组的索引
>
>```
>
>**`注意`** v-for写的位置 应该是重复的标签上  不是其父级元素上 需要注意
>
>```html
>  <div id="app">
>        <!-- 男生的梦中情人 -->
>        <ul>
>            <!-- v-for指令 item(自定义的一个变量名) in items(data中的变量) -->
>            <!-- 循环生成谁就在谁的标签上写v-for -->
>            <li v-for="(abc, index) in list">
>                <div>
>                    <span>94期男生的梦中情人:</span>排名第 {{ index + 1 }} 位 {{ abc }}
>                </div>
>            </li>
>            <!-- item of items 的形式 -->
>            <!-- <li v-for="abc of list">
>                <div>
>                    <span>94期男生的梦中情人:</span> {{ abc }}
>                </div>
>            </li> -->
>            <!-- <li >貂蝉</li>
>            <li>朱丽叶罗伯茨</li>
>            <li>慧伦特休斯顿</li>
>            <li>乔碧萝</li> -->
>
>        </ul>
>        <h1>女生男神排行榜</h1>
>        <!-- v-for -->
>        <div>
>            <!-- 循环生成谁在谁的标签上写 v-for -->
>            <div v-for="(item, index) in  manList">
>                <span style="font-size: 20px;color:red;font-weight: bold;">女生男神排行榜第{{ index + 1 }}位</span>
>                <span style="color: blue; font-size: 40px; ">
>                    {{ item.name }}
>                </span>
>                <!-- 这里用一个没学过的技术 v-bind -->
>                <img style="width: 300px; height: 300px;" :src="item.img" alt="">
>            </div>
>        </div>
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {
>                list: ["貂蝉", "朱丽叶罗伯茨", "慧伦特休斯顿", "乔碧萝"],
>                manList: [
>                    { name: '宋小宝', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582177684030&di=915b9ca838d8e80be6ca0e35757531d0&imgtype=0&src=http%3A%2F%2Fnews.southcn.com%2Fc%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20140409%2F90fba609961614af46f743.jpg' },
>                    { name: '肖战', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582177647121&di=7bf965adecf68ce406dbee9c8cad17c4&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F891dc03ed32eb0aa.jpg' },
>                    { name: '王一博', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582177663957&di=dc51414b558674fe5689300643e416bd&imgtype=0&src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F0d338744ebf81a4c87d74b921797445f272da6cc.jpeg%3Ftoken%3D5f7da7e2f3c7e5d1783ff778f5e59682%26s%3D6BADA1444A2A10150720F99B0300709F' }],
>            },
>            methods: {}
>        });
>
>    </script>
>```
>
>**`任务`**: 
>
>1. 初始化一个Vue实例
>2. 定义data对象中list:**`["姚明","刘翔","李娜","女排","男足"]`**
>3. 将list中的内容 v-for循环在li标签上显示
>
>**`路径`**参照代码示例

## 基础-系统指令-v-for-对象

>**`目标`**:掌握v-for循环对象的用法 
>
>
>
>```html
> <div id="app">
>        <!-- v-for 可以循环数组 也可以 循环对象 -->
>        <!-- 语法 item in items(data对象) -->
>        <!-- v-for  item 指的是value-->
>        <!-- 
>            value in items
>            (value, key, index) in items
>            值 / 键 / 索引
>         -->
>        <h1>男士的女伴的理想要求</h1>
>
>        <ul>
>            <li v-for="(value,key, index) in girlFriand">
>                {{ key }}: {{ value }} : {{ index }}
>            </li>
>        </ul>
>        <h1>女士的男伴的理想要求</h1>
>        <div>
>            <div v-for="(value, key) in boyFriand">
>                {{ key }} : {{ value }}
>            </div>
>        </div>
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {
>                // 女朋友对象
>                girlFriand: {
>                    name: '山口百惠',
>                    height: '180cm',
>                    weight: '180kg',
>                    money: '20块'
>                },
>                boyFriand: {
>                    name: '吴彦祖',
>                    car: '坦克',
>                    height: '185cm',
>                    money: '$100万'
>                }
>            },
>            methods: {}
>        });
>    </script>
>```
>
>语法:
>
>```js
>item in items  // item为当前遍历属性对象的值
>(value, key, index) in  items //value为当前遍历属性对象的值 key为当前属性名的值  index为当前索引的值
>
>```
>
>**`任务`**: 
>
>1. 初始化一个Vue实例
>2. 定义data对象中 person:   **`{ name: '王大锤' , money: 20 , car : '巨力' }`**
>3. 将person中的内容 v-for循环在li标签上显示
>
>**`路径`**参照代码示例

## 基础-系统指令-v-for-key

>**`目标`**: 掌握在 v-for循环中给循环项赋值key
>
> list数据变化 =>  数据变化  =>  vuejs 内部算法 diff(比较) =>视图发生变化
>
>- 场景:列表数据变动会导致 视图列表重新更新 为了 提升性能 方便更新 需要给循环的**`选项`**提供 一个属性 **`key`**,作为当前循环项的标识 => vuejs 内部 有个虚拟dom => diff算法 (`比较不同`)
>- 要求 给每个循环选项的key值不能重复 => 一般来说 可以用 index索引,或者说id, 只要保证在当前的list中唯一就行
>- 使用: 通常是给列表数据中的唯一值 也可以用索引值
>
>```html
>    <div id="app">
>         <ul>
>             <!-- 如果想让vuejs内部更新机制更智能 性能更好 需要给每一个循环key属性 -->
>             <!-- 可以用索引或者id -->
>             <!-- :属性="表达式" 取的是变量的值 养成写key的习惯 diff -->
>             <li v-for="(item,index ) in list" :key="index">{{ item }}</li>
>             <!-- v-for循环对象很少用 -->
>         </ul>
>     </div>
>     <script src="./vue.js"></script>
>     <script>
>         var vm = new Vue({
>             el: '#app',
>             data: {
>                 list: ["肖战", "王一博", "吴彦祖", "刘德华"]
>             },
>             methods: {}
>        });
>     </script>
> ```
> 

## 基础-表格案例-效果演示

>**`目标`**通过分析页面需求,提取案例功能点
>
>功能点:  
>
>1.  添加公司的功能
>2.  删除功能
>3.  搜索功能
>4.  列表循环 
>5.  数据不存在 显示不存在数据
>6.  时间格式

## 基础-表格案例-列表渲染

> **`目标-任务`**-完成表格案例的列表渲染
>
> **`路径`**
>
> 1. 静态页面 准备
> 2. 实例化一个Vue
> 3. 定义表格数据
> 4. 采用v-for 循环将静态内容切换为动态内容
> 5. 采用v-if控制提示消息
>
> 具体参考代码实现

## 基础-系统指令-v-bind的基本介绍

演示完示例,我们需要补充一些知识点才可以继续

> **`目标`**掌握v-bind的**`绑定一般属性`**的用法
>
> ​    v-bind指令 可以帮助我们 把data中变量绑定到标签的属性上
>
> * 作用: 绑定标签上的**`任何属性`**
> * 语法:   **`v-bind:属性="表达式"`**  或者 **`:属性=""表达式`**
>
> 示例
>
> ```html
> <div v-bind:id="变量"></div>
> <img v-bind:src="变量" />
> ```
>
>  你可能还没感觉到 v-bind 到底有什么神奇的作用, 让老高用 v-bind带你写个简易幻灯片吧
>
> **`任务`**
>
>   使用v-bind指令实现一个 可以幻灯片

### v-bind-绑定class-对象语法

> 绑定class对象语法    :class="{ class名称": 布尔值 }"
>
> ```html
>    <p :class="{left:showClass}">内容</p>
> ```
>
> **注意**: 绑定class和原生class会进行合并

### v-bind-绑定class-数组语法

绑定class数组语法 :class="[class变量1,class变量2..]"

```html
<p :class="[activeClass,selectClass]" class="default">内容</p>
```

### v-bind-绑定style-对象语法

绑定style对象语法: :style="{css属性名: 变量}"

```html
<p :style="{fonSize:fontsize}"></p>
```

**注意** css属性名 例如 font-size要写成 fontSize  以此类推

### 绑定style-数组语法

绑定style数组语法:  :style="[对象1,对象2...]"

**`注意`** 对象可以是多个属性的 集合  同样里面的css属性需要遵从小驼峰命名的规则

> 上面这么多示例,尝试写几个例子吧

## 基础-系统指令-v-model-基础用法

v-model是Vuejs双向数据流的体现

> **`目标`: **掌握v-model的基础用法
>
> **`作用`:**  和表单元素进行绑定完成双向绑定
>
>   语法:  v-model="data中的变量", v-model作用于 表单元素
>
> - 数据发生变化可以更新到界面
> - 通过界面可以更改数据
> - `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。应该在 `data`选项中声明初始值。
>
> **`任务`**
>
> 1. 实例化一个Vue实例
> 2. 定义一个数据对象 name: **`黑马程序员`**
> 3. 使用v-model实现 input和p标签的数据双向同步
>

## 基础-系统指令-v-model-`语法糖`原理

语法糖实际上就是一种复杂语法的简写形式

>**`目标`**:掌握 v-model的实现原理 
>
>实际上 v-model就是我们两种指令的一种组合   **`v-bind`**  和  **`v-on`**
>
>* v-bind:属性 =>:属性
>* v-on:事件名 =>@事件名
>
>**分析**   
>
>*  表单元素改变 => 数据发生改变
>
>  * 数据改变 => 页面变化
>
>```html
>    <div id="app">
>        <p>就业薪水:{{ money }}</p>
>        <!-- 不用v-model 用v-bind 和 v-on组合 得到双向绑定效果 -->
>        <!-- @change只能在 失去焦点的时候执行表 -->
>        <input type="text" :value="money" @input='changeInput' />
>        <!-- 监听数据的改变 -->
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {
>                money: '12k'
>            },
>            methods: {
>                changeInput(event) {
>                    // this 永远指向vm实例  vuejs内部实现的
>                    this.money = event.target.value // 拿到值之后 赋值给数据
>                }
>            }
>        });
>    </script>
>```
>
>**`任务`**:   尝试使用v-bind 和 v--on 组合出 v-model的效果

## 基础-系统指令-v-model-绑定其他表单元素

>  **`目标`**掌握 v-model绑定其他表单元素的方式
>
>  表单元素:  input  textarea checkbox radio  select 
>
>  checkbox绑定 有两种模式  1.布尔值 2.数组
>
>  **`注意`**  checkbox 在**`多选情况下`**在input标签中需要给定value值
>
>  radio 在多个的时候 也需要给value值
>
>  所有表单元素一旦绑定了 v-model  就会忽略掉 原有的value值 checked值 selected值  需要从数据对象中取默认值
>
>  ```vue
>  <div id="app">
>          <!-- input的双向绑定 -->
>          <p>{{ nameInput }}</p>
>          <input type="text" v-model="nameInput">
>          <!-- textarea的绑定 -->
>          <p>{{ nameTextArea }}</p>
>          <textarea v-model="nameTextArea" name="" id="" cols="30" rows="10"></textarea>
>          <!-- checkbox 布尔值 -->
>          <p>{{ nameCheckbox }}</p>
>          <input type="checkbox" v-model="nameCheckbox" name="" id="">结婚了没
>          <!-- checkbox 多个的时候 数组 -->
>          <p>{{ nameCheckboxs }}</p>
>          <input type="checkbox" name="" id="" value="xz" v-model="nameCheckboxs">肖战
>          <input type="checkbox" name="" id="" value="wyb" v-model="nameCheckboxs">王一博
>          <input type="checkbox" name="" id="" value="czy" v-model="nameCheckboxs">陈志远
>          <input type="checkbox" name="" id="" value="lzx" v-model="nameCheckboxs">罗志祥
>          <!-- radio的绑定 -->
>          <p>{{ nameRadio }}</p>
>          <input type="radio" name="" id="" value="man" v-model="nameRadio"> 男
>          <input type="radio" name="" id="" value="women" v-model="nameRadio"> 女
>          <input type="radio" name="" id="" value="mar" v-model="nameRadio"> 火星人
>          <!--  select的绑定 -->
>          <p>{{ nameSelect }}</p>
>          <select name="" id="" v-model="nameSelect">
>              <option value=""></option>
>              <option value="client">前端</option>
>              <option value="server">后端</option>
>              <option value="ui">UI</option>
>              <option value="test">测试</option>
>              <option value="services">运维</option>
>          </select>
>      </div>
>      <script src="./vue.js"></script>
>      <script>
>          var vm = new Vue({
>              el: '#app',
>              data: {
>                  nameInput: 'input的值',
>                  nameTextArea: 'textarea的值',
>                  nameCheckbox: false, // 1 布尔值
>                  nameCheckboxs: ['xz', 'lzx'], // 多个checkboxv-model绑定的时候 是一个数组
>                  nameRadio: 'mar', // 设置radio的选项
>                  nameSelect: 'client'  // 前端/后端/数据库/UI/测试/运维
>              },
>              methods: {}
>          });
>      </script>
>  ```
>
>  
>
>  **`任务`**:
>
>  1. 实例化一个Vue实例
>  2. input 绑定 属性 nameInput,实现input同步
>  3. textarea 绑定 属性 nameTextArea 实现textarea同步 
>  4. checkbox 绑定一个属性 nameCheckbox 实现 checkbox同步   
>  5. 多个 checkbox绑定同一个属性 nameCheckboxs 实现 checkbox同步   北京 上海 天津
>  6. radio 绑定属性 nameRadio 实现同步  男 女 
>  7. select  绑定属性 nameSelect 实现同步  北京 上海 天津 
>
>  **`路径`**参照实例代码

## 基础-系统指令-v-cloak  和 v-once 和 v-pre的使用

> **`目标`**掌握 v-cloak/ v-once / v-pre 指令的使用
>
> **`v-cloak`**  
>
> * 场景: 当页面初次渲染, 页面模板闪屏现象,可以用v-cloak解决
>
>           1. 编写元素标签
>           2. 写入v-cloak指令
>           3. 将v-cloak指令 属性加上style
>
>    **`注意`**  可以一次性 将v-cloak引用在实例视图上  避免多次写入标签
>
> ```html
> <div v-cloak id="app">
>    <p>{{ name }}</p>
>    <p>{{ name }}</p>
>    <p>{{ name }}</p>
>    <p>{{ name }}</p>
>    <p>{{ name }}</p>
>    <p>{{ name }}</p>
>  </div>
> ```
>
> ```css
> [v-cloak] {
>      display: none;
>  }
> ```
>
> **`任务`**
>
> 1. 使用v-cloak解决页面闪烁问题
>
> **`v-once`** 
>
> 场景:  当只需要对数据进行首次渲染的时候,可以采用v-once指令
>
> 作用: 使得所在元素只渲染一次  
>
> 只需要在标签上写上 v-once指令即可
>
> ```html
> <div v-once>{{ name }}</div>
> ```
>
> **`注意`** **`千万不要`**在你的根元素上写v-once, 因为写之后, 就会造成整个的vue视图 没有更新
>
> **`v-pre`** 
>
> 场景: 假如你不希望Vue对你节点下的内容进行编译渲染,可以使用v-pre 指令让渲染**`跳过`**该节点
>
> ```html
> <div v-pre >{{ name }}</div> // 将会跳过此节点 不进行编译
> ```

**`任务`**

## 基础-表格案例-添加数据

>**`目标- 任务`**  实现在表格案例中 添加商品
>
>**`路径`**:  添加商品 
>
>1. 注册点击按钮事件, 绑定添加方法
>2. 声明一个变量 v-model双向绑定 input
>3.  添加方法中 unshift添加数据
>4. 清空 输入框
>5.   通过v-bind:disabled控制按钮是否可点
>
>(指令)v-model => 也有修饰符
>
>**`指令.修饰符 = "表达式"`**
>
>**`v-model.trim`** = "变量"  =>trim  输入首尾空格过滤

## 基础-表格案例-删除删除

>**`目标- 任务`**  实现在表格案例中 删除商品
>
>**`路径`**:  删除商品 
>
>   1. 注册删除点击事件
>
>​    2.通过方法传递当前删除的索引
>
>    3. 实现删除逻辑
>
>```js
>        // 删除元素的方法
>        delItem(i) {
>          // 需要知道删除谁 
>          // 根据 索引 从数组中移除数据
>          if (confirm("您是否要删除此条数据?")) {
>            // 如果确定要删除了
>            // this.list.splice(i, 1) // 移除数据 第一种
>            // filter是返回一个新数组 
>            // filter方法 filter(function() {  return 条件表达式(true => 选项就会返回插入新数组) false => 就不返回 })
>            // 第二种
>            // this.list = this.list.filter(function (item, index) { return index !== i }) // 找出删除数据之外的所有的数据 
>            // 第三种
>            this.list = this.list.filter((item, index) => index !== i)
>          }
>        }
>```
>
>

## 基础-过滤器-过滤器的分析及全局-局部过滤器

>**`目标`**: 了解过滤器的功能 作用以及作用场景
>
>* 场景: data中的数据格式(日期格式/货币格式/大小写等)需要数据时 将原始数据  =>  过滤器 => 显示数据 (**`并不会改变原始数据`**)
>* 使用位置:{{ }}和v-bind="表达式"
>* 具体用法:{{ msg | 过滤器名字 }}  | 我们称之为**`管道`**
>* 分类:  过滤器分为**`局部`**和**`全局`**
>
>全局过滤器:  一旦注册, 在**`所有`**的Vue实例或者组件实例都可以使用
>
>局部过滤器: **`只能`**在注册的Vue或者组件实例上使用
>
>注意**`: 全局过滤器应该在Vue实例化之前注册`**
>
>全局注册的方式 :  Vue.filter(过滤器名称,  **`过滤器函数`**)  
>
>**`过滤器必须有返回值`**
>
>```js
>        // 全局过滤器 可以被所有的vue实例或者组件实例使用
>        // 局部过滤器 注册在实例上的 只能在注册的实例上使用
>        // 注意: 全局过滤器应该在Vue实例化之前注册
>        // 语法: Vue.filter(名称, 函数)
>        Vue.filter("changeName", function (value) {
>            // 过滤器函数 => 王际霖 => 王建霖
>            // map 和filter一样都是得到新数组
>            return value.split('').map(function (item, index) {
>                if (index === 1) {
>                    return "建"
>                }
>                return item
>            }).join("")
>        })
>```
>
>局部注册的方式     filters(实例选项) : {  过滤器名称 :  **`过滤器函数`**  }
>
>```js
>            filters: {
>                // 对象 value代表 管道前面的表达式传递的值
>                changeName2: function (value) {
>                    return value.split('').map(function (item, index) {
>                        if (index === 2) {
>                            return "战"
>                        }
>                        return item
>                    }).join("")
>                }
>            }
>```
>
>过滤器函数的第一个参数 是 **`管道`**前面的计算结果值
>
>**`注意`**: 过滤器中 **`this`**不指向vue 实例,  因为没必要,过滤器主要完成的工作是**`处理数据的格式`**问题

使用: 

```html
<div> {{ name | 过滤器名称 }} </div>
```

**`任务`**  尝试做一个将abc转成Abc的过滤器吧 (全局/局部)

```vue
    <div id="app">
        <p>{{ str |  transUpper}}</p>
        <input type="text" v-model="str">
    </div>
    <script src="./vue.js"></script>
    <script>
        // 做一个 abc 转成 Abc的例子
        // Vue.filter("transUpper", function (value) {
        //     return value.charAt(0).toUpperCase() + value.substr(1)
        // })
        var vm = new Vue({
            el: '#app',
            data: {
                str: 'abc'
            },
            methods: {},
            filters: {
                transUpper: function (value) {
                    return value.charAt(0).toUpperCase() + value.substr(1)
                }
            }
        });
    </script>
```



### 过滤器的串联和参数传递

>  过滤器可以传递参数,第一个参数**`永远`**是前面传递过来的过滤值, 从第二个参数开始就是传递的过滤器参数
>
>  ```vue
>  {{  msg | 过滤器名称(1,2,3) }}
>  ```

>  过滤器也可以多个串行起来并排使用  用法就是 用多个 **`管道`** 间隔
>
>  ```vue
>  {{ msg | 过滤器1 | 过滤器2 }}
>  ```

**`任务`**  尝试实现一个过滤器, 根据传入的**`索引值`** 找到对应的字符串 转成大写 并显示

```js
  <div id="app">
        <!-- 过滤器串联 -->
        <p>{{ name | transUpper(3) | reverseStr }}</p>
        <input type="text" v-model="name">
    </div>
    <script src="./vue.js"></script>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                name: 'abc'
            },
            methods: {},
            filters: {
                // value => 过滤器的第一个参数  => 管道前面 表达式计算的值
                transUpper: function (value, i) {
                    // return value + '同学,How do you feel ?'
                    return value.split("").map(function (item, index) {
                        if (index === i) {
                            // 如果找到了第n个 就把第n个转成大写
                            return item.toUpperCase()
                        }
                        return item  // 别的字符不动
                    }).join("")
                },
                // 字符串翻转的过滤器 必须要返回
                reverseStr(value) {
                    return value.split("").reverse().join("")
                }
            }
        });
    </script>
```

## 基础-表格案例-使用过滤器完成日期 格式处理

>**`目标-任务`**利用所学过滤器知识 完成日期格式处理
>
>​       路径:实现列表中日期的格式化
>
>​       1 . 引入 第三方格式化日期插件 
>
>​       2 . 定义格式化日期过滤器
>
>​       3.  实现其格式化功能 
>
>​       4 .  使用过滤器
>
>```js
>      filters: {
>        // 格式化日期的过滤器 value就是我们的日期
>        formatDate(value) {
>          return moment(value).format("YYYY-MM-DD HH:mm:ss")
>        }
>      }
>```
>
>**`路径`**: 参照实现代码

## 基础-ref 操作 DOM

vuejs是以数据为中心, 几乎不用操作dom, 但是有的情况还是需要

>**`目标`**掌握如何通过ref来获取dom对象
>
>* 作用: 通过ref特性可以获取元素的dom对象
>
>* 使用:  给元素定义 ref属性, 然后通过**`$refs`**.**`名称`** 来获取dom对象
>
>```html
><input type="text" ref="myInput" /> // 定义ref
>
>```
>
>```js
>focus() {
>     this.$refs.myInput.focus();
>}  // 获取dom对象 聚焦
>```
>
>**`任务`**  通过ref功能,点击按钮时获取input的value值 
>
>1. 实例化Vue实例
>2. 定义input的ref属性
>3. 注册按钮事件
>4. 按钮事件中通过ref获取input的value内容
>
>**`路径`**: 参照实现代码
>
>**`注意`**:   项目1 项目2 期间 => ref => ref不仅仅可以作用在h5标签上,还可以作用在 **`组件`**上 =>组件对象
>
>```vue
>    <div id="app">
>        <!-- 写入一个input标签 -->
>        <!-- 定义一个ref属性 -->
>        <input type="text" ref="myInput" />
>        <!-- <div></div>
>        <p></p>
>        <span></span>
>        <img src="" alt=""> -->
>        <button @click="getValue">按钮</button>
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {
>                name: ''
>            },
>            methods: {
>                getValue() {
>                    //  获取 input的value内容
>                    alert(this.$refs.myInput.value)
>                }
>            }
>        });
>    </script>
>```
>
>

## 基础-自定义指令-全局.局部自定义指令

全局 => 所有vue实例都可用

局部 => 只有当前实例可用

> **`目标`**掌握如何全局/局部自定义一个指令
>
> v-text/v-html v-if/v-else /v-show/ v-on/v-bind/v-model/v-cloak/v-once/v-pre/v-for  系统指令
>
> 除了可以使用vue给的系统指令,我们也可以自定义指令
>
> - 使用场景:需要对普通 DOM 元素进行操作，这时候就会用到自定义指令 
> - 分类:全局注册和局部注册
>
> * **`全局注册自定义指令`**:   Vue.directive("**`指令名称`**", { 
>
> ​    **`inserted`** (dom, option) {} , // 当前元素插入dom文档之后执行
>
> ​     **`update`**(dom, option) {}  // 当指令后面表达式的值发生变化时执行
>
> })
>
> * **`局部自定义指令`** :  注册在 实例的选项上
>
>   directives: {
>
> "**`指令名称`**", { 
>
> ​    **`inserted`** (dom, option) {} , // 当前元素插入dom文档之后执行
>
> ​     **`update`**(dom, option) {}  // 当指令后面表达式的值发生变化时执行
>
> ​    }
>
>   }
>
> * dom 指的是 指令作用的 dom元素
> * option指的是 指令后面的表达式的内容对象
>
>  注意: 我们需要在**`创建Vue实例之前`** 进行 全局自定义指令的注册
>
> ​           指令名称:  **`不用写v-前缀`**

```js
 // 定义指令
// 自定义指令是不需要加v-前缀的
// 第二个参数为一个对象  对象中要实现 inserted的方法
// inserted中的参数为当前指令所在元素的dom对象
Vue.directive("focus", {
        inserted(dom) {
          dom.focus();
        }
});
```

>**`任务`** 实现一个可以自动聚焦input的自定义指令(全局/局部)v-focus
>
>```vue
>    <div id="app">
>        <input v-focus type="text">
>    </div>
>    <script src="./vue.js"></script>
>    <script>
>        var vm = new Vue({
>            el: '#app',
>            data: {},
>            methods: {},
>            directives: {
>                "focus": {
>                    // inserted 当指令作用的 元素被创建的时候执行
>                    inserted(dom) {
>                        // dom就是一个表单的对象
>                        dom.focus() // 调用聚焦的方法
>                    },
>                }
>            }
>        });
>    </script>
>    <!-- 实现一个自动聚焦的指令  只能作用在表单上 -->
>```
>
>

## 基础-表格案例-使用自定义指令完成自动获取焦点功能

> **`目标-任务`**在表格案例中 实现自定义指令 完成 输入框自动聚焦功能

## 基础-实例选项-计算属性-体验及基本使用

> **`目标`** 掌握实例选项中计算属性的基本含义
>
> 例子: **`翻转一个data中的字符串 显示在页面上`**
>
> * 场景:当表达式过于复杂的情况下 可以采用计算属性进行封装 对于任何复杂逻辑都可以采用计算属性
>
> 需要在页面上展示**`过于复杂的计算结果`**的时候, 可以**`考虑封装计算属性`**
>
> * 使用: 在Vue实例选项中 定义 **`computed`**:{ 计算属性名: **`带返回值`**的函数 }
>
> * 说明: 计算属性的值 依赖 数据对象中的值  数据对象发生改变 => 计算属性发生改变=> 视图改变
>
> * 计算属性**`必须有返回值`** 相当于对插值表达式**`逻辑的一次封装`**
>
> * methods方法和计算属性的区别
>
> * 1 使用时 方法必须写括号**`()`**,计算属性直接写 计算属性名
>
> * 2 计算属性有**`缓存机制`** => 计算属性依赖 data中的数据 => 第一次执行计算属性完毕之后,计算属性会将计算结果放入缓存 => 第二次执行计算属性时 => 发现计算属性依赖的数据没有变化 => 从缓存中获取缓存,不再执行计算属性逻辑
>
> * 计算属性可以抽提复杂的逻辑 /还比方法的效率更高
>
>   ```js
>               // 所有的计算属性都写在computed中
>               computed: {
>                   // 效率是更高的 
>                   // 计算属性不能和方法重名 不能和data数据重名
>                   reverseStr() {
>                       console.log("执行计算属性")
>                     // this 指向vm实例 计算属性必须有返回值
>                       return this.name.split("").reverse().join("")
>                 }
>               }
>   ```
>   
>   计算属性 和 methods方法的区别: 
>   
>   * 计算属性不需要调用形式的写法  而methods方法必须采用 方法() 调用的形式
>   * 计算属性依赖data中的数据变化,如果data并没有发生变化,则计算属性则会取缓存的结果,
>   * methods不论data变化与否都会重新调用
>
> **`任务`:**通过计算属性 实现工资的计算

## 表格案例-用计算属性实现数据搜索

>**`目标-任务`**在表格案例中使用计算属性实现商品搜索`
>
>* 搜索框内容变化=> 列表内容变化
>
>* 计算属性:  依赖 输入值和 列表的变化实现
>
>​       使用计算属性实现品牌搜索
>
>​      1  定义 品牌搜索的内容
>
>​      2  定义计算属性 
>
>​      3  实现计算属性的筛选功能
>
>​      4  计算属性替换原有得列表数据
>
>```js
>  // 定义计算属性
>      computed: {
>        // 通过 输入的搜索内容 和列表内容 筛选出我们要的结果
>        // 计算属性必须要有返回值
>        filterList() {
>          // this指向 vm实例
>          //   this.list // 数组
>          // 关键字
>          // 搜索功能 在一个数组中 搜索和关键字相关的数据
>          return this.list.filter((item) => {
>            // 筛选条件 返回一个条件表达式
>            return item.name.includes(this.searchVal)
>          })
>        }
>      }
>```
>
>用到了 数组的filter筛选功能  和 字符串的 includes校验功能
>

当data中无法完成复杂逻辑时,通通可以在**`计算属性`**中实现

计算属性比 方法 的性能更高 => 缓存机制