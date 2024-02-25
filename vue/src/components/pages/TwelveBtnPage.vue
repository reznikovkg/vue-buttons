<template>
  <FlexBtn>
    <TwelveBtn :purple ="true" title="button"/>
    <TwelveBtn :green="true" title="button"/>
    <TwelveBtn :orange="true" title="button"/>
    <TwelveBtn :blue="true" title="button"/>
    <TwelveBtn :brown="true" title="button"/>
    <TwelveBtn :lime="true" title="button"/>
  </FlexBtn>
</template>

<script>
import FlexBtn from '../parts/FlexBtn'
import TwelveBtn from "@/components/ui/buttons/TwelveBtn";

export default {
  name: 'TwelveBtnPage',
  components: {
    FlexBtn,
    TwelveBtn
  }
}
</script>

<style>
</style>
