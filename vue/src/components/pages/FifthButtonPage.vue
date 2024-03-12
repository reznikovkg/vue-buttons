<template>
  <div>
    <FifthButton type="blue" btnName="btn5_1"/>
    <FifthButton type="green" btnName="btn5_2"/>
    <FifthButton type="red" btnName="btn5_3"/>
    <FifthButton type="orange" btnName="btn5_4"/>
    <FifthButton type="black" btnName="btn5_5"/>
  </div>
</template>

<script>
import FifthButton from "@/components/ui/buttons/FifthButton.vue";

export default {
  name: 'FifthButtonPage',
  components: {
    FifthButton
  }
}
</script>
