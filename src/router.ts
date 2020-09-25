import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import { h } from 'vue'

const history = createWebHashHistory()

// md渲染路径传参
const md = (string) =>
  h(Markdown, {
    content: string,
    key: string,
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
          component: md(intro),
        },
        {
          path: 'get-start',
          component: md(getStarted),
        },
        {
          path: 'install',
          component: md(install),
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
})
