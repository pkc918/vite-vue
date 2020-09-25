<template>
<div>
  <h1>Tabs 示例</h1>
  <h3>示例1</h3>
  <Demo :component="Tabs1Demo"></Demo>
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    }
  },
}
</script>
