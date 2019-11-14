/**
 * PWA
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

/**
 * Application Insights
 */
import { AppInsights } from "applicationinsights-js";

if (INSTRUMENTATION_KEY) {
  AppInsights.downloadAndSetup({ instrumentationKey: INSTRUMENTATION_KEY });
  AppInsights.trackPageView();
}

/**
 * Vue.js
 */
import Vue from "vue";
import vuetify from "@/plugins/vuetify";

import CalCal from "./CalCal.vue";

new Vue({
  el: "#app",
  vuetify,
  components: { CalCal },
  template: `<CalCal></CalCal>`
});
