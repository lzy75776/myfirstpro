<template>
  <div class="side-bar">
      <side-bar-item v-for="(item,index) in categoryList"  @click.native="categoryClick(index)" :class="{active:index === currentIndex}">{{item.title}}</side-bar-item>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem";
export default {
  name: "SideBar",
  components:{
    SideBarItem
  },
  methods:{
    categoryClick(index){
      this.currentIndex = index
    }
  },
  data(){
    return {
      currentIndex:null
    }
  },
  props: {
    categoryList:{
      type:Array,
      default(){
        return []
      }
    }
  },
}

</script>

<style scoped>
.active{
  background-color: #cccccc;
}
</style>