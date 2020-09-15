<template>
<div>
  <div class="home topnavAndBanner">
    <Topnav />
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>白杨 UI</h1>
        <h3>基于 Vue 3 和 TypeScript 的 UI 框架</h3>
        <div class="links">
          <a href="https://github.com/XiaoPan-Struggle/vite-vue">GitHub</a>
          <router-link to="/doc">开始使用</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
</div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
export default {
  components: {
    Topnav
  },
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: rgb(243, 250, 254);
  background: linear-gradient(145deg,
      rgba(243, 250, 254, 1) 0%,
      rgba(243, 249, 255, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  >svg {
    width: 88px;
    height: 88px;
  }
}

.home {
  display: flex;
  flex-direction: column;

  .intro {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-weight: 600;
    }

    .links {
      padding-top: 30px;

      a {
        margin: 20px 20px;
        padding: 8px 20px;
        border: 1px solid #0f78fe;
        border-radius: 10px;
        font-weight: 600;

        &:nth-child(2) {
          background-color: #0f78fe;
          color: #fff;
        }
      }
    }
  }
}
</style>
