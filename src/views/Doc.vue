<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>侧边栏</aside>
      <main>主体内容</main>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
export default {
  components: { Topnav },
};
</script>

<style lang="scss">
  
</style>