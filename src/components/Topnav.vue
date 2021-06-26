<template>
  <div
      class="topnav"
      :class="{selected: !isShow}"
  >
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-baiyang"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <a target="_blank" href="https://github.com/XiaoPan-Struggle/vite-vue">Github</a>
      </li>
      <li>
        <a target="_blank" href="https://www.yuque.com/u5019886/dylh6b/cgq2dh">语雀</a>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span v-if="toggleMenuVisible" class="toggleAside" @click="handleHidden"></span>
  </div>
</template>

<script lang="ts">
import {inject, ref, Ref} from 'vue';
import {useRoute} from 'vue-router';
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isShow = ref(false);
    isShow.value = useRoute().path === '/'
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const handleHidden = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      handleHidden,
      isShow
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 50;

  > .logo {
    padding: 0 20px;
    font-size: 24px;
    font-weight: 600;
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 40px;
      height: 40px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: url("../../public/img/unfold.png") no-repeat center;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}

.selected{
  background: #fff;
  box-shadow: #6a737d 1px 3px 5px;
}


</style>
