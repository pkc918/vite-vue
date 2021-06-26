<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import { router } from "./router";

const width = document.documentElement.clientWidth;
const menuVisible = ref(width > 500);
provide("menuVisible", menuVisible);
// 路由跳转后，关闭aside
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
ol {
  list-style: none;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
