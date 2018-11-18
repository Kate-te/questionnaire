<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Questionnaire 1</h3>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-striped table-vcenter">
                <tbody>
                <tr>
                    <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu sapien, dictum ut iaculis
                        non, elementum eget lectus. Duis eget bibendum lorem. Proin non interdum orci, vel accumsan
                        dui. Etiam varius magna sem, ut varius massa ullamcorper ornare. Pellentesque mollis, velit
                        vitae viverra rutrum, lorem lacus convallis ipsum, sed tempus felis felis sit amet purus.
                        Fusce interdum urna ipsum, sed malesuada mauris volutpat id. Phasellus vitae erat imperdiet,
                        pulvinar elit nec, sodales metus. Mauris mollis luctus dolor, sed commodo orci facilisis id.
                    </td>
                    <td class="w-1">
                        <router-link
                                :to="{name: 'questionnaire', params: {questionnaireId: 1}}"
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
        questionnaire: Object,
        // required: true
      }
  }
</script>

<style scoped>

</style>