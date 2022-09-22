import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Step1 from '../views/Step1.vue'


Vue.use(VueRouter)

const routes = [
  {
    // 設定根目錄的轉址
    path: '/',
    name: 'root',
    redirect: '/1'
  },
  {
    path: '/1',
    name: 'Step1',
    component: Step1
  },
  {
    path: '/2',
    name: 'Step2',
    component: () => import ('../views/Step2.vue')
  },
  {
    path: '/3',
    name: 'Step3',
    component: function () {
      return import ('../views/Step3.vue')
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
