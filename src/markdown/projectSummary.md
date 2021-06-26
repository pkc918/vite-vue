### Switch 组件

> API 设计

```js
<Switch value="true"/>
<Switch value="false"/>
<Switch :value="true"/>
<Switch :value="false"/>
```

- 当 value 为字符串 “true” 或 布尔值 true 时，显示为开，其他情况一律为关

> Switch 源代码

![](./src/assets\switch.png)

接收外面一个 value（布尔值） 值，用来控制开关。

监听自定义事件，update:value，将改变的值穿出去，然后更新 props 里的value，以此来控制 Switch 的开关。

Tips：如果更新 value 值，事件名写成 update: value ，这时候，外面使用该组件时，想更新值可以用 v-model 代替

**<Switch v-model:value='bool'/>**

这样就方便多了！

### Button 组件

> API设计

```js
<Button size="big">大大大</Button>
<Button theme="link" level="main">主要链接按钮</Button>
<Button theme="link">普通链接按钮</Button>
<Button theme="link" level="danger">危险链接按钮</Button>
<Button loading>加载中</Button>
<Button disabled>禁用按钮</Button>
```

- 支持不同类型按钮（theme），不同样式按钮（level），不同大小按钮（size），加载（loading）以及禁用（disabled），通过css来控制的。

> Button源码

![](./src/assets/button.png)

通过使用该组件，然后属性传值，根据不同值实现不同效果。

防止css受外切影响，我们把 css 类型加上前置 gulu-，遵循最小影响原则。

### Dialog 组件

> API 设计

```
<Dialog v-model:visible="x" @updata:visible="x = $event" :closeonClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗标题</strong>
    </template>
    <template v-slot:content>
      <strong>Hello</strong>
      <div>World</div>
    </template>
  </Dialog>
```

visible：控制展示和关闭。

closeonClickOver：是否开启点击遮罩层关闭dialog。

ok：提供点击ok时调用的API。

cancel：点击cancel时调用的API。

内容支持：使用具名插槽自定义内容。

> Dialog源码

![](./src/assets/dialog.png)

该组件标题内容用户自定义使用插槽，控制显示隐藏，暴露一个点击确认的API和一个点击取消的API。

使用 Teleport 组件，让 dialog 的环境与 body 同级，以防止 dialog 被其他内容遮挡。

### 一键打开 dialog

> API还是一样，编写方式不一样

```js
const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
```

> 使用 h 函数渲染组件

![](./src/assets/一键dialog.png)

### Tabs 组件

> API 设计

```js
<Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
</Tabs>

const x = ref('导航1')
```

- 使用 selected 控制显示 tab 内容
- title 为 tab 的名称
- 内容区域为对应展示的内容

> Tabs 源码

![](./src/assets/Tabs.png)

- 子组件 tab 打印是一个对象，context.slots.default() 得到一个数组，数组里有一个或多个对象，是里面的子组件，每一个对象里有一个 type 属性和引用的文件全等。
- 使用 (context.slots.default())[0].props 可以获取子组件的 props 值，使用了 title来表示是否选中。
- 使用 css 控制显示和隐藏，使用 ref.value.getBoundingClientRect() 获取元素最新的位置信息以及大小。
- 使用 vue3 内置的动态组件 components ，就可以不使用 css 来展示内容了，在使用 components 时，也要加上 key 才会有更新。如下：

![components](./src/assets/components.png)

这就是本项目暂时开发的组件啦！

更多内容，敬请期待！！！

### 总结

学到了：

1. 如何分析需求，提供对应API，以及如何实现。
2. 写出优质代码，一点一点的更新出好代码，以事不过三的原则写代码，消除更多的重复代码。
3. 遇到问题时解决方式，Google，官方文档，问大佬，看源码。

### 结束语

**希望自己能在程序猿的路上越走越远！！！**