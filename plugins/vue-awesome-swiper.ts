import { defineNuxtPlugin } from 'nuxt/app'
import SwiperClass from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import swiper styles
import 'swiper/css'

export default defineNuxtPlugin(nuxtApp => {
  SwiperClass.use([/* swiper modules... */])
  nuxtApp.vueApp.use(VueAwesomeSwiper)
})
