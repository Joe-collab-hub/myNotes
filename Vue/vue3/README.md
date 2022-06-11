# vue3

## 1.拉开序幕的setup

1. 理解：Vue3中的一个新的配置项，值为一个函数
2. setup是所有<span style="color: red">Composition API（组合API）</span>“表演舞台”
3. 组件中所有用到的：数据，方法等等，均要在setup中定义
4. setup中的数据，方法，组件等等，都是可以被其他组件访问的
5. setup函数的两种返回值：
    1. 若返回一个对象，则对象中的属性、方法、在模板中均可直接使用（重点关注）
    2. 若返回一个渲染函数，则可以自定义渲染内容（了解）
6. 注意点：
    1. 尽量不要与Vue2配置混用
        1. Vue2的配置（data、methods、computed）中<span style="color: red">可以访问到</span>setup中的数据、方法等等
        2. 但setup中<span style="color: red">不能访问到</span>Vue2的配置（data、methods、computed）
        3. 如果重名，则setup的优先
    2. setup不能是一个async函数，因为返回值不在是retume的形式，而是Promise的形式，模板看不到rethm对象中的属性和方法

## 2.ref函数

1. 作用：定义一个响应式数据。
2. 语法``const xxx = ref(initialValue)``
    1. 创建一个包含响应式数据的<span style="color: red">引用对象（reference对象）</span>
    2. js中操作数据：xxx.value = newValue
    3. 模板中读取数据：不需要.value，直接：{{xxx}}
3. 备注：
    1. 接受数据可以是：基本属性，也可以是对象类型
    2. 基本类型的数据：响应依然是靠``Object.defineProperty``的``set``和``get``方法实现
    3. 对象类型的数据：内部“求助”了Vue3中的一个新函数--``reactive``函数

## 3.reactive函数

1. 作用：将对象类型的数据转换为响应式数据（基本数据类型不用它，要用ref函数）
2. 语法：``const 代理对象 = reactive(obj)``
    1. 将对象类型的数据转换为响应式数据
    2. 参数：obj，对象类型的数据
    3. 返回值：返回一个新的对象，对象中的属性、方法、在模板中均可直接使用
3. reactive定义的响应式数据是深层次的，
4. 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作

## 4.reactive对比ref

1. 从定义数据角度来对比：
    1. ref用来定义：基本数据类型
    2. reactive用来定义：对象（数组）类型
    3. 备注：ref也可以来定义对象（数组）类型的数据，它内部会自动通过``reactive``转化代理对象
2. 从原理角度对比：
    1. ref通过``Object.defineProperty``的``set``和``get``方法来实现响应式（数据劫持）
    2. reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
3. 从使用角度对比：
    1. ref定义的数据：操作数据需要`.value`,读取数据时模板中直接读取使不需要`.value`
    2. reactive定义的数据：操作数据于读取数据，均不需要`.value`

## 5.setup的两个注意点

1. setup执行的时机
    1. 在beforeCreate之前执行一次，this是`undefined`
2. setup的参数
    1. props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的数据
    2. context：上下文对象
        1. attrs：值为对象，包含：组件外部传递过来，但是没有在props配置中声明的属性，相当于`this.#arrrs`
        2. slots：收到的插槽内容，相当于`this.$slots`
        2. emit：分发自定义事件的函数，相当于`this.$emit`

## 6.计算属性与监视

### 1.computed函数

1. 与Vue2中的computed配置功能一致
2. 写法

```flow js
   import { computed } from 'vue';
   
setup () {
	
	let person = reactive({
		firsName: '张',
		lestName: '三',
	});
	
	// 计算属性的简写方式（没有考虑计算属性被修改的情况）
        /* person.fullName = computed(() => {
            return person.firsName + '-' + person.lestName;
        }); */
	
	// 计算属性完整写法（考虑读和改）
	person.fullName = computed({
		get () {
			return person.firsName + '-' + person.lestName;
		},
		set (newValue) {
			let names = newValue.split('-');
			person.firsName = names[0];
			person.lestName = names[1];
		},
	});
	
	return {
		person,
	};
},
```

### 2.watch函数

1. 与Vue2中watch配置功能一样
2. 两个小'坑'：
    1. 监视reactive所定义的一个响应式数据时：无法正确的获取oldVal、强制开启了深度监视（deep配置无效）
    2. 监视reactive定义的响应式数据中的某个属性时：deep配置有效

