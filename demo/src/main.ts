import { createApp } from 'vue'
import AnnoyingPlugin from 'vue-annoying-button'

import App from './App.vue'

createApp(App)
  .use(AnnoyingPlugin)
  .mount('#app')
