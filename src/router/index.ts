import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import ResourceCrud from '../views/ResourceCrud.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'courses-crud', path: '/:resource/list', component: ResourceCrud, props: true }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
