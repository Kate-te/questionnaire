import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/Login.vue'),
    },
    {
      path: '/questionnaires',
      alias: '/',
      name: 'questionnaires',
      component: () => import('./pages/Questionnaires.vue'),
    },
    {
      path: '/questionnaire/:questionnaireId',
      name: 'questionnaire',
      component: () => import('./pages/Questionnaire.vue'),
    },
    {
      path: '/questionnaire/:questionnaireId/question/:questionId',
      name: 'question',
      component: () => import('./pages/Question.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (!window.localStorage.getItem('auth_token') && to.name !== 'login') {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router