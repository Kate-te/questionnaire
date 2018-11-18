<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Théme {{indexTheme}} : {{theme.title}}</h3>&nbsp;
            <div>
                <div class="clearfix">
                    <div class="float-left">
                        <strong>{{theme.percentDone}}%</strong>
                    </div>
                </div>
                <div class="progress progress-xs">
                    <div class="progress-bar bg-yellow"
                         role="progressbar"
                         :style="{width: `${theme.percentDone}%`}"
                         :aria-valuenow="theme.percentDone"
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-striped table-vcenter">
                <thead>
                <tr>
                    <th colspan="2">Question</th>
                    <th>Etat</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <question-preview v-for="(question, index) in theme.questions"
                                  :key="question.id"
                                  :index-question="index + 1"
                                  :index-theme="indexTheme"
                                  :question="question"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import QuestionPreview from '@/components/QuestionPreview'

  export default {
    name: 'theme',
    props: {
      theme: {
        required: true,
        type: Object,
      },
      indexTheme: {
        required: true,
        type: Number,
      },
    },
    components: {
      QuestionPreview
    },
  }
</script>

<style scoped>

</style>