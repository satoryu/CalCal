import Vue from 'vue'
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition
  }
})

import App from './app.vue'

new Vue({
    el: '#app',
    components: { App },
    template: `<App></App>`
})
