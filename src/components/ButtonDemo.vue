<template>
  <div>
    button
    <Button 
      @click="onClick"
      @focus="onClick"
      @mouseover="onClick"
    >nihao</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(1)
    }
  return { onClick }
  }
}
</script>
