<template>
<div class="docMain">
  <Topnav toggleMenuVisible />
  <div class="content">
    <aside v-show="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-start">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/projectSummary">项目总结</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss">
$aside-zindex: 30;

.docMain {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 80px;
    padding-left: 200px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  text-align: left;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: #fafafa;
  width: 200px;
  padding: 30px 20px;
  position: fixed;
  top: 80px;
  left: 0;
  height: 100%;
  z-index: $aside-zindex;

  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  >ol {
    >li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }

      .router-link-active {
        color: #00d16c;
      }
    }
  }
}

main {
  overflow: auto;
  margin: 0 100px;
}
</style>
