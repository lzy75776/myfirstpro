<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :class="{active: index === currentIndex}" @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      //对于对象或者是数组类型的值，返回值必须是一个函数，因为是引用类型的值，否则所有的改动都指向一个内存空间
      type:Array,
      default(){
        return []
      }
    }
  },
  data (){
    return {
      //初始索引0
      currentIndex:0
    }
  },
  methods:{
    //获取到点击按钮的当前index
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  background:#ffffff;
  display: flex;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  border-right: 1px solid #f6f6f6;
  flex: 1;
  text-align: center;
}
.tab-control-item span{
  padding:5px ;
}
.active span{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>