<template>
<div class="category">
<!--  顶部导航栏-->
  <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
<!--  侧边选择栏-->
  <Scroll class="category-content" :probe-type="0"><side-bar :category-list="categoryList" ></side-bar></Scroll>
</div>
</template>

<script>
import Scroll from "components/common/betterscroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import SideBar from "./CategoryChildren/SideBar";
import {getCategory} from 'network/category/category'
export default {
  name: "Category",
  components:{
    NavBar,
    SideBar,
    Scroll

  },
  data(){
    return {
      categoryList:[],
    }
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.categoryList = res.data.category.list
      })
    },
  },
  created() {
    this.getCategory()
  }

}
</script>

<style scoped>
.category{
  height: 100vh;
}
.nav-bar{
  position: relative;
  z-index: 99;
  background-color: var(--color-tint);
  color: var(--color-background);
  font-size: 18px;
}
.category-content{
  height:calc(100% - 44px - 49px);
}

</style>