<template>
    <div class="header py-4">
        <div class="container">
            <div class="d-flex">
                <router-link class="header-brand" :to="{name: 'questionnaires'}">
                    <img src="https://i.onthe.io/shpzkl17smi36o636.a804c190.png" class="header-brand-img" alt="tabler logo">
                    Survey
                </router-link>
                <div class="d-flex order-lg-2 ml-auto">
                    <div class="dropdown">
                        <a href="#" class="nav-link pr-0 leading-none" data-toggle="dropdown">
                            <span class="avatar" style="background-image: url(./demo/faces/female/25.jpg)"></span>
                            <span class="ml-2 d-none d-lg-block">
                  <span class="text-default">Jane Pearson</span>
                  <small class="text-muted d-block mt-1">Administrator</small>
                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ui-header',
  }
</script>

<style scoped>

</style>