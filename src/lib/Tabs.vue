<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav" ref="container">
    <div class="gulu-tabs-nav-item" 
      :class="{selected: t===selected}" 
      v-for="(t,index) in titles" 
      :key="index" 
      :ref=" el => { if(t===selected) selectedItem = el }" 
      @click="select(t)">{{t}}
    </div>
    <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <component 
      class="gulu-tabs-content-item"
      :is="current" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {
  computed,
  ref,
  onMounted,
  watchEffect
} from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null);
    const indicator = ref < HTMLDivElement > (null);
    const container = ref < HTMLDivElement > (null);
    const x = () => {
      const {
        width
      } = selectedItem.value.getBoundingClientRect();
      console.log(selectedItem.value.getBoundingClientRect())
      indicator.value.style.width = width + "px";
      const {
        left: navLeft
      } = container.value.getBoundingClientRect();
      const {
        left: tabLeft
      } = selectedItem.value.getBoundingClientRect();
      const left = tabLeft - navLeft;
      indicator.value.style.left = left + "px";
    };
    onMounted(() => {
      watchEffect(x);
    });

    const defaults = context.slots.default();
    console.log(defaults[0])
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      select,
      current,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
