<template>
    <layout>
        <div class="my-3 my-md-5">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">
                        Accueil - Tous Les Questionnaires
                    </h1>
                </div>
                <div class="row row-cards">
                    <div class="col-lg-12">

                        <ul class="list-group">
                            <li v-for="item in 10" class="list-group-item">
                                <questionnaire-preview></questionnaire-preview>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
  import Layout from '@/components/Layout';
  import QuestionnairePreview from '@/components/QuestionnairePreview'

  export default {
    name: 'questionnaire',
    components: {
      Layout,
      QuestionnairePreview
    }
  }
</script>

<style scoped>
    .list-group-item {
        padding: 0;
        background-color: transparent;
    }
</style>