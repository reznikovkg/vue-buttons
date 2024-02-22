<template>
  <div class="body">
    <FourthButton class="yellow-orange">
      Subscribe
    </FourthButton>
    <FourthButton class="orange-pink">
      Click here
    </FourthButton>
    <FourthButton class="pink-red">
      Download
    </FourthButton>

    <br>

    <FourthButton class="blue-red">
      Play now
    </FourthButton>
    <FourthButton class="pink-purple">
      Explore
    </FourthButton>
    <FourthButton class="mediumpurple-purple">
      Read more
    </FourthButton>
  </div>
</template>

<script>
import ModalContainer from "@/components/parts/ModalContainer";
import FourthButton from "@/components/FourthButton.vue";

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

.blue-red{
  box-shadow: 0 2px 15px purple;
  background: linear-gradient(to right, blue, red);
}

.yellow-orange{
  box-shadow: 0 2px 15px orange;
  background: linear-gradient(to right, khaki, darkorange);
}

.orange-pink{
  box-shadow: 0 2px 15px hotpink;
  background: linear-gradient(to right, orange, deeppink);
}

.pink-red{
  box-shadow: 0 2px 15px mediumvioletred;
  background: linear-gradient(to right, deeppink, red);
}

.pink-purple{
  box-shadow: 0 2px 15px purple;
  background: linear-gradient(to right, deeppink, mediumpurple);
}

.mediumpurple-purple{
  box-shadow: 0 2px 15px purple;
  background: linear-gradient(to right, mediumpurple, rebeccapurple);
}

</style>
