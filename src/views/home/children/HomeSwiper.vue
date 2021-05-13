<template>
  <swiper>
    <swiper-item v-for="item in banners"  >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
name: "HomeSwiper",
  components:{
        SwiperItem,
        Swiper
  },
  methods:{
    imgload (){
      if (!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
    }
  },
  data (){
  return{
    isLoad:false
  }
  },
  props:{
  banners:{
    type:Array,
    default(){
      return []
    }
  },

  }
}
</script>

<style scoped>

</style>