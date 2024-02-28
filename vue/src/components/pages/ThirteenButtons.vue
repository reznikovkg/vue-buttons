<template>
  <div class="wrapper">
    <ThirteenthButton />
    <ThirteenthButton type="blue"/>
    <ThirteenthButton type="green"/>
    <ThirteenthButton type="red"/>
  </div>
</template>

<script>
import ThirteenthButton from "@/components/ui/buttons/ThirteenthButton";

export default {
  name: 'ThirteenthButtonPage',
  components: {
    ThirteenthButton
  }
}
</script>

<style scoped lang="less">
.wrapper {
  max-width: 60%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
