<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">Thémes</h4>
        </div>
        <table class="table card-table">
            <tbody>
                <tr v-for="(theme, index) in themes" :key="theme.id">
                    <td>
                        <a :href="href(theme.title)"
                           @click="toggleCollapse(theme.id)"
                           v-scroll-to="{
                                         el: `#theme-${index + 1}`,
                                         offset: -200,
                                         onStart: null,
                                        }">
                            {{ index + 1 }} : {{ theme.title | truncate(80) }}
                        </a>
                    </td>
                    <td class="text-right">
                        <span class="text-muted">{{ theme.percentDone }}%</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'theme-sidebar',
    props: {
      themes: {
        type: Array,
        require: false
      }
    },
    methods: {
      href(title) {
        return `#${title.toLowerCase().replace(/ /g, '-')}`
      },
      toggleCollapse(id) {
        this.$emit('collapsed', {id, state: !this.opened})
      }
    }
  }
</script>

<style scoped>

</style>