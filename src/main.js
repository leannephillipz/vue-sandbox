import { createApp, reactive } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

const app = createApp(App,{})

app.use(Router)
app.use(Store)
app.mount('#app')

app.config.globalProperties.$store = Store.store

console.log(app.config.globalProperties)
