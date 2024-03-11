<template>
  <div class="wrapper">
    <ThirteenthButton :count="blackButtonCount" @click="incrementBlackButtonCount" />
    <ThirteenthButton color="blue" :count="blueButtonCount" @click="incrementBlueButtonCount" />
    <ThirteenthButton color="green" :count="greenButtonCount" @click="incrementGreenButtonCount" />
    <ThirteenthButton color="red" :count="redButtonCount" @click="incrementRedButtonCount" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ThirteenthButton from '../ui/buttons/ThirteenthButton.vue';

export default {
  name: 'ThirteenButtons',
  components:{
    ThirteenthButton
  },
  computed: {
    ...mapState('ThirteenthButtonStore', {
      blackButtonCount: state => state.blackButtonCount,
      blueButtonCount: state => state.blueButtonCount,
      greenButtonCount: state => state.greenButtonCount,
      redButtonCount: state => state.redButtonCount
    })
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
