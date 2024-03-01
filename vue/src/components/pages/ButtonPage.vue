<template>
  <div class="wrapper">
    <CustomBtn type="successful">SUCCESSFUL</CustomBtn>
    <CustomBtn type="info">INFO</CustomBtn>
    <CustomBtn type="warning">WARNING</CustomBtn>
    <CustomBtn type="danger">DANGER</CustomBtn>
  </div>
</template>

<script>
import CustomBtn from "@/components/ui/buttons/CustomBtn";

export default {
  name: 'CustomBtn',
  components: {
    CustomBtn
  }
}
</script>

<style scoped lang="less">
</style>
