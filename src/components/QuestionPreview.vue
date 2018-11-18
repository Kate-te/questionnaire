<template>
    <tr>
        <td class="w-1"><span class="avatar">{{indexTheme}}-{{indexQuestion}}</span></td>
        <td>{{question.text}}</td>
        <td>{{getStatuseText(question.status)}}</td>
        <td class="w-1">
            <router-link :to="{name: 'question', params: {questionId: question.id}}"
                         class="btn btn-primary">
                Répondre
            </router-link>
        </td>
    </tr>
</template>

<script>
  import { statuses } from '@/consts'

  export default {
    props: {
      question: {
        required: true,
        type: Object,
      },
      indexTheme: {
        required: true,
        type: Number,
      },
      indexQuestion: {
        required: true,
        type: Number,
      },
    },
    name: 'question-preview',
    methods: {
      getStatuseText(code) {
        switch (code) {
          case statuses.INITIAL:
            return 'A remplir'
          case statuses.DONE:
            return 'done'
          case statuses.DRAFT:
            return 'draft'
          default:
            return ''
        }
      }
    }
  }
</script>

<style scoped>

</style>