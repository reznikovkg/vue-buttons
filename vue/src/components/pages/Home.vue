<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <button @click="()=> goToThirdButton()">Go to Third Button Page</button>
    </section>
  </PageLayout>
</template>
<script>
  import PageLayout from '../parts/PageLayout';
  import { helpModal } from "@/mixins/modals";
  import { RouteNames } from '@/router/routes';
  export default {
    name: 'HomePage',
    mixins: [helpModal],
    components: {
      PageLayout
    },
    methods: {
      goToThirdButton() {
        this.$router.push({ name: RouteNames.THIRD_BUTTON });
      }
    }
  }
</script>
<style>
</style>
