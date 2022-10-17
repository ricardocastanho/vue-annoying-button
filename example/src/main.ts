import { createApp } from 'vue'
import App from './App.vue'
import { AnnoyingPlugin } from 'vue-annoying-button'

createApp(App)
  .use(AnnoyingPlugin)
  .mount('#app')
