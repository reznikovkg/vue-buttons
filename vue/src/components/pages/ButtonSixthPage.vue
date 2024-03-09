<template>
  <div>
    <SixthButton/>
    <SixthButton type="red">
      HALLO <span @click="() => addCount(1)">{{$store.getters}}</span>
    </SixthButton>
    <SixthButton type="blue">
      MARHABAN
    </SixthButton>
    <SixthButton type="purple">
      NI HAO
    </SixthButton>
  </div>
</template>

<script>
import SixthButton from "@/components/ui/buttons/SixthButton.vue";
import store from "@/store";

export default {
  components: {
    SixthButton
  },
  methods: {
    addCount(param) {
      store.state.buttonValues.button1 += param
    }
  }
}
</script>
