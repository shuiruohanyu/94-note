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

>**`目标`** 掌握如何在页面中实例化 一个Vue对象	写出hello world
>
>**`步骤`**:
>
>1. body中,设置Vue管理的视图<div id="app"></div>
>2. 引入vue.js
>3. 实例化Vue对象 new Vue();
>4. 设置Vue实例的选项:如el、data...     
>	new Vue({选项:值});
>5. 在视图中通过{{ }}使用data中的数据
>
>**`任务`**:  
>
>1. 在一个html页面中实现 将hello world显示在页面上
>
>

## 基础-实例选项-el

>**`目标`**:了解 Vue实例中el选项的含义
>
>- 作用:**`当前Vue实例所管理的html视图`**  在视图之外 ,就不能应用Vue特性
>- 值:通常是id选择器(或者是一个 HTMLElement 实例)
>- 不要让el所管理的视图是html或者body!
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
>- 数据对象的更新方式 直接 采用 **`实例.属性 = 值`**
>
>**`任务`**
>
>1.  将数据对象中message初始值设置为 **`天生我才必有`**,   money为  **`13000`**, list为 数组 **`["盖茨","巴菲特","贝索斯"]`**
>2.  通过vm.属性的方式打印 以上三个属性
>3.  通过 {{ 变量名 }} 的方式 将以上三个属性显示在页面上
>4.  通过vm.属性 = 赋值的方式 改变 message为 **`千金散去还复来`** money为 **`15000`**数组为**`["盖茨","巴菲特","贝索斯","我"]`**
>

## 基础-实例选项-methods

>**`目标`**: 掌握 实例选项methods中方法的使用及注意事项
>
>- methods是一个对象
>- 可以直接通过 VM 实例访问这些方法，或者在**`指令表达式中使用`**。
>- 方法中的 `this` 自动绑定为 Vue 实例。
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

**`注意`**:不能写 `var a = 10; 分支语句 循环语句`

```html
<!-- js表达式 -->
<p>{{ 1 + 2 + 3 }}</p>
<p>{{ 1 > 2 }}</p>
<!-- name为data中的数据 -->
<p>{{ name + ':消息' }}</p> 
<!-- count 为data中的数据 -->
<p>{{ count === 1 }}</p>
<!-- count 为data中的数据 -->
<p>{{ count === 1 ? "成立" : "不成立" }}</p>
```

```html
<!-- 方法调用 -->
<!-- fn为methods中的方法 -->
<p>{{ fn() }}</p>

```

