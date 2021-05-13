
import Toast from "./Toast";
const obj ={}
export  default  obj
obj.install =function (Vue){
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //new创建一个组件实例，或者是组件对象
  const toast = new toastConstructor()

  //将组件进行手动挂载
  toast.$mount(document.createElement(('div')))

  //toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}