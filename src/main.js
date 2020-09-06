import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// import element-tiptap 样式
import 'element-tiptap/lib/index.css';

// 安装 ElementUI 插件
Vue.use(ElementUI);
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, { /* 插件配置项 */ });
// 现在你已经在全局注册了 `el-tiptap` 组件。

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App) // 使用App也就是'.App.vue'页面生成一个DOM实现
  /*
  等价于, 其中h也是一个函数, 实际上是createElement, 也即民createElement(App)
   render: function(h){
    h(App)
   }
   */

}).$mount('#app')

// $mount('#app') 和 el:'app'的作用类似,手动将这位vue实例挂载到指定的dom上, 此处即为挂载到id="app"的元素上