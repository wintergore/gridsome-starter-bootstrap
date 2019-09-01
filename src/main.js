import DefaultLayout from '~/layouts/Default.vue'

import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

import {
  MdApp,
  MdDrawer,
  MdToolbar,
  MdIcon,
  MdContent,
  MdButton,
  MdList,
  MdTabs
} from '../node_modules/vue-material/dist/components'

import '../node_modules/vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/black-green-dark.css'

import VueMq from '../node_modules/vue-mq';

// import VueInstagram from 'vue-instagram'
import VuePictureSwipe from '../node_modules/vue-picture-swipe'


export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)

  //vue-material components
  Vue.use(MdApp)
  Vue.use(MdDrawer)
  Vue.use(MdToolbar)
  Vue.use(MdIcon)
  Vue.use(MdContent)
  Vue.use(MdButton)
  Vue.use(MdList)
  Vue.use(MdTabs)

  // //vue-instagram
  // Vue.use(VueInstagram)

  //vue-picture-swipe
  Vue.component('vue-picture-swipe', VuePictureSwipe)
  //vue-mq
  Vue.use(VueMq, {
    breakpoints: {
      xs: 599,
      sm: 959,
      md: 1279,
      lg: 1919,
      xl: Infinity
    }
  })

}
