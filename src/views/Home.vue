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
          <router-link to="/doc">起步</router-link>
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
    .links {
      padding-top: 20px;
      a {
        $h: 28px;
        display: inline-block;
        margin: 0 20px;
        padding: 8px 20px;
        border-radius: $h;
        border: 1px solid #4fc08d;
        background-color: #f6f6f6;
        line-height: $h;
        font-weight: 600;
      }
    }
  }
}
</style>
