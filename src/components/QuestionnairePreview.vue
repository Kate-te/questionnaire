<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{questionnaire.title}}</h3>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-striped table-vcenter">
                <tbody>
                <tr>
                    <td>
                        {{questionnaire.description}}
                    </td>
                    <td class="w-1">
                        <router-link
                                :to="{name: 'questionnaire', params: {questionnaireId: questionnaire.id}}"
                                class="btn btn-primary">
                            Accéder
                        </router-link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'questionnaire-preview',
      props: {
        questionnaire: {
          required: true,
          type: Object,
        },
      }
  }
</script>

<style scoped>

</style>