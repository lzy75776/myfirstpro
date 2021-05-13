<template>
<div class="detail">
  <detail-nav-bar class="detail-nav-bar"  @titleClick="titleClick" ref="detailnavbar"/>
  <Scroll class="content" ref="scroll" @scroll="contentscroll" :probe-type="3">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
    <detail-param-info :param-info="paramInfo" ref="param"/>
    <detail-comment-info :comment-info="commentInfo" ref="comment"/>
    <goods-list :goods="recommends" ref="recommend"/>
  </Scroll>
  <detail-bottom-bar @addToCart = 'addToCart'/>
  <back-top @click.native="backTop" v-show="isShowBackTop"/>
<!--  <toast :message= "message"  :show = 'show' class="toast"></toast>-->
</div>
</template>

<script>
import DetailNavBar from "./detailChildren/DetailNavBar";
import {getDetail,Goods,Shop,GoodsParam} from "network/detail/detail"
import DetailSwiper from "./detailChildren/DetailSwiper";
import DetailBaseInfo from "./detailChildren/DetailBaseInfo";
import DetailShopInfo from "./detailChildren/DetailShopInfo";
import Scroll from "components/common/betterscroll/Scroll";
import DetailGoodsInfo from "./detailChildren/DetailGoodsInfo";
import DetailParamInfo from "./detailChildren/DetailParamInfo";
import DetailCommentInfo from "./detailChildren/DetailCommentInfo";
import {getRecommend} from  "network/detail/detail"
import GoodsList from "components/content/goods/GoodsList";
import GoodsListItem from "components/content/goods/GoodsListItem";
import DetailBottomBar from "./detailChildren/DetailBottomBar";
import BackTop from "components/content/backTop/BackTop";
// import Toast from "components/common/Toast/Toast";
import {mapActions} from  'vuex'
export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    GoodsListItem,
    DetailBottomBar,
    BackTop,
    // Toast
  },
  data(){
    return {
      iid:null,
      topImages:[],
      //goods这里要设置成对象，不能设置成null  否则会报错
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopy:[],
      positiony:0,
      isShowBackTop:false,
      // message:"",
      // show:false
    }
  },
  created() {
    //1.保存iid
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    //2.根据iid请求详情数据
    getDetail(this.iid).then(res =>{
      console.log(res)
      //获取顶部轮播图图片
      this.topImages = res.result.itemInfo.topImages
      const data = res.result
      // console.log(this.topImages)
      //2.获取商品细腻些
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3.创建店铺信息
      this.shop = new Shop(data.shopInfo)
      //4.保存商品详情数据
      this.detailInfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      if (data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }

        //offset值不对的情况一般都是图片加载的问题
      // this.themeTopy = []
      // this.themeTopy.push(0)
      // this.themeTopy.push(this.$refs.param.$el.offsetTop)
      // this.themeTopy.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopy.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopy)
      // 3. 请求推荐数据
      getRecommend().then(
          res => {this.recommends = res.data.list}
      )
    })
  },
  mounted() {
  },
  updated() {
  },
  methods:{
    ...mapActions(["addCart"]),
    contentscroll(position){
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) >this.tabOffsetTop
      //这里赋值过于频繁，可以加一个判断
      // this.positiony = -position.y
      // if (this.positiony > this.themeTopy[0] && this.positiony <this.themeTopy[1]){
      //     this.$refs.detailnabar.currentIndex  = 0
      // }
      // if (this.positiony>=this.themeTopy[1] && this.positiony < this.themeTopy[2]){
      //   this.$refs.detailnavbar.currentIndex = 1
      // }
      // if (this.positiony >= this.themeTopy[2] && this.positiony <this.themeTopy[3]){
      //   this.$refs.detailnavbar.currentIndex = 2
      // }
      // if (this.positiony >= this.themeTopy[3]){
      //   this.$refs.detailnavbar.currentIndex = 3
      // }
      },
    imgLoad(){
      //这里可以加个防抖，避免计算次数过多
      this.$refs.scroll.refresh()
      this.themeTopy = []
      this.themeTopy.push(0)
      this.themeTopy.push(this.$refs.param.$el.offsetTop)
      this.themeTopy.push(this.$refs.comment.$el.offsetTop)
      this.themeTopy.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopy)
    },
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopy[index],360)
    },
    backTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    addToCart(){
      //获取需要展示的信息，
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid
      this.addCart(product).then(res =>{
        // this.show = true
        // this.message = res
        // setTimeout(()=>{
        //   this.show = false
        //   this.message = ''
        // },1500)
        this.$toast.show(res,1500)
      })
    }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.detail-nav-bar{
  position: relative;
  z-index: 9;
  background: #ffffff;
}

</style>