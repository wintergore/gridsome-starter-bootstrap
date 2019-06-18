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
} from 'vue-material/dist/components'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-dark.css'

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

}
