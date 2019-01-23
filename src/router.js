import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/signup.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta:{
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to,from,next)=>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record=> record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login')
  else if(!requiresAuth && currentUser) next('home')
  else next()
})

export default router
