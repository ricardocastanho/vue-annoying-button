import { App, Plugin } from 'vue'

import AnnoyingButton from './components/Button.vue'

export const AnnoyingPlugin: Plugin = {
  install: (app: App): void => {
    app.component('v-annoying-button', AnnoyingButton)
  }
}
