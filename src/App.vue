<template>
  <div>
    <div>
      导航栏 | <router-link to="/">XiaoPan</router-link> |
      <router-link to="/xxx">XiaoPan2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
