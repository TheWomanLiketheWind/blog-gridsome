// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import AxiosRequest from '~/api/request.js'
import '~/assets/css/index.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.use(AxiosRequest)
  Vue.component('Layout', DefaultLayout)
}
