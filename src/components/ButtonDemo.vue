<template>
  <div>
    <div>Button 示列</div>
    <h1>示例1</h1>
    <div>
      <Button>默认</Button>
      <Button theme="button">按钮</Button>
      <Button theme="link">链接</Button>
      <Button theme="text">文本</Button>
    </div>
    <h1>示例2</h1>
    <div>
      <Button size="big">大</Button>
      <Button>默认</Button>
      <Button size="small">小</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(1)
    }
  return { onClick }
  }
}
</script>
