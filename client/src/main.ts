import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Routes
import Home from './views/Home.vue'
import MyTokens from './views/MyTokens.vue'
import Transfer from './views/Transfer.vue'
import Mint from './views/Mint.vue'
import History from './views/History.vue'
import Marketplace from './views/Marketplace.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tokens', component: MyTokens },
    { path: '/transfer', component: Transfer },
    { path: '/mint', component: Mint },
    { path: '/history', component: History },
    { path: '/marketplace', component: Marketplace }
  ]
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')