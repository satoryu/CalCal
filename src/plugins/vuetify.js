import Vue from "vue";
import Vuetify from "vuetify/lib";
import 'vuetify/dist/vuetify.min.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons
library.add(far) // Include needed icons
library.add(fab) // Include needed icons

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "faSvg"
  }
};

dom.watch()

export default new Vuetify(opts);
