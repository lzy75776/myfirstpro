<template>
<div class="person-column">
<!--  -->
  <div class="person-top">
    <div class="person-text"><span >我的档案</span></div>
    <div class="login">
      <div class="login-img-outer"><img src="~assets/img/profile/profile-login.jpeg" alt="" class="login-img"></div>
      <div class="user-message">
        <div class="user-message-login"><span>登陆/注册</span>
        </div>
      <span class="fa fa-mobile-phone fa-lg"></span><span>暂无绑定手机号</span>
      </div>
      <div class="right-arrow"><span class="right-arrow-icon"><i class="fa fa-chevron-right fa-lg "></i></span></div>
    </div>
  </div>
<!--  -->
  <div class="person-bottom">
    <div class="balance"><div class="person-balance-outer"><div><span class="person-number-color">0.00</span>元</div><div><span>我的余额</span></div></div></div>
    <div class="discount"><div class="person-discount-outer"><div><span class="person-number-color">0</span>个</div><div><span>我的优惠</span></div></div></div>
    <div class="integral"><div class="person-integral-outer"><div><span class="person-number-color">0.00</span>分</div><div><span>我的积分</span></div></div></div>
  </div>
</div>
</template>

<script>
export default {
name: "PersonColumn"
}
</script>

<style scoped>
.person-column{
  background-color: #a3a3a5;
  width: 100%;
}
.person-text{
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  height: 50px;
  background-color: var(--color-tint);
}
.login-img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.login{
  height: 120px;
  display: flex;
  background-color: var(--color-tint);
}
.login-img-outer{
  padding-top: 12px;
  padding-left: 10px;
}
.user-message{
  flex-grow: 1;
  color: white;
  padding-top: 35px;
  padding-left: 20px;
}
.user-message-login{
  font-size: 18px;
  margin-bottom: 5px;
}
.right-arrow{
  color: white;
  margin-top: 43px;
  margin-right: 10px;
}
.person-bottom{
  width: 100%;
  justify-content: space-between;
  display: flex;
  text-align: center;
  font-size: 17px;
}
.person-bottom .person-number-color{
  font-size: 25px;
  color: orange;
}
.person-bottom>div{
  background-color: var(--color-background);
  width:222px;
  height: 100px;
}

.person-balance-outer{
  padding-top: 30px;
}
.person-discount-outer{
  padding-top: 30px;
}
.person-integral-outer{
  padding-top: 30px;
}

</style>