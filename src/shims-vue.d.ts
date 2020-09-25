// shims-vue.d.ts
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// xxx.md
declare module '*.md' {
  const str: string
  export default str
}
