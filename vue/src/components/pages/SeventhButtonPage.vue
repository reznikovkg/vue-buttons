<template>
  <div>

    <SeventhButton type="default" @click.native="increment('button1')">
      DEFAULT <span>({{ getCounts.button1 }})</span>
    </SeventhButton>

    <SeventhButton type="primary" @click.native="increment('button2')">
      PRIMARY <span>({{ getCounts.button2 }})</span>
    </SeventhButton>

    <SeventhButton type="info" @click.native="increment('button3')">
      INFO <span>({{ getCounts.button3 }})</span>
    </SeventhButton>

    <SeventhButton type="success" @click.native="increment('button4')">
      SUCCESS <span>({{ getCounts.button4 }})</span>
    </SeventhButton>

    <SeventhButton type="warning" @click.native="increment('button5')">
      WARNING <span>({{ getCounts.button5 }})</span>
    </SeventhButton>

    <SeventhButton type="danger" @click.native="increment('button6')">
      DANGER <span>({{ getCounts.button6 }})</span>
    </SeventhButton>

  </div>
</template>

<script>
import SeventhButton from "@/components/ui/buttons/SeventhButton";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    SeventhButton
  },
   computed: {
    ...mapGetters('seventhButton', [
      'getCounts',
    ]),
  },
  methods: {
    ...mapActions('seventhButton', [
      'incrementCount',
    ]),
    increment(index) {
      this.incrementCount(index)
    }
  }
}
</script>
