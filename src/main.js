import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./views/stroe";
import toast from  'components/common/Toast/index'
import fastclick from  'fastclick'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//安装导入使用
fastclick.attach(document.body)

Vue.use(VueLazyload,{
  loading:import('./assets/img/common/placeholder.png')
})


//安装插件，调用install函数
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
