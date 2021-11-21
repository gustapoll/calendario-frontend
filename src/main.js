import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import VueAnalytics from 'vue-analytics'

import './plugins/axios'
import './plugins/click'
import './plugins/scroll'
import './plugins/modal'

moment.locale('pt_BR')

Vue.config.productionTip = false

Vue.filter('formatMonthDay', value => {
  return moment(value, 'YYYY-MM-DD').format('D')
})

Vue.filter('formatImageURL', value => {
  // return 'https://' + process.env.VUE_APP_URL + '.ngrok.io/get_image' + value.substring(1)
  return 'https://' + 'storage.googleapis.com/calendario-ativista.appspot.com' + '/2' + value.substring(1).replace('#', '%23')
})

Vue.filter('reduceLength', value => {
  const length = 84
  return value.substring(0, length)
})

Vue.filter('removeURL', value => {
  const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/igm

  return value.replace(regex, '')
})

Vue.use(VueAnalytics, {
  id: 'UA-156340197-1',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
