<template>
  <page-layout>
    <div>
      <SixthButton @click="() => incr('btn1')">
        HALLO <span>({{ getCounts.btn1 }})</span>
      </SixthButton>
      <SixthButton type="red" @click="() => incr('btn2')">
        HALLO <span>({{ getCounts.btn2 }})</span>
      </SixthButton>
      <SixthButton type="blue" @click="() => incr('btn3')">
        MARHABAN <span>({{ getCounts.btn3 }})</span>
      </SixthButton>
      <SixthButton type="purple" @click="() => incr('btn4')">
        NI HAO <span>({{ getCounts.btn4 }})</span>
      </SixthButton>
    </div>
  </page-layout>
</template>

<script>
import SixthButton from "@/components/ui/buttons/SixthButton.vue";
import {mapActions, mapGetters} from "vuex";
import PageLayout from "@/components/parts/PageLayout.vue";

export default {
  name: 'SixthButtonPage',
  components: {
    PageLayout,
    SixthButton
  },
  computed: {
    ...mapGetters('sixthButton', [
      'getCounts',
    ]),
  },
  methods: {
    ...mapActions('sixthButton', [
      'incrCount',
    ]),
    incr(index) {
      this.incrCount(index)
    }
  }
}
</script>
