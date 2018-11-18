import Vue from 'vue'
import Router from 'vue-router'
import { checkAuthToken } from '@/helpers/auth'

Vue.use(Router)

export default new Router({
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
      beforeEnter: checkAuthToken,
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
