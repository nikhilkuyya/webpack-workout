import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

/* eslint-disable no-new */
export default function setVueApp() {
  new Vue({
    el: "#app",
    template: "<App/>",
    components: { App }
  })
}
