<template>
  <div>
    <div class="home topnavAndBanner">
      <Topnav />
      <div class="banner">
        <div class="logo"></div>
        <div class="intro">
          <h1>白杨 UI</h1>
          <div class="links">
            <a href="https://github.com/XiaoPan-Struggle/vite-vue">GitHub</a>
            <router-link to="/doc">开始使用</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
  background: linear-gradient(
    145deg,
    rgba(243, 250, 254, 1) 0%,
    rgba(243, 249, 255, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  padding: 0 20px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
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
