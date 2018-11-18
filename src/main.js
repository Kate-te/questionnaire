import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import './filters'
import 'tabler-ui/dist/assets/css/tabler.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