>**`任务`**
>
>1. 初始化一个Vue实例
>2. 在data中定义  msg :  **`我要成为前端程序员`**   showMessage: **`false`**, 数组: **`[1,2,3]`**
>3. 要求根据data中的数据用插值表达式输出   **`知道前端的水有多深吗`**,  false,   321（**`特别注意`**）
>
>You may have an infinite update loop in a component render function. **`有死循环`**
>

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
>* 指令特性的值预期是**`单个 JavaScript 表达式`**(`v-for` 是例外情况，稍后我们再讨论)。
>
>* 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
>
>* 指令位置:  起始标签
>
>**`语法`**  v-指令=“表达式”  如果 表达式想要是一个字符串 就必须这样写（用单引号包裹）  v-指令=**`" '字符串' "`**，否则会被当做一个 data数据中的变量
>
>代码示例
>
>```html
><p v-text="'我是p标签的内容'"></p>
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
>- v-text:更新标签中的内容
>
> - v-text和插值表达式的区别
>   - v-text  更新**`整个`**标签中的内容
>   - 插值表达式: 更新标签中**`局部`**的内容
>
>- v-html:更新标签中的内容/标签
>
> - 可以渲染内容中的HTML标签
> - 注意:尽量避免使用，容易造成危险 (XSS跨站脚本攻击)
>
> ```html
> <div id="app">
>         <!-- v-text指令的值会替换标签内容 -->
>         <p>{{str}}</p>
>         <p v-text="str"></p>
>         <p v-text="str">我是p标签中的内容</p>
>         <p v-text="strhtml">我是p标签中的内容</p>
>         <p v-html="str"></p>
>         <!-- v-html指令的值(包括标签字符串)会替换掉标签的内容 -->
>         <p v-html="strhtml">我是p标签中的内容</p>
>     </div>
>     <script src="./vue.js"></script>
>     <script>
>         new Vue({
>             el: '#app',
>             data: {
>                 str: 'abc',
>                 strhtml: '<span>content</span>'
>             }
>         });
>     </script>
> ```
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

> **`目标`**:掌握条件渲染指令的两种方式
>
> * 场景:  需要根据条件决定 元素是否显示  使用以上指令
>
> * 使用: v-if 和 v-show 后面的表达式返回的布尔值 来决定 该元素显示隐藏
>
> * **注意** :   **`v-if 是直接决定元素 的 添加 或者删除  而 v-show 只是根据样式来决定 显示隐藏`**
>
> ```html
> <div id="app">
>      <!-- 如果isShow的值是true ,就显示p标签 -->
>      <p v-if="isShow">我是p标签中的内容</p>
>      <p v-show="isShow">我是p标签中的内容</p>
>      <!-- 如果标签显示与隐藏切换频繁, 就使用v-show 
>          v-show本质是通过修改标签的display值
>      -->
>  </div>
>  <script src="./vue.js"></script>
>  <script>
>      new Vue({
>          el: '#app',
>          data: {
>              isShow: false
>          }
>      });
>  </script>
> ```
>
> `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。
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
> 3. 分别使用v-if 和 v-show来 做一个开关灯的效果
>

## 基础-系统指令-v-on绑定事件

>**`目标:`**掌握vue绑定事件的方式
>
>* 场景:  使用v-on指令给元素绑定事件
>* 使用: 绑定 v-on:事件名.修饰符="方法名"   可使用 @事件名="方法名的方式"
>* **注意** 方法名 中 可以采用$event的方式传形参  也可以直接写事件名 默认第一个参数为event事件参数
>* 如果只写方法名 不写括号 =>方法中默认传入的第一个参数就是事件参数 =>event
>* **`修饰符(可不写)`**
>
>- `.once` - 只触发一次回调。
> - `.prevent` - 调用 `event.preventDefault()`。
>
>```html
><div id="app">
>  <!-- v-on:xx事件名='当触发xx事件时执行的语句' -->
>       <!-- 执行一段js语句:可以使用data中的属性 -->
>       <button v-on:click="count += 1">增加 1</button>
>       <!-- v-on的简写方法 -->
>       <button @click="count += 1">增加 1</button>
>       <!-- 执行一个方法 -->
>       <button @click="add">增加 1</button>
>       <!-- 执行一个方法、这种写法可以传形参 -->
>       <button @click="fn1(count)">执行fn1方法</button>
>       <!-- 执行一个方法、这种写法可以传形参,特殊的形参$event -->
>       <button @click="fn2($event)">执行fn2方法</button>
>       <hr>
>       <!-- v-on修饰符 如 once: 只执行一次 -->
>       <button @click.once="fn4">只执行一次</button>
>    
>  <p>上面的按钮被点击了 {{ count }} 次。</p>
>    </div>
>   <script src="./vue.js"></script>
>   <script>
>      new Vue({
>           el: '#app',
>           data: {
>               count: 0,
>               items: ['a', 'b', 'c']
>           },
>           methods: {
>               add: function() {
>                   this.count += 1;
>               },
>               fn1: function(count) {
>                   console.log(count);
>                   console.log('fn1方法被执行');
>               },
>               fn2: function(e) {
>                   console.log(e);
>                   console.log('fn2方法被执行');
>               },
>               fn3: function(index) {
>                   console.log(index);
>                   console.log('fn3方法被执行');
>               },
>               fn4: function() {
>                   console.log('fn4方法被执行了');
>               }
>           }
>       });
>    </script>
>
>```
>
>**`任务`**: 
>
>1. 初始化一个Vue实例, 定义data中name  为   **`Vuejs竟干出如此的事`**!
>2. 添加一个 input  button 
>3. 注册input**`值改变事件`** 值改变时获取 文本框内容
>4. 注册botton**`点击事件`** 点击按钮时 获取当前data对象中的name值 **`并且输出`** 



