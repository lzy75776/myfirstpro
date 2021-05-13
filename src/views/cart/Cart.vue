<template>
<div class="cart">
<!--  商品导航-->
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
<!--  商品列表-->
  <cart-list></cart-list>
<!--  底部相关-->
  <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./CartChildren/CartList";
import {mapGetters} from "vuex"
import CartBottomBar from "./CartChildren/CartBottomBar";
export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
   ...mapGetters(["cartLength"])
  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  height: 44px;
  background-color: var(--color-tint);
  color: #fff;
}
.cart-bottom-bar{
  height: 40px;
}
</style>