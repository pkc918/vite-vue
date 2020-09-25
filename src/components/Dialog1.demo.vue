<demo>
  常规使用
</demo>

<template>
<div>
  <Button theme="text" style="margin-top: 10px; color: #409eff" @click="toggleVisible">点击打开dialog</Button>
  <Dialog v-model:visible="x" @updata:visible="x = $event" :closeonClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello</strong>
      <div>World</div>
    </template>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false)
    const toggleVisible = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggleVisible,
      f1,
      f2,
    }
  },
}
</script>
