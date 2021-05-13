import Vue from 'vue'

import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

Vue.use(Router)
//没有用，无效，忍让存在路由重复跳转的问题，可以在￥router.push前判断下跳转页面的path和当前页面path的关系
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
const routes =[
  {
    path :'/',
    name:'home',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
  // 解决跳转重复路由报错问题
const routerPush = router.push;
router.push = path => {
  // 判断下当前路由是否就是要跳转的路由
  if (router.currentRoute.fullPath.includes(path)) return;
  return routerPush.call(router, path);
}

export default router
