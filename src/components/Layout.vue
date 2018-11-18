<template>
    <div class="page">
        <div class="page-main">
            <ui-header></ui-header>
            <!--<nav-menu></nav-menu>-->
            <slot></slot>
        </div>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
  import UiHeader from '@/components/UiHeader'
  import UiFooter from '@/components/UiFooter'
  // import NavMenu from '@/components/NavMenu'

  export default {
    name: 'layout',
    components: {
      UiHeader,
      // NavMenu,
      UiFooter
    }
  }
</script>

<style scoped>

</style>