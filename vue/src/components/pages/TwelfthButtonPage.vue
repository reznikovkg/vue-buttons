<template>
  <div class="wrapper">
    <TwelfthButton @click.native="() => count(0)" type="purple"> 
      button <span>({{ getNumber(0) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="() => count(1)" type="green">
      button <span>({{ getNumber(1) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="() => count(2)" type="orange">
      button <span>({{ getNumber(2) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="() => count(3)" type="blue">
      button <span>({{ getNumber(3) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="() => count(4)" type="brown">
      button <span>({{ getNumber(4) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="() => count(5)" type="lime">
      button <span>({{ getNumber(5) }})</span>
    </TwelfthButton>
  </div>
</template>

<script>
import TwelfthButton from "@/components/ui/buttons/TwelfthButton";
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'TwelfthButtonPage',
  components: {
    TwelfthButton
  },
  computed: {
    ...mapGetters('twelfthButton', [
      'getNumber'
    ])
  },
  methods: {
    ...mapActions('twelfthButton', [
      'setNumber'
    ]),
    count (index) {
      this.setNumber(index)
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  max-width: 40%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
