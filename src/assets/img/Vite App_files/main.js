import { createApp } from '/node_modules/.vite/deps/vue.js?v=cfa17153'
import App from '/src/App.vue'
import router from '/src/router/index.js'

import '/src/assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
