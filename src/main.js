import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vPlugin from './plugins/plugin/index'
import myPlugin from './plugins/myplugin'
import global from "@/global";

// createApp(App).use(router).mount('#app')

const app = createApp(App, {})

app.use(router).use(myPlugin).mount('#app')


// const app = createApp({
//   provide: {
//     global
//   },
//   ...
// }


// app.config.globalProperties.$filtering = () => {
//   currencyUSD(value){
//     return '$' + value
//   }
// }

app.config.globalProperties.gblData = 'something'
app.component('a-child-component', {
  mounted() {
    console.log("hello" + this.gblData) // 'something'
  }
})



// app.config.globalProperties.$plugin = vPlugin
//
console.log(app)


// app.config.devtools = true

// var sourceOfTruth = {}
//
// var vmA = new Vue({
//   data: sourceOfTruth
// })
//
// var vmB = new Vue({
//   data: sourceOfTruth
// })



// createApp(App)
// .use(router)
// .mount('#app'))
