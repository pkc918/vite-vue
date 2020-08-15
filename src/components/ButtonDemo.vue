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
  <h3>示例3</h3>
  <div>
    <div>
      <Button theme="button">普通按钮</Button>
      <Button theme="button" level="main">主要按钮</Button>
      <Button theme="button" level="danger">危险按钮</Button>
    </div>

    <div>
      <Button theme="link">普通链接</Button>
      <Button theme="link" level="main">主要链接</Button>
      <Button theme="link" level="danger">危险链接</Button>
    </div>

    <div>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text" level="danger">警告文字按钮</Button>
    </div>
  </div>
  <h3>示例4</h3>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
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