```flow js
      // 情况一：监视ref所定义的响应式数据
/* watch(sum, (newVal, oldVal) => {
console.log(`${oldVal} => ${newVal}`);
},{immediate: true}); */

// 情况二：监视ref所定义的多个响应式数据
/* watch(sum, (newVal, oldVal) => {
console.log(`${oldVal} => ${newVal}`);
});
watch(msg, (newVal, oldVal) => {
console.log(`${oldVal} => ${newVal}`);
}); */
/* watch([sum,msg], (newVal, oldVal) => {
console.log(`${oldVal} => ${newVal}`);
}); */

/*
   情况三：监视reactive所定义的一个响应式数据
      1、注意：此处无法正确的获取oldVal
      2、注意：强制开启了深度监视（deep配置无效）
*/
/* watch(person, (newVal, oldVal) => {
console.log(oldVal, newVal);
},); */

// 情况四：监视reactive所定义的一个响应式数据中的某一个属性
/* watch(() => person.age, (newVal, oldVal) => {
console.log(oldVal, newVal);
}); */

// 情况五：监视reactive所定义的一个响应式数据中的某些属性
/* watch([() => person.age, () => person.name], (newVal, oldVal) => {
console.log(oldVal, newVal);
}); */

// 特殊情况
/* watch(() => person.job, (newVal, oldVal) => {
console.log(oldVal, newVal);
},{deep:true}); */  
```

### 3.watchEffect函数
1. watch的套路是：既要指明监视的属性，也要指明监视的回调
2. watchEffect的套路是：不用指明监视的属性，监视的回调中用到那个属性，那就监视那个属性
3. watchEffect有的项computed：
   1. 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
   2. 而watchEffect更注重的是过程（回调函数是函数体），所以不用写返回值
```flow  js
// watchEffect所指定的回调中所用到的数据只要发生变化，则直接重新执行回调
   watchEffect(() => {
      let x1 = sum.value;
      let x2 = person.job.j1.salary;
      console.log('watchEffect配置的回调执行了');
   });
```


## 7.生命周期
1. vue2.x的生命周期

<img src="https://cn.vuejs.org/images/lifecycle.png" alt="lifecycle_2" style="width:400px;" />

2. vue3.0的生命周期

<img src="https://v3.cn.vuejs.org/images/lifecycle.svg" alt="lifecycle_2" style="width:600px" />

<br>

2. Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
   - ```beforeDestroy```改名为 ```beforeUnmount```
   - ```destroyed```改名为 ```unmounted```
3.Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
   - `beforeCreate`===>`setup()`
   - `created`=======>`setup()`
   - `beforeMount` ===>`onBeforeMount`
   - `mounted`=======>`onMounted`
   - `beforeUpdate`===>`onBeforeUpdate`
   - `updated` =======>`onUpdated`
   - `beforeUnmount` ==>`onBeforeUnmount`
   - `unmounted` =====>`onUnmounted` 


## 8.自定义hook函数

- 什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。

- 类似于vue2.x中的mixin。

- 自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。


## 9.toRef
- 作用：创建一个ref对象，其value值指向另一个对象中的某个属性
- 语法：`let name = toRef(person, 'name');`
- 应用：要将响应式对象中的某个属性单独提供给外部使用时
- 扩展：`toRefs`与`toRef`功能一致，但可以批量创建多个ref对象，语法：`toRef(person)`


## 10.shallowReactive 与 shallowRef 
- shallowReactive：只 处理对象外层属性的响应式（浅响应式）
- shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理
- 什么时候用
   
  - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ==> shallowReactive
  - 如果有一个对象数据，后续功能不会修改对象中的属性，而是生新的对象来替换 ==> shallowRef 

## 11.readonly 与 shallowReadonly
- readonly：让一个响应式数据变只读的（全只读）
- shallowReadonly：让一个响应式数据最外层属性变只读的，深层属性可改（浅只读）
- 应用场景：不希望数据被修改时


## 12.toRaw 与 markRaw

- toRaw：
   - 作用：将一个由```reactive```生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>。
   - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw：
   - 作用：标记一个对象，使其永远不会再成为响应式对象。
   - 应用场景:
      1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
      2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

## 13.customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

