<template>
  <div class="switch">
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
      context.emit('update:value', !props.value)
    }
    return { toggleChecked }
  }
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .switch{
    > button{
      height: $h;
      width: $h*2;
      border: none;
      background: #bfbfbf;
      border-radius: $h/2;
      position: relative;
      outline: none;
      > span{
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: left 0.3s;
      }
      &.checked{
        background: #1890ff;
        > span{
          left: calc(100% - #{$h2} - 2px);
        }
      }
      &.checked:active{
        > span{
          width: $h2 + 4px;
          margin-left: -4px;
        }
      }
    }
  }
</style>
