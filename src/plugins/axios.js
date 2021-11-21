import Vue from 'vue'
import axios from 'axios'

Vue.use({
  install (Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://' + process.env.VUE_APP_URL + '/'
    })

    Vue.prototype.$pantone = axios.create({
      baseURL: 'https://' + process.env.VUE_APP_URL + '/pantone/'
    })
  }
})
