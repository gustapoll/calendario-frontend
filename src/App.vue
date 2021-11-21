<template>
  <div id="app">
    <router-view />
    <Footer :email="email"/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  metaInfo: {
    title: 'Calendário Dissidente',
    titleTemplate: '%s | Calendário Dissidente'
  },
  components: {
    Footer
  },
  data () {
    return {
      email: 'didianaprata@usp.br'
    }
  }
}
</script>
