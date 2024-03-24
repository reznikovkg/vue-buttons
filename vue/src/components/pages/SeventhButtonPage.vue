<template>
  <div>

    <SeventhButton type="default" @click="() => incr('btn1')">
      DEFAULT <span>({{ getCounts.btn1 }})</span>
    </SeventhButton>

    <SeventhButton type="primary" @click="() => incr('btn2')">
      PRIMARY <span>({{ getCounts.btn2 }})</span>
    </SeventhButton>

    <SeventhButton type="info" @click="() => incr('btn3')">
      INFO <span>({{ getCounts.btn3 }})</span>
    </SeventhButton>

    <SeventhButton type="success" @click="() => incr('btn4')">
      SUCCESS <span>({{ getCounts.btn4 }})</span>
    </SeventhButton>

    <SeventhButton type="warning" @click="() => incr('btn5')">
      WARNING <span>({{ getCounts.btn5 }})</span>
    </SeventhButton>

    <SeventhButton type="danger" @click="() => incr('btn6')">
      DANGER <span>({{ getCounts.btn6 }})</span>
    </SeventhButton>

  </div>
</template>

<script>
import SeventhButton from "@/components/ui/buttons/SeventhButton";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'SeventhButtonPage',
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
      'incrCount',
    ]),
    incr(index) {
      this.incrCount(index)
    }
  }
}
</script>
