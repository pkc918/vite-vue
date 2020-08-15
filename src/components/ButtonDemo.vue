<template>
  <div>Button 示列</div>
  <h3>示例1</h3>
  <div>
    <Button>默认</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </div>
  <h3>示例2</h3>
  <div>
    <div>
      <Button theme="button" size="big">大</Button>
      <Button theme="button">默认</Button>
      <Button theme="button" size="small">小</Button>
    </div>
    
    <div>
      <Button theme="link" size="big">大</Button>
      <Button theme="link">默认</Button>
      <Button theme="link" size="small">小</Button>
    </div>

    <div>
      <Button theme="text" size="big">大</Button>
      <Button theme="text">默认</Button>
      <Button theme="text" size="small">小</Button>
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
