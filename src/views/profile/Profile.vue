<template>
<div class="profile">
  <person-column></person-column>
  <function-bar class="function-bar"></function-bar>
  <function-bar-bottom class="function-bar"></function-bar-bottom>
</div>
</template>

<script>
import PersonColumn from "./ProfileChildren/PersonColumn";
import FunctionBar from "./ProfileChildren/FunctionBar";
import FunctionBarBottom from "./ProfileChildren/FunctionBarBottom";
export default {
  name: "Profile",
  components:{
    PersonColumn,
    FunctionBar,
    FunctionBarBottom
  }
}
</script>

<style scoped>
.profile{
  height: 100vh;
  font-size: 18px;
}
.function-bar{
  border-top: 10px solid #f6f6f6;
}



</style>