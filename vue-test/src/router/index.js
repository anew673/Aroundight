import Vue from 'vue'
import Router from 'vue-router'
import ProductTree from '@/components/ProductTree'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'ProductTree',
      component: ProductTree
    }
  ]
})
