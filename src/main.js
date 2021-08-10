import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaPlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI)
Vue.use(PiniaPlugin)
const pinia = createPinia()

Vue.config.productionTip = false

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
