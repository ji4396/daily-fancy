import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' //移动端适配
// import VConsole from 'vconsole' 

const app = createApp(App)
console.log('import.meta.env-----------------',import.meta.env);

// new VConsole()
app.use(store)

app.use(router)

app.config.globalProperties.$router =router

app.mount('#app')


