<template>
  <div class="function-bar-bottom">
    <div class="message"><div class="message-left"><span class="fa fa-shopping-cart  message-icon"></span></div><div class="message-right"><span >我的购物车</span></div></div>
    <div class="message"><div class="message-left"><span class="fa fa-cloud-download  message-icon"></span></div><div class="message-right"><span >下载购物APP</span></div></div>
  </div>
</template>

<script>
export default {
name: "FunctionBarBottom"
}
</script>

<style scoped>
.message-icon{
  color: var(--color-tint);
}
.message{
  display: flex;
  height: 55px;
  line-height: 55px;
}
.message .message-icon{
  margin-left: 15px;
  margin-right: 15px;
}
.message .message-right{
  flex-grow: 1;
  display: inline-block;
  border-bottom: 1px solid #999999;
}
.message .message-left{
  width: 50px;
}
</style>