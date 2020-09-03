<template>
<div class="gulu-tabs">
  <div class="gulu-tabs-nav">
    <div class="gulu-tabs-nav-item" :class="{selected: t===selected}" v-for="(t,index) in titles" :key="index" :ref=" el => { if(el) navItems[index] = el }" @click="select(t)">{{t}}
    </div>
    <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="gulu-tabs-content">
    <component class="gulu-tabs-content-item" :class="{selected: c.props.title === selected}" v-for="(c,index) in defaults" :is="c" :key="index" />
  </div>
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {
  computed,
  ref,
  onMounted
} from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref < HTMLDivElement[] > ([]);
    const indicator = ref < HTMLDivElement > (null);
    onMounted(() => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      const {
        width
      } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
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
      navItems,
      indicator,
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