## 基础-系统指令-v-for-数组

>**`目标`**:掌握v-for循环数组的用法 
>
>* 根据一组数组或对象的选项列表进行渲染。
>* `v-for` 指令需要使用 `item in items` 或者 `item of items` 形式的特殊语法，
>* `items` 是源数据数组 /对象
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
><!DOCTYPE html>
>  <html lang="en">
>   
>  <head>
>           <meta charset="UTF-8">
>           <meta name="viewport" content="width=device-width, initial-scale=1.0">
>           <meta http-equiv="X-UA-Compatible" content="ie=edge">
>           <title>Document</title>
>       </head>
>    
>  <body>
>           <div id="app">
>               <!-- v-for作用:列表渲染,当遇到相似的标签结构时,就用v-for去渲染
>                   v-for="数组中的元素 in data中的数组名"
>               -->
>               <!-- 数组 -->	
>               <p v-for="item in list">{{item}}</p>
>           </div>
>           <script src="./vue.js"></script>
>           <script>
>               new Vue({
>                   el: '#app',
>                   data: {
>                       list: ['a', 'b', 'c'],
>                   },
>                   methods: {
>    
>              }
>               })
>           </script>
>       </body>
>    
> </html>
>
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
>```html
><!DOCTYPE html>
><html lang="en">
>
>   <head>
>       <meta charset="UTF-8">
>       <meta name="viewport" content="width=device-width, initial-scale=1.0">
>       <meta http-equiv="X-UA-Compatible" content="ie=edge">
>       <title>Document</title>
>   </head>
>
>   <body>
>       <div id="app">
>           <!-- v-for作用:列表渲染,当遇到相似的标签结构时,就用v-for去渲染
>               v-for="元素 in 容器(数组和对象)"
>               v-for="对象中的属性值 in data中的对象名"
>           -->
>           <!-- 对象 -->
>           <!-- (v,k,i)in 对象
>               v:值
>               k:键
>               i:对象中每对key-value的索引 从0开始
>               注意: v,k,i是参数名,见名知意即可!
>           -->
>           <p v-for="value in per">{{value}}</p>
>           <hr>
>           <p v-for="(value,key) in per">{{value}}----{{key}}</p>
>           <hr>
>           <p v-for="(value,key,i) in per">{{value}}----{{key}}--{{i}}</p>
>
>       </div>
>       <script src="./vue.js"></script>
>       <script>
>           new Vue({
>               el: '#app',
>               data: {
>                   per: {
>                       name: '老王',
>                       age: 38,
>                       gender: '男'
>                   }
>               },
>               methods: {
>
>               }
>           })
>       </script>
>   </body>
>
></html>
>
>```
>
>语法:
>
>```js
>item in items  // item为当前遍历属性对象的值
>(item, key, index) in  items //item为当前遍历属性对象的值 key为当前属性名的值  index为当前索引的值
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
>- 场景:列表数据变动会导致 视图列表重新更新 为了 提升性能 方便更新 需要提供 一个属性 key
>
>- 使用: 通常是给列表数据中的唯一值 也可以用索引值
>
>```html
><div id="app">
>
>       <!-- v-for 
>           key属性: 值通常是一个唯一的标识
>           key是一个可选属性
>           养成好习惯:建议在写v-for时 设置:key="唯一值"
>       -->
>       <ul>
>           <li v-for="(item,index) in list" :key="index">{{item}}---{{index}}</li>
>       </ul>
>   </div>
>   <script src="./vue.js"></script>
>   <script>
>       new Vue({
>           el: '#app',
>           data: {
>               list: ['a', 'b', 'c']
>           },
>           methods: {
>
>           }
>       });
>   </script>
>
>```
>

## 基础-表格案例-效果演示

>**`目标`**通过分析页面需求,提取案例功能点
>
>功能点:  
>
>1.  添加商品
>2.  删除商品
>3.  搜索商品
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

> **`目标`**掌握v-bind的绑定一般属性的用法
>
> ​    v-bind指令 可以帮助我们 把data中变量绑定到标签的属性上
>
> * 作用: 绑定标签上的**`任何属性`**
> * 语法:   v-bind:属性="表达式"  或者 :属性=""表达式
>
> 示例
>
> ```html
> <div v-bind:id="变量"></div>
> <img v-bind:src="变量" />
> ```
>
>  你可能还没感觉到 v-bind 到底有什么神奇的作用, 让老高用 v-bind带你写个建议幻灯片吧
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

> **`目标`: **掌握v-model的基础用法
>
> **`作用`:**  和表单元素进行绑定完成双向绑定
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

## 基础-系统指令-v-model-语法糖原理

>**`目标`**:掌握 v-model的实现原理 
>
>实际上 v-model就是我们两种指令的一种组合   **`v-bind`**  和  **`v-on`**
>
>* v-bind:属性 =>:属性
>* v-on:事件名 =>@事件名
>
>**分析**   
>
>*  表单元素数据改变 => 数据发生改变
>
>   * 数据改变 => 页面数据变化
>
>```html
><div id="app">
><input type="text" @input="changeInput" :value="name" />
>{{ name }}
></div>
><script src="./vue.js"></script>
><script>
>var vm = new Vue({
>el: "#app",
>data: {
>name: "张三"
>},
>methods: {
>changeInput(event) {
> // 值发生改变时 会触发这个方法
> //  去value值
> this.name = event.target.value;
>}
>}
>});
></script>
>```
>
>**`任务`**:   尝试使用v-bind 和 v--on 组合出 v-model的效果

## 基础-系统指令-v-model-绑定其他表单元素

>  **`目标`**掌握 v-model绑定其他表单元素的方式
>
>  表单元素:  input  textarea checkbox radio  select 
>
>  **注意**  checkbox在input标签中需要给定value值
>
>  所有表单元素一旦绑定了 v-model  就会忽略掉 原有的value值 checked值 selected值  需要从数据对象中取默认值
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
>        1. 编写元素标签
>           2.  写入v-cloak指令
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
> v-pre
>
> 场景: 假如你不希望Vue对你节点下的内容进行编译渲染,可以使用v-pre 指令让渲染**`跳过`**该节点
>
> ```html
> <div v-pre >{{ name }}</div> // 将会跳过此节点 不进行编译
> ```

**`任务`**

## 基础-表格案例-添加商品

>**`目标- 任务`**  实现在表格案例中 添加商品
>
>**`路径`**:  添加商品 
>
>1. 注册点击按钮事件
>2. 声明一个变量 v-model双向绑定 input
>3.  添加方法中 unshift添加数据
>4. 清空 输入框
>5.   通过v-bind:disabled控制按钮是否可点

## 基础-表格案例-删除商品

>**`目标- 任务`**  实现在表格案例中 删除商品
>
>**`路径`**:  删除商品 
>
>    1. 注册删除点击事件
>
>​    2.通过方法传递当前删除的索引
>
>​    3. 实现删除逻辑

## 基础-过滤器-过滤器的分析及全局-局部过滤器

>**`目标`**: 了解过滤器的功能 作用以及作用场景
>
>* 场景: data中的数据格式(日期格式/货币格式/大小写等)需要数据时
>* 使用位置:{{}}和v-bind="表达式"
>* 具体用法:{{msg | 过滤器名字}}
>* 分类:  过滤器分为**`局部`**和**`全局`**
>
>全局过滤器:  一旦注册, 在**`所有`**的Vue实例或者组件实例都可以使用
>
>局部过滤器: **`只能`**在注册的Vue或者组件实例上使用
>
>全局注册的方式 :  Vue.filter(过滤器名称,  **`过滤器函数`**)  
>
>```js
>Vue.filter("toUpper", function(value) {
> return value.charAt(0).toUpperCase() + value.substr(1);
>});// 过滤器核心代码
>```
>
>局部注册的方式     filters(实例选项) : {  过滤器名称 :  **`过滤器函数`**  }
>
>```js
>filters: {
>    toUpper(value) {
>      return value.charAt(0).toUpperCase() + value.substr(1);
>    }
>  }
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

