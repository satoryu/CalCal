import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

Vue.use(Vuetify, {
  iconfont: "mdi"
});

import CalCal from "./CalCal.vue";

new Vue({
  el: "#app",
  components: { CalCal },
  template: `<CalCal></CalCal>`
});
