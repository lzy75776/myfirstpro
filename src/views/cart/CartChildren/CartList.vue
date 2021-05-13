<template>
<div class="cart-list">
  <scroll class="content">
<!--    最好不要用index绑定key，diff算法有时候判断会出错-->
    <cart-list-item v-for="(item,index) in cartList"  :product="item"></cart-list-item>
  </scroll>
</div>
</template>

<script>
import  {mapGetters} from  'vuex'
import Scroll from "components/common/betterscroll/Scroll";
import CartListItem from "./CartListItem";
export default {
name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed:{
  ...mapGetters(['cartList'])
  }
}
</script>
<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px)
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>