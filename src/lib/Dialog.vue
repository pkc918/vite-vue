<template>
<div>
  <div class="gulu-dialog-overlay"></div>
  <div class="gulu-dialog-warpper">
    <div class="dialog">
      <header>标题</header>
      <main>
        <p>第一行</p>
        <p>第二行</p>
      </main>
      <footer>
        <Button>OK</Button>
        <Button>Cancel</Button>
      </footer>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss">
</style>
