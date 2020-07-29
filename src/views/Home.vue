<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>轱辘UI</h1>
        <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
        <div class="links">
          <router-link to="/doc">查看文档</router-link>|
          <a href="http://github.com">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped></style>
