<template>
  <div class="docMain">
    <Topnav />
    <div class="content">
      <aside v-show="menuVisible">
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
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  > div {
    height: 100%;
    > .docMain {
      height: 100%;
    }
  }
}
.content {
  display: flex;
  height: 100%;
  > aside {
    width: 150px;
    padding: 16px;
    background-color: pink;
    z-index: 1;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
    @media (max-width: 500px) {
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
    }
  }
  > main {
    width: 100%;
    padding: 10px;
    background-color: #88df8e;
    text-align: left;
    font-size: 24px;
    overflow-y: auto;
  }
}
</style>
