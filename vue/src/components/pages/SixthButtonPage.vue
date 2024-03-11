<template>
  <div>
    <SixthButton @click.native="() => incr('btn1')">
      HALLO <span>({{ getCounts.btn1 }})</span>
    </SixthButton>
    <SixthButton type="red" @click.native="() => incr('btn2')">
      HALLO <span>({{ getCounts.btn2 }})</span>
    </SixthButton>
    <SixthButton type="blue" @click.native="() => incr('btn3')">
      MARHABAN <span>({{ getCounts.btn3 }})</span>
    </SixthButton>
    <SixthButton type="purple" @click.native="() => incr('btn4')">
      NI HAO <span>({{ getCounts.btn4 }})</span>
    </SixthButton>
  </div>
</template>

<script>
import SixthButton from "@/components/ui/buttons/SixthButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
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
