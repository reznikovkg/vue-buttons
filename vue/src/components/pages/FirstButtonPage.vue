<template>
  <PageLayout>
    <div class="main-container">
      <div class="buttons-container">
        <FirstButton color="green">Button</FirstButton>
        <FirstButton color="white">Button</FirstButton>
        <FirstButton color="red">Button</FirstButton>
      </div>
      <div class="buttons-container">
        <FirstButton disabled color="green">Disabled</FirstButton>
        <FirstButton disabled color="white">Disabled</FirstButton>
        <FirstButton disabled color="red">Disabled</FirstButton>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import FirstButton from "@/components/ui/buttons/FirstButton.vue";

export default {
  components: {
    FirstButton,
    PageLayout
  }
}
</script>

<style lang="less">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  zoom: 200%;
  background: #EEEEEE;
  gap: 20px;
}

.buttons-container {
  display: flex;
  gap: 10px;
}
</style>
