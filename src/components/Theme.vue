<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Théme 1 : L'organisation du syndicat</h3>
            <div><div class="clearfix">
                <div class="float-left">
                    <strong>43%</strong>
                </div>
            </div>
                <div class="progress progress-xs">
                    <div class="progress-bar bg-yellow" role="progressbar" style="width: 42%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
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
                <question-preview v-for="item in 4"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import QuestionPreview from '@/components/QuestionPreview'

  export default {
    name: 'theme',
    components: {
      QuestionPreview
    }
  }
</script>

<style scoped>

</style>