<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { ref, provide } from 'vue';

export default {
  name: 'App',
  setup () {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    provide('menuVisible', menuVisible)
  }
};
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
</style>
