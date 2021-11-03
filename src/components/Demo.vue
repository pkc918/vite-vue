<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">收起代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script>
import Button from '../lib/Button.vue'
import Prism from 'prismjs'
import '../../public/css/prism.css'
import {
  computed,
  ref
} from 'vue'
export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup (props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        'html'
      )
    })
    const showCode = () => codeVisible.value = true
    const hideCode = () => codeVisible.value = false

    const codeVisible = ref(false)

    return {
      Prism,
      html,
      showCode,
      hideCode,
      codeVisible,
    }
  },
}
</script>

<style lang="scss">
$border-color: rgba(0,0,0,.3);

.demo {
  width: 800px;
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}

@media (max-width: 500px) {
  .demo{
    width: 100%;
  }
}
</style>
