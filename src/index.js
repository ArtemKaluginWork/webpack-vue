import Vue from 'vue'
import Hello from './components/Hello.vue'

new Vue({
  render: h => h(Hello),
}).$mount('#app')