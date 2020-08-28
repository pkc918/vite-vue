<template>
<div>
  <div>Dialog 示例</div>
  <h3>实例1</h3>
  <Button theme="text" style='margin-top:10px; color:#409eff;' @click="toggleVisible">点击打开dialog</Button>
  <Dialog v-model:visible="x" @updata:visible="x = $event" :closeonClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello</strong>
      <div>World</div>
    </template>
  </Dialog>
  <h3>实例2</h3>
  <Button @click="showDialog">Dialog</Button>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
  openDialog
} from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "提示",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      x,
      toggleVisible,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>
