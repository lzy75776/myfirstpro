<template>
<div class="toast" v-show="isShow">
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
  name: "Toast",
  props:{
    // message:{
    //   type:String,
    //   default:''
    // },
    // show:{
    //   type:Boolean,
    //   //默认不显示
    //   default: false
    // }
  },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration = 1500){
        this.isShow = true
        this.message = message
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  z-index: 999;
  width: 170px;
  height: 50px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  margin-left: -85px;
  margin-right: -85px;
  left: 50%;
  color: rgba(255,255,255,.8);
  background-color: rgba(0,0,0,.65);
  font-size: 15px;
  text-align: center;
  line-height: 50px;
}
</style>