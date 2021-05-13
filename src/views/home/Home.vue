<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tabcontrol" @tabClick="tabClick" ref="tabcontrol1"  v-show="isTabFixed"></tab-control >
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentscroll"
            :pull-up-load="true"  @pullingUp="loadmore">
        <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
        <home-recommend :recommends="recommends"/>
        <feature/>
        <tab-control :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="tabcontrol" :class={fixed:isTabFixed}></tab-control >
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
<!--    如果想要监听组件，加native修饰符-->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
//组件
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "views/home/children/HomeSwiper";
import HomeRecommend from "views/home/children/HomeRecommend";
import Feature from "views/home/children/Feature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/betterscroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {getHomeMultidata,getHomeGoods} from  'network/home/home'


// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Scroll,
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl,
    GoodsList,
    BackTop
  },
  data(){
    return{
      //获得组件需要的数据
       banners:[],
      recommends:[],
      //对于复杂类型数据先设计好数据的格式
      goods:{
         'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  created() {
    //请求首页数据
    this.getHomeMultidata()
    //请求首页商品复杂数据,具体逻辑在methods
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const  refresh =  this.debounce(this.$refs.scroll.refresh,1000)
    this.$bus.$on('itemImageLoad', ()=>{
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY= this.$refs.scroll.getScrolly()
  },
  //需要对数据进行处理，特别是复杂处理一般设置一个计算属性，减少代码的复杂度，将复杂的代码放到下面来处理
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    //网络请求相关的方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res)
        //在函数执行完之前就要把数据保存下来的，this就是当前组件对象
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    //原来页数+1
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        //...解析数组,push可以传很多个参数.
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
      debounce(func,delay) {
        let timer = null
        return  function (...args){
          if (timer) {clearTimeout()}
          timer = setTimeout(() =>{
            func.apply(this,args)
              }
          , delay)
        }
      },
    //事件监听相关方法
    tabClick(index){
      // console.log(index)
      switch (index){
        case 0:
          this.currentType ='pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentscroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) >this.tabOffsetTop

    },
    // 上拉加载更多
    loadmore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad(){
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
  }
}
</script>
<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  /*position: fixed;*/
  /*right: 0;*/
  /*left: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}
#home{
  height: 100vh;
  /*padding-top: 44px;*/
  position: relative;
}
/*.tab-control{*/
/*  position: sticky;*/
/*  top: 44px;*/
/*  z-index: 9;*/
/*}*/
.scroll{
  height: calc(100% - 44px);
  /*height: 50px;*/
  overflow: hidden;
}
.tabcontrol{
  position: relative;
  z-index: 9;
}
.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}

</style>
