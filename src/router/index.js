import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
import home from '../pages/home.vue'
import question from '../pages/question.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/question',
      name:'question',
      component:question
    }
  ]
})
