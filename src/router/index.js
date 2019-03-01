import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home =()=>import('@/components/home/home.vue')
const Product =()=>import('@/components/product/product.vue')
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
