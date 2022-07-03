import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'sh-vue3-components/dist/style/button.scss'

createApp(App).use(router).mount('#app')
