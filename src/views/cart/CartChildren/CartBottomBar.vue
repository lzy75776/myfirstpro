<template>
<div>
  <div class="bottom-bar">
    <div class="check-content"><check-button @click.native="CheckClick" class="check-button" :value="isSelectAll"></check-button><span>全选</span></div>
    <div class="total-price">${{totalPrice}}</div>
    <div class="computed"><span>去计算({{checkedLength}})</span></div>
  </div>
</div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex";
export default {
name: "CartBottomBar",
  components:{
    CheckButton
  },
  methods:{
    CheckClick(){
      if (this.isSelectAll){
        this.$store.state.cartList.forEach(item =>{ item.checked = false})
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  },
  computed:{
    ...mapGetters(["cartList"]),
    totalPrice(){
      return this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((pre,item)=>{
        return pre + item.price * item.count
      },0).toFixed(2)
    },
    checkedLength(){
      return this.$store.state.cartList.filter(item =>{
        return  item.checked
      }).length
    },
    isSelectAll(){
      //性能不高
      if (this.cartList.length === 0 ) return  false
      return !(this.cartList.filter(item =>  !item.checked).length)
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  position: relative;
  height: 40px;
  line-height: 40px;
}
.total-price{
  margin-left: 30px;
  height: 40px;
  line-height: 40px ;
  flex-grow: 1;
}
.check-content{
  align-items: center;
  display: flex;
}
.check-button{
  margin-left: 10px;
  line-height: 20px;
  width: 20px;
  height: 20px;
}
.computed{
  background-color: var(--color-high-text);
  width: 100px;
  text-align: center;
}
</style>