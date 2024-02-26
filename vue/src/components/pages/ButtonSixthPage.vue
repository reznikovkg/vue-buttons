<template>
  <div>
    <CustomButton/>
    <CustomButton type="red">
      HALLO
    </CustomButton>
    <CustomButton type="blue">
      MARHABAN
    </CustomButton>
    <CustomButton type="purple">
      NI HAO
    </CustomButton>
  </div>
</template>

<script>
import CustomButton from "@/components/ui/buttons/CustomButtonSixth.vue";

export default {
  components: {
    CustomButton
  }
}
</script>
