<template>
<div>
  <h1>Dialog 示例</h1>
  <h3>示例1</h3>
  <Demo :component="Dialog1Demo"></Demo>
  <h3>示例2</h3>
  <Demo :component="Dialog2Demo"></Demo>
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from './Dialog1.demo.vue'
import Dialog2Demo from './Dialog2.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    }
  },
}
</script>
