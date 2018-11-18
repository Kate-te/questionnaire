<template>
    <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 ml-auto">
                    <form class="input-icon my-3 my-lg-0">
                        <input type="Search" class="form-control header-search" placeholder="Rechercher&hellip;" tabindex="1">
                        <div class="input-icon-addon">
                            <i class="fe fe-search"></i>
                        </div>
                    </form>
                </div>
                <div class="col-lg order-lg-first">
                    <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                        <li class="nav-item">
                            <a href="./questionnaire-list.html" class="nav-link"><i class="fe fe-home"></i> Accueil</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="./questionnaire-detail.html" class="nav-link active"><i class="fe fe-check-square"></i> Questionnaire 1</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="./questionnaire-list.html" class="nav-link"><i class="fe fe-check-square"></i> Mes Questionnaires</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="./questionnaire-list.html" class="nav-link"><i class="fe fe-check-square"></i> Ancien questionnaires</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fe fe-file-text"></i> FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'nav-menu',
  }
</script>

<style scoped>

</style>