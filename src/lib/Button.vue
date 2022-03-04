<template>
    <button class="gulu-button"
    :class="classes"
    :disabled="disabled">
      <span v-show="loading" class="gulu-loadingIndicator"></span>
      <slot />
    </button>
</template>
<script lang="ts">
import { computed } from 'vue';
export default {
  props: {
    theme: {
      type: String,
      default:"button"
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${ theme }`]: theme,
        [`gulu-size-${ size }`]: size,
        [`gulu-level-${ level }`]: level
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #f56c6c;
$grey: grey;
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
  &.gulu-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color:lighten($color: $blue, $amount: 10%)
    }
  }
  &.gulu-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken($color: white, $amount: 5%);
    }
  }
  &.gulu-theme-button{
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  &.gulu-theme-link {
    &.gulu-level-main {
      color: #85ce61;
    }
    &.gulu-level-danger {
      color: $red;
    }
  }
  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  > .gulu-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
h3{
  margin-top: 20px;
}
</style>
