<template>
  <div class="wrapper">
    <TwelfthButton @click.native="increment(0)" type="purple">
      button <span>({{ getButtonCount(0) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="increment(1)" type="green">
      button <span>({{ getButtonCount(1) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="increment(2)" type="orange">
      button <span>({{ getButtonCount(2) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="increment(3)" type="blue">
      button <span>({{ getButtonCount(3) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="increment(4)" type="brown">
      button <span>({{ getButtonCount(4) }})</span>
    </TwelfthButton>
    <TwelfthButton @click.native="increment(5)" type="lime">
      button <span>({{ getButtonCount(5) }})</span>
    </TwelfthButton>
  </div>
</template>

<script>
import TwelfthButton from "@/components/ui/buttons/TwelfthButton";
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'TwelfthButtonPage',
  components: {
    TwelfthButton
  },
  computed: {
    ...mapGetters('twelfthButton', [
      'getButtonCount'
    ])
  },
  methods: {
    ...mapActions('twelfthButton', [
      'incrementButton'
    ]),
    increment (index) {
      this.incrementButton(index);
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