### 过滤器的串联和参数传递

>  过滤器可以传递参数,第一个参数永远是前面传递过来的过滤值, 从第二个参数开始就是传递的过滤器参数

>  过滤器也可以多个串行起来并排使用  用法就是 用多个 **`管道`** 间隔

**`任务`**  尝试实现一个过滤器, 根据传入的**`索引值`** 找到对应的字符串 转成大写 并显示

```js
// index为传入的参数 
toUpper(value, index) {
         return value
           .split("")
           .map(function(item, i) {
             if (i === index) {
               return item.toUpperCase();
             }
             return item;
           })
           .join("");
       }
} // 根据传入的索引找到对应的字母换成大写字母
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
>formatDate(value, format) {
>  return moment(value).format(format);
>}  // 过滤器代码
>```
>
>**`路径`**: 参照实现代码

## 基础-ref 操作 DOM

>**`目标`**掌握如何通过ref来获取dom对象
>
>* 作用: 通过ref特性可以获取元素的dom对象
>
>* 使用:  给元素定义 ref属性, 然后通过$refs.名称 来获取dom对象
>
>```html
><input type="text" ref="myInput" /> // 定义ref
>
>```
>
>```js
>focus() {
>      this.$refs.myInput.focus();
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

## 基础-自定义指令-全局/局部自定义指令

> **`目标`**掌握如何全局/局部自定义一个指令
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
> * **`局部自定义指令`** : 
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

## 基础-表格案例-使用自定义指令完成自动获取焦点功能

> **`目标-任务`**在表格案例中 实现自定义指令 完成 输入框自动聚焦功能

## 基础-实例选项-计算属性-体验及基本使用

> **`目标`** 掌握实例选项中计算属性的基本含义
>
> * 场景:当表达式过于复杂的情况下 可以采用计算属性 对于任何复杂逻辑都可以采用计算属性
>
> * 使用: 在Vue实例选项中 定义 computed:{ 计算属性名: **`带返回值`**的函数 }
>
> * 说明: 计算属性的值 依赖 数据对象中的值  数据对象发生改变 => 计算属性发生改变=> 视图改变
>
> * 计算属性**`必须有返回值`** 相当于对插值表达式**`逻辑的一次封装`**
>
> * methods方法和计算属性的区别
>
> * 1 使用时 方法必须写括号**`()`**
>
> * 2 计算属性有**`缓存机制`** => 计算属性依赖 data中的数据 => 第一次执行计算属性完毕之后,计算属性会将计算结果放入缓存 => 第二次执行计算属性时 => 发现计算属性依赖的数据没有变化 => 从缓存中获取缓存,不再执行计算属性逻辑
>
> * 计算属性可以抽提复杂的逻辑 /还比方法的效率更高
>
>   ```html
>   computed: {
>     nameReverse() {
>         return this.name.split("").reverse().join("");
>      }
>   } 
>   ```
>
>   计算属性 和 methods方法的区别: 
>
>   * 计算属性不需要调用形式的写法  而methods方法必须采用 方法() 调用的形式
>   * 计算属性依赖data中的数据变化,如果data并没有发生变化,则计算属性则会取缓存的结果,
>   * methods不论data变化与否都会重新调用
>
> **`任务`:**通过计算属性实现字符串的翻转

## 表格案例-用计算属性实现商品搜索

>**`目标-任务`**在表格案例中使用计算属性实现商品搜索
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
>computed: {
>// 实现计算属性
>newList() {
> if (!this.searchValue) return this.list;
> return this.list.filter(item => {
>   return item.name.startsWith(this.searchValue);
> });
>}
>}
>```
>
>用到了 数组的filter筛选功能  和 字符串的 startsWith 校验功能
>

当data中无法完成复杂逻辑时,通通可以在**`计算属性`**中实现

