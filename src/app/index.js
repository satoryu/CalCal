import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfong: 'md'
})

import App from './app.vue'

new Vue({
    el: '#app',
    components: { App },
    template: `<App></App>`
})
