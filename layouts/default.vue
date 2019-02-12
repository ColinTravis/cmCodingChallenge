<template>
  <div class="page_container">
      <page-header/>
      <nuxt class="container-fluid"/>
      <page-footer/>
  </div>
</template>

<script>

    import PageHeader from '~/components/PageHeader.vue'
    import PageFooter from '~/components/PageFooter.vue'

    export default {
        components: {
            PageHeader,
            PageFooter
        }
    }
</script>
