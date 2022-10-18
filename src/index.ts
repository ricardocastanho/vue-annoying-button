import { App, Plugin } from 'vue'

import AnnoyingButton from './components/Button.vue'

const AnnoyingPlugin: Plugin = {
  install: (app: App): void => {
    app.component('v-annoying-button', AnnoyingButton)
  }
}

export { AnnoyingButton as VAnnoyingButton }

export default AnnoyingPlugin
