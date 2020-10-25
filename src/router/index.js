import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Dashboard/Dashboard.vue'),
  },
  {
    path: '/dateForm',
    name: 'DateForm',
    component: () => import( '../views/DateForm/DateForm.vue'),
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import( '../views/Departments/Departments.vue'),
    children: [
      {
        path: 'Insert',
        component: () => import( '../components/Departments/Insert.vue')
      },
      {
        path: 'Delete',
        component: () => import( '../components/Departments/Delete.vue')
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
