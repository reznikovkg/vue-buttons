<template>
  <div class="wrapper">
    <div class="wrapper__coloumn">
      <FourteenthButton  color="orange" type="ok" @click="() => increment(0)">
        ok <span>({{ getButtonCount(0) }})</span>
      </FourteenthButton>
      <FourteenthButton  color="orange" type="canсel" @click="() => increment(1)">
        cancel <span>({{ getButtonCount(1) }})</span>
      </FourteenthButton>
    </div>
    <div class="wrapper__coloumn">
      <FourteenthButton  color="blue" type="ok" @click="() => increment(2)">
        ok <span>({{ getButtonCount(2) }})</span>
      </FourteenthButton>
      <FourteenthButton  color="blue" type="canсel" @click="() => increment(3)">
        cancel <span>({{ getButtonCount(3) }})</span>
      </FourteenthButton>
    </div>
  </div>
</template>

<script>
import FourteenthButton from "@/components/ui/buttons/FourteenthButton.vue";
import {mapGetters, mapActions} from "vuex";
  
export default {
  name: 'FourteenthButtonPage',
  components: {
    FourteenthButton
  },
  computed: {
    ...mapGetters('fourteenthButton', [
      'getButtonCount'
    ])
  },
  methods: {
    ...mapActions('fourteenthButton', [
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
  padding: 30px;
  display: flex;
  grid-gap: 40px;

  &__coloumn {
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
  }
}
</style>
