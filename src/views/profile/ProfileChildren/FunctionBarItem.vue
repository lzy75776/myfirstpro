<template>
<div class="function-bar-item">
  <div class="message"><div class="message-left"><span class="fa fa-envelope-open-o  message-icon"></span></div><div class="message-right"><span >我的消息</span></div></div>
  <div class="message"><div class="message-left"><span class="fa fa-diamond  message-icon"></span></div><div class="message-right"><span >积分商城</span></div></div>
  <div class="message"><div class="message-left"><span class="fa fa-cc-mastercard  message-icon"></span></div><div ><span >会员卡</span></div></div>
</div>
</template>

<script>
export default {
name: "FunctionBarItem"
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