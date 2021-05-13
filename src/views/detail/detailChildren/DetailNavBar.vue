<template>
  <div>
    <nav-bar>
<!--      dom里使用别名要加~-->
      <div slot="left" class="back"><img src="~assets/img/common/back.svg" alt="" @click="backClick"></div>
      <div slot="center" class="title">
<!--        添加点击-->
        <div v-for="(item,index) in title" class="title-item" :class="{active: index===currentIndex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
name: "DetailNavBar",
  components:{
  NavBar
  },
  data(){
  return{
    title:['商品','参数','评论','推荐'],
    currentIndex:0
  }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      //发送事件,可以向外传送参数
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex: 1;
  text-align: center;

}
.active{
  color: var(--color-high-text);
}
.back{
  margin-top: 7px;
}
</style>