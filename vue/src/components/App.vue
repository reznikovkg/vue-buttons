<template>
  <div>
    <TwelveBtn :purple ="true" title="button"/>
    <TwelveBtn :green="true" title="button"/>
    <TwelveBtn :orange="true" title="button"/>
    <TwelveBtn :blue="true" title="button"/>
    <TwelveBtn :brown="true" title="button"/>
    <TwelveBtn :lime="true" title="button"/>
  </div>
</template>

<script>
import TwelveBtn from "@/components/ui/buttons/TwelveBtn";

export default {
  components: {
    TwelveBtn
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

div{
  width: 40%;
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-gap: 20px;
}
</style>
