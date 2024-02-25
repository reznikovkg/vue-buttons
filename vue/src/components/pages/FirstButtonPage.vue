<template>
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
</template>

<script setup>
import FirstButton from "@/components/ui/buttons/FirstButton.vue";
</script>

<style lang="less">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  zoom: 200%;
  background: #EEEEEE;
  gap: 20px;
  position: relative;
  bottom: 200px;
}

.buttons-container {
  display: flex;
  gap: 10px;
}
</style>
