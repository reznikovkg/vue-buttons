<template>
  <PageLayout>
    <ThirteenthButton setting-button="black"/>
    <ThirteenthButton setting-button="blue"/>
    <ThirteenthButton setting-button="green"/>
    <ThirteenthButton setting-button="red"/>
  </PageLayout>
</template>

<script>
import ThirteenthButton from "@/components/ui/buttons/ThirteenthButton.vue"
import PageLayout from "@/components/parts/PageLayout.vue";

export default {
  name: 'ThirteenthButton',
  components: {
    PageLayout,
    ThirteenthButton
  }
}
</script>
