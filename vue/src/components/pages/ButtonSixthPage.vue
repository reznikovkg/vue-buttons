<template>
  <div>
    <SixthButton @click.native="increment('button1')">
      HALLO <span>{{ getCounts.button1 }}</span>
    </SixthButton>
    <SixthButton type="red" @click.native="increment('button2')">
      HALLO <span>{{ getCounts.button2 }}</span>
    </SixthButton>
    <SixthButton type="blue" @click.native="increment('button3')">
      MARHABAN <span>{{ getCounts.button3 }}</span>
    </SixthButton>
    <SixthButton type="purple" @click.native="increment('button4')">
      NI HAO <span>{{ getCounts.button4 }}</span>
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
      'incrementCount',
    ]),
    increment(index) {
      this.incrementCount(index)
    }
  }
}
</script>