- 实现防抖效果：

  ```vue
  <template>
  	<input type="text" v-model="keyword">
  	<h3>{{keyword}}</h3>
  </template>
  
  <script>
  	import {ref,customRef} from 'vue'
  	export default {
  		name:'Demo',
  		setup(){
  			// let keyword = ref('hello') //使用Vue准备好的内置ref
  			//自定义一个myRef
  			function myRef(value,delay){
  				let timer
  				//通过customRef去实现自定义
  				return customRef((track,trigger)=>{
  					return{
  						get(){
  							track() //告诉Vue这个value值是需要被“追踪”的
  							return value
  						},
  						set(newValue){
  							clearTimeout(timer)
  							timer = setTimeout(()=>{
  								value = newValue
  								trigger() //告诉Vue去更新界面
  							},delay)
  						}
  					}
  				})
  			}
  			let keyword = myRef('hello',500) //使用程序员自定义的ref
  			return {
  				keyword
  			}
  		}
  	}
  </script>
  ```


## 15.provide 与 inject

<img src="https://v3.cn.vuejs.org/images/components_provide.png" style="width:300px" />

- 作用：实现<strong style="color:#DD5145">祖与后代组件间</strong>通信

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

    1. 祖组件中：

       ```js
       setup(){
           ......
           let car = reactive({name:'奔驰',price:'40万'})
           provide('car',car)
           ......
       }
       ```

    2. 后代组件中：

       ```js
       setup(props,context){
           ......
           const car = inject('car')
           return {car}
           ......
       }
       ```

## 16.响应式数据的判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

## 17.Options API 存在的问题

使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:600px;float:left" />
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="zoom:50%;width:560px;left" /> 
</div>















## 18.Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>
</div>



## 19.Fragment

- 在Vue2中: 组件必须有一个根标签
- 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
- 好处: 减少标签层级, 减小内存占用

## 20.Teleport

- 什么是Teleport？—— `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件html结构</strong>移动到指定位置的技术。

  ```vue
  <teleport to="移动位置">
  	<div v-if="isShow" class="mask">
  		<div class="dialog">
  			<h3>我是一个弹窗</h3>
  			<button @click="isShow = false">关闭弹窗</button>
  		</div>
  	</div>
  </teleport>
  ```

## 21.Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

    - 异步引入组件

      ```js
      import {defineAsyncComponent} from 'vue'
      const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
      ```

    - 使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback```

      ```vue
      <template>
          <div class="app">
              <h3>我是App组件</h3>
              <Suspense>
                  <template v-slot:default>
                      <Child/>
                  </template>
                  <template v-slot:fallback>
                      <h3>加载中.....</h3>
                  </template>
              </Suspense>
          </div>
      </template>
      ```

## 22.全局API的转移

- Vue 2.x 有许多全局 API 和配置。
    - 例如：注册全局组件、注册全局指令等。

      ```js
      //注册全局组件
      Vue.component('MyButton', {
        data: () => ({
          count: 0
        }),
        template: '<button @click="count++">Clicked {{ count }} times.</button>'
      })
      
      //注册全局指令
      Vue.directive('focus', {
        inserted: el => el.focus()
      }
      ```

- Vue3.0中对这些API做出了调整：

    - 将全局的API，即：```Vue.xxx```调整到应用实例（```app```）上

      | 2.x 全局 API（```Vue```） | 3.x 实例 API (`app`)                        |
          | ------------------------- | ------------------------------------------- |
      | Vue.config.xxxx           | app.config.xxxx                             |
      | Vue.config.productionTip  | <strong style="color:#DD5145">移除</strong> |
      | Vue.component             | app.component                               |
      | Vue.directive             | app.directive                               |
      | Vue.mixin                 | app.mixin                                   |
      | Vue.use                   | app.use                                     |
      | Vue.prototype             | app.config.globalProperties                 |


## 23.其他改变

- data选项应始终被声明为一个函数。

- 过度类名的更改：

    - Vue2.x写法

      ```css
      .v-enter,
      .v-leave-to {
        opacity: 0;
      }
      .v-leave,
      .v-enter-to {
        opacity: 1;
      }
      ```

    - Vue3.x写法

      ```css
      .v-enter-from,
      .v-leave-to {
        opacity: 0;
      }
      
      .v-leave-from,
      .v-enter-to {
        opacity: 1;
      }
      ```

- <strong style="color:#DD5145">移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持```config.keyCodes```

- <strong style="color:#DD5145">移除</strong>```v-on.native```修饰符

    - 父组件中绑定事件

      ```vue
      <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickEvent"
      />
      ```

    - 子组件中声明自定义事件

      ```vue
      <script>
        export default {
          emits: ['close']
        }
      </script>
      ```

- <strong style="color:#DD5145">移除</strong>过滤器（filter）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。

- ......
