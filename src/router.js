import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Home from './pages/Home'
import Pantone from './pages/Pantone'
import About from './pages/About'
import AboutPantone from './pages/AboutPantone'
import AboutE from './pages/AboutE'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pantone',
      name: 'pantone',
      component: Pantone
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      component: AboutE
    },
    {
      path: '/pantone-sobre',
      name: 'sobre-pantone',
      component: AboutPantone
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
