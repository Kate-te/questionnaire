import Vue from 'vue'
import Vuex from 'vuex'
import { statuses } from './consts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionnaires: [
      {
        id: '1',
        name: 'first',
        title: 'This is very first one',
        description: 'When using Vue, we recommend also installing the Vue Devtools in your browser, allowing you to inspect and debug your Vue applications in a more user-friendly interface.'
      },
      {
        id: '2',
        name: 'second',
        title: 'This is second questionnaire',
        description: 'You can browse the source of the NPM package at cdn.jsdelivr.net/npm/vue.Vue is also available on unpkg and cdnjs (cdnjs takes some time to sync so the latest release may not be available yet). Make sure to read about the different builds of Vue and use the production version in your published site, replacing vue.js with vue.min.js. This is a smaller build optimized for speed instead of development experience.'
      },
    ],
    themes: {
      idQuestionnaire: '1',
      list: [
        {
          id: '11',
          title: 'Some title',
          percentDone: 0,
          questionsCount: 3,
          questions: [
            {
              id: '111',
              text: 'Vue provides an official CLI for quickly scaffolding ambitious Single Page Applications. It provides batteries-included build setups for a modern frontend workflow. It takes only a few minutes to get up and running with hot-reload, lint-on-save, and production-ready builds. See the Vue CLI docs for more details?',
              status: 0,
            },
            {
              id: '112',
              text: 'The CLI assumes prior knowledge of Node.js and the associated build tools. If you are new to Vue or front-end build tools, we strongly suggest going through the guide without any build tools before using the CLI?',
              status: 0,
            },
            {
              id: '113',
              text: 'UMD: UMD builds can be used directly in the browser via a tag. The default file from jsDelivr CDN at https://cdn.jsdelivr.net/npm/vue is the Runtime + Compiler UMD build (vue.js)?',
              status: 0,
            },
          ],
        },
        {
          id: '12',
          title: 'Some title2',
          percentDone: 50,
          questionsCount: 2,
          questions: [
            {
              id: '121',
              text: 'If you need to compile templates on the client (e.g. passing a string to the template option, or mounting to an element using its in-DOM HTML as the template), you will need the compiler and thus the full build?',
              status: 1,
            },
            {
              id: '122',
              text: 'Since the runtime-only builds are roughly 30% lighter-weight than their full-build counterparts, you should use it whenever you can. If you still wish to use the full build instead, you need to configure an alias in your bundler?',
              status: 0,
            },
          ]
        }
      ]
    },
    answers: [],
  },
  mutations: {
    updatePercentDone(state, idTheme) {
      const currentTheme = state.themes.list.find((item) => item.id === idTheme)
      let countDone = 0
      currentTheme.questions.forEach((item) => {
        if (item.status === statuses.DONE) {
          countDone++
        }
      })
      currentTheme.percentDone = (countDone / currentTheme.questionsCount * 100).toFixed(2)
    },
  },
  actions: {
    onQuestionAnswered({ state, commit}, data) {
      let currentQuestion = null
      state.themes.list.forEach((item) => {
        currentQuestion = item.questions.find((question) => question.id === data.idQuestion) || currentQuestion
        if (currentQuestion !== null) {
          currentQuestion.status = 1
          Vue.set(currentQuestion, 'answer', data)
          commit('updatePercentDone', item.id)
        }
      })
    },
  },
  getters: {
    getQuestionnaireThemes(state) {
      return state.themes.list
    },
    questionnaires(state) {
      return state.questionnaires
    },
    questionDetails: (state) => (id) => {
      let question = null
      state.themes.list.forEach((theme, index) => {
        question = theme.questions.find((question) => question.id === id) || question
        if (question !== null) {
          question = {
            indexQuestion: theme.questions.indexOf(question) + 1,
            indexTheme: index + 1,
            ...question,
          }
        }
      })
      return question
    }
  },
})
