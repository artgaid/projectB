import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import VueWriter from 'vue-writer';

import './assets/main.css'

createApp(App).use(VueWriter).mount('#app')
