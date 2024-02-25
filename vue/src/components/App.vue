<template>
  <div>
    <RouterView />
    <ModalContainer />
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
  </div>
</template>

<script>
import ModalContainer from "@/components/parts/ModalContainer";
import FirstButton from "@/components/ui/buttons/FirstButton.vue";

export default {
  components: {
    FirstButton,
    ModalContainer
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: @cBaseTwo;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  zoom: 200%;
  gap: 20px;
  position: relative;
  bottom: 200px;
}
.buttons-container {
  display: flex;
  gap: 10px;
}

a {
  text-decoration: none;
}

section {
  background-color: @cBaseOne;
  margin-bottom: 20px;
  border-radius: 2px;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }
}

h1, h2, h3, h4, h5 {
  font-family: @ffOne;
  color: @cBaseThree;
  margin: 0;
}

h2 {
  font-size: 32px;
}

.p-16 {
  padding: 16px;
}

.d-flex {
  display: flex;
}

.rcms {

  &-divider {

    &-h {
      width: 100%;
      height: @sizeBorderDefault;
      background-color: @cBaseTwo;
    }

    &-v {

    }
  }

  &-loading {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: rgba(100, 100, 100, 0.5);
      cursor: wait;
    }
  }
}
</style>
