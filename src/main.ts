import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import XiaoPan from './components/XiaoPan.vue'
import XiaoPan2 from './components/XiaoPan2.vue'


const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: XiaoPan},
    {path: '/xxx', component: XiaoPan2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
