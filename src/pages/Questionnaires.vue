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
                            <li v-for="item in questionnaires" class="list-group-item">
                                <questionnaire-preview :questionnaire="item"
                                                       :key="item.id"></questionnaire-preview>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Layout from '@/components/Layout';
  import QuestionnairePreview from '@/components/QuestionnairePreview'

  export default {
    name: 'questionnaire',
    components: {
      Layout,
      QuestionnairePreview
    },
    computed: {
      ...mapGetters(['questionnaires']),
    }
  }
</script>

<style scoped>
    .list-group-item {
        padding: 0;
        border: 0;
        background-color: transparent;
    }
</style>