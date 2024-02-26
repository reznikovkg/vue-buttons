<template>
  <FlexBtn>
    <TwelveBtn type="purple"/>
    <TwelveBtn type="green"/>
    <TwelveBtn type="orange"/>
    <TwelveBtn type="blue"/>
    <TwelveBtn type="brown"/>
    <TwelveBtn type="lime"/>
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
