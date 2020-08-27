<template>
<div>
  <div>Dialog 示例</div>
  <h3>实列1</h3>
  <Button theme="text" style='margin-top:10px; color:#409eff;' @click="toggleVisible">点击打开dialog</Button>
  <Dialog v-model:visible="x" @updata:visible="x = $event" :closeonClickOverlay="false" :ok="f1" :cancel="f2">
    <div>Hello</div>
    <div>World</div>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
  ref
} from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggleVisible = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      x,
      toggleVisible,
      f1,
      f2,
    };
  },
};
</script>
