<template>
<div>
  <h1>Button 示例</h1>
  <h3>示例1</h3>
  <Demo :component="Button1Demo"></Demo>
  <h3>示例2</h3>
  <Demo :component="Button2Demo"></Demo>
  <h3>示例3</h3>
  <Demo :component="Button3Demo"></Demo>
  <h3>示例4</h3>
  <Demo :component="Button4Demo"></Demo>
  <h3>示例5</h3>
  <Demo :component="Button5Demo"></Demo>
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    }
  },
}
</script>
