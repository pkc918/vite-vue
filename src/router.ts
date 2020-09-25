import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Markdown from './components/Markdown.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import { h } from 'vue'

const history = createWebHashHistory()

// md渲染路径传参
const md = (fileName) =>
  h(Markdown, {
    path: `../markdown/${fileName}`,
    key: fileName,
  })

export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        {
          path: 'intro',
          component: md('intro.md'),
        },
        {
          path: 'get-start',
          component: md('get-started.md'),
        },
        {
          path: 'install',
          component: md('install.md'),
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
})
