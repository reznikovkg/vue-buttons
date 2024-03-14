<template>
  <PageLayout>
    <div>
      <SecondButton type="orange" @click="() => increment('btn1')">
        MENU ≡ <span>({{ getCounts.btn1 }})</span>
      </SecondButton>
      <SecondButton type="light" @click="() => increment('btn2')">
        MENU ≡ <span>({{ getCounts.btn2 }})</span>
      </SecondButton>
    </div>
    <div>
      <SecondButton @click="() => increment('btn3')">
        MENU ≡ <span>({{ getCounts.btn3 }})</span>
      </SecondButton>
      <SecondButton type="purple" @click="() => increment('btn4')">
        MENU ≡ <span>({{ getCounts.btn4 }})</span>
      </SecondButton>
    </div>
  </PageLayout>
</template>
  
<script>
import PageLayout from '../parts/PageLayout';
import {mapActions, mapGetters} from "vuex";
import SecondButton from "@/components/ui/buttons/SecondButton.vue";

export default {
  name: 'SecondButtonPage',
  components: {
    PageLayout,
    SecondButton
  },
  computed: {
    ...mapGetters('secondButton', [
      'getCounts',
    ]),
  },
  methods: {
    ...mapActions('secondButton', [
      'incrementCount',
    ]),
    increment(index) {
      this.incrementCount(index)
    }
  }
}
</script>

<style>
</style>
