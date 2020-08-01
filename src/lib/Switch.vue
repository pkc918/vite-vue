<template>
  <div>
    <button :class="{ checked: value }" @click="toggleChecked"><span></span></button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean
  },
  setup (props, context) {
    const toggleChecked = () => {
      context.emit('input', !props.value)
    }
    return { toggleChecked }
  }
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    outline: none;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 0.3s;
  }
  button.checked{
    background: blue;
  }
  button.checked > span{
    left: calc(100% - #{$h2} - 2px);
  }
</style>
