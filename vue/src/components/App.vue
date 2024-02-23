<template>
  <div class="body">
    <FourthButton bg-start="khaki" bg-end="darkorange" box-shadow-color="orange">
      Subscribe
    </FourthButton>

    <FourthButton bg-start="orange" bg-end="deeppink" box-shadow-color="hotpink">
      Click here
    </FourthButton>

    <FourthButton bg-start="deeppink" bg-end="red" box-shadow-color="mediumvioletred">
      Download
    </FourthButton>

    <br>

    <!--default-->
    <FourthButton>
      Play now
    </FourthButton>

    <FourthButton bg-start="deeppink" bg-end="mediumpurple" box-shadow-color="purple" >
      Explore
    </FourthButton>

    <FourthButton bg-start="mediumpurple" bg-end="rebeccapurple" box-shadow-color="purple">
      Read more
    </FourthButton>

    <RouterView />
    <ModalContainer />

  </div>

</template>

<script>
import FourthButton from "@/components/FourthButton.vue";
import ModalContainer from "@/components/parts/ModalContainer";

export default {
  components: {
    FourthButton,
    ModalContainer
  }
}
</script>

<style lang="less">

body {
  margin: 0;
  padding: 0;
  background-color: @cBaseTwo;
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
