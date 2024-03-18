<template>
  <div class="wrapper">
    <ThirteenthButton color="black" :count="getButtonCount(0)" @click="() => incrementButton(0)" />
    <ThirteenthButton color="blue" :count="getButtonCount(1)" @click="() => incrementButton(1)" />
    <ThirteenthButton color="green" :count="getButtonCount(2)" @click="() => incrementButton(2)" />
    <ThirteenthButton color="red" :count="getButtonCount(3)" @click="() => incrementButton(3)" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ThirteenthButton from '@/components/ui/buttons/ThirteenthButton';

export default {
  components: {
    ThirteenthButton
  },
  computed: {
    ...mapGetters('ThirteenthButtonStore', [
      'getButtonCount'
    ])
  },
  methods: {
    ...mapActions('ThirteenthButtonStore', [
      'incrementButton'
    ])
  }
};
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
