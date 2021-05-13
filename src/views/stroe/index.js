import Vue from "vue";
import Vuex from "vuex"
import mutations from "./mutations";
import actions from "./actions";
import state from "./state";
import getters from "./getters";
Vue.use(Vuex)

const  store = new Vuex.Store({
  state,
  getters,
  //mutations进行跟踪
  //进一步封装
  mutations,
  actions,
})
export default  store