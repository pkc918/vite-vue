<template>
    <button class="gulu-button" :class="`theme-${ theme }`">
      <slot />
    </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default:'button'
    }
  }
}
</script>

<style lang="scss" scope>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background-color: white;
  color: $color;
  border-radius: $radius;
  border: 1px solid $border-color;
  box-shadow: 0 1px 0 fade-out($color: black, $amount: 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus{
    border-color: $blue;
    color: $blue;
  }
  &:focus{
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
