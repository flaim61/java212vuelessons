import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import './assets/main.css'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
