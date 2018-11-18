<template>
    <layout>
        <div class="my-3 my-md-5">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">
                        Tout les Questionnaires
                    </h1>
                </div>
                <div class="row row-cards">
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-md-6 col-lg-12">
                                <theme-sidebar />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <theme v-for="(theme, index) in getQuestionnaireThemes"
                               :key="theme.id"
                               :index-theme="index + 1"
                               :theme="theme"></theme>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Layout from '@/components/Layout';
  import ThemeSidebar from '@/components/ThemeSidebar';
  import Theme from '@/components/Theme'

  export default {
    name: 'questionnaire',
    components: {
      Layout,
      ThemeSidebar,
      Theme
    },
    data() {
      return {
        idQuestionnaire: this.$route.params.questionnaireId,
      }
    },
    computed: {
      ...mapGetters(['getQuestionnaireThemes']),
    }
  }
</script>

<style scoped>

</style>