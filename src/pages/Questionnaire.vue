<template>
    <layout>
        <div class="header pt-2 pb-2">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 ml-auto">
                        <form class="input-icon my-3 my-lg-0">
                            <input type="Search"
                                   class="form-control header-search"
                                   placeholder="Rechercher…"
                                   v-model="searchField"
                                   tabindex="1">
                            <div class="input-icon-addon">
                                <i class="fe fe-search"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
                                <theme-sidebar :themes="getQuestionnaireThemes"
                                               @collapsed="onToggleCollapse"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <theme v-for="(theme, index) in getFilterQuestionnaireThemes(searchField)"
                               :key="theme.id"
                               :opened="themeCollapsed[theme.id]"
                               :index-theme="index + 1"
                               :theme="theme"
                               @collapsed="onToggleCollapse" />
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
      Theme,
    },
    data() {
      return {
        idQuestionnaire: this.$route.params.questionnaireId,
        themeCollapsed: [],
        searchField: ''
      }
    },
    computed: {
      ...mapGetters([
        'getQuestionnaireThemes',
        'getFilterQuestionnaireThemes'
      ]),
    },
    created() {
      this.themeCollapsed = this.getQuestionnaireThemes.reduce((obj, theme) => {
        obj[theme.id] = false;
        return obj}, {});
    },
    methods: {
      onToggleCollapse(val) {
        this.themeCollapsed[val.id] = val.state
      }
    }
  }
</script>

<style scoped>

</style>