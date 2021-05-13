<template>
  <div class="side-bar-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SideBarItem"
}
</script>

<style scoped>
.side-bar-item{
  text-align: center;
  line-height: 50px;
  width: 120px;
  height: 50px;
  color: #666666;
  background-color: #f6f6f6;
}
</style>