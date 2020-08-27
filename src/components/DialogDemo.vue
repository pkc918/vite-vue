<template>
<div>
  <div>Dialog 示例</div>
  <h3>实列1</h3>
  <Button theme="text" style='margin-top:10px; color:#409eff;' @click="toggleVisible">点击打开dialog</Button>
  <Dialog :visible="x"></Dialog>
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
    return {
      x,
      toggleVisible,
    };
  },
};
</script>
