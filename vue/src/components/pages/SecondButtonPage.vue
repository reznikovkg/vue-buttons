<template>
  <PageLayout>
    <div>
      <SecondButton type="orange" @click="() => increment('btn1')">
        MENU ({{ getCounts.btn1 }}) ≡
      </SecondButton>
      <SecondButton type="light" @click="() => increment('btn2')">
        MENU ({{ getCounts.btn2 }}) ≡
      </SecondButton>
    </div>
    <div>
      <SecondButton @click="() => increment('btn3')">
        MENU ({{ getCounts.btn3 }}) ≡
      </SecondButton>
      <SecondButton type="purple" @click="() => increment('btn4')">
        MENU ({{ getCounts.btn4 }}) ≡
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
    ])
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
