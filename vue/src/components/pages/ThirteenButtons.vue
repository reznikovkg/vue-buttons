<template>
  <div class="wrapper">
    <ThirteenthButton :count="getBlackButtonCount" @click="incrementBlackButtonCount" />
    <ThirteenthButton color="blue" :count="getBlueButtonCount" @click="incrementBlueButtonCount" />
    <ThirteenthButton color="green" :count="getGreenButtonCount" @click="incrementGreenButtonCount" />
    <ThirteenthButton color="red" :count="getRedButtonCount" @click="incrementRedButtonCount" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ThirteenthButton from '../ui/buttons/ThirteenthButton.vue';

export default {
  name: 'ThirteenButtons',
  components: {
    ThirteenthButton,
  },
  computed: {
    ...mapGetters('ThirteenthButtonStore',[
      'getBlackButtonCount',
      'getBlueButtonCount',
      'getGreenButtonCount',
      'getRedButtonCount'
    ])
  },
  methods: {
    ...mapActions('ThirteenthButtonStore', [
      'incrementBlackButtonCount',
      'incrementBlueButtonCount',
      'incrementGreenButtonCount',
      'incrementRedButtonCount'
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
