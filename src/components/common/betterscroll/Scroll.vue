<template>
  <div  class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  methods:{
    //体现封装思想,默认延时350ms
    scrollTo(x,y,time=350){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll &&  this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('---')
      this.scroll.refresh()
    },
    getScrolly(){
      return this.scroll ? this.scroll.y :  0
    }
  },
  mounted() {
    //最好不用类，因为只能选中一个，有多个类的时候会出错,绑定ref最好,是唯一的
           this.scroll = new BScroll(document.querySelector('.wrapper'), {
          probeType: this.probeType,
          //滚动条内的监听事件可以监听
          click:true,
          pullUpLoad: this.pullUpLoad,
      })
      if (this.probeType === 2 || this.probeType ===3){
        this.scroll.on('scroll',(position)=>{console.log(position)
          this.$emit('scroll',position)})
      }
      if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          //检测是否可以监听下拉到底部
          // console.log('-----')
          this.$emit('pullingUp')
        })
      }
      //监听上拉事件
  }
}
</script>

<style scoped>

</style>