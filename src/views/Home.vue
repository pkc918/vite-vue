<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>轱辘UI</h1>
        <h2>基于 Vue 3 和 TypeScript 的 UI 框架</h2>
        <div class="links">
          <a href="http://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
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

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .intro {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    .links {
      padding-top: 20px;
      a {
        margin: 0 8px;
        background-color: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
        font-weight: 600;
      }
    }
  }
}
</style>
