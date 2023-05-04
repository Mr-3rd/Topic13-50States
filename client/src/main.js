import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

// import the vue router (index.js)
import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

// tell the app to use the vue router
app.use(router)

app.mount('#app')
