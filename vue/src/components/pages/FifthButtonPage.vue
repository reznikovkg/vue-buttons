<template>
  <div>
    <FifthButton
      type="blue"
      btnName="btn5_1"
      @click="increase('btn5_1')"
    >
      ({{ getCount.btn5_1 }})
    </FifthButton>
    <FifthButton
        type="green"
        btnName="btn5_2"
        @click="increase('btn5_2')">
      ({{ getCount.btn5_2 }})
    </FifthButton>
    <FifthButton
        type="red"
        btnName="btn5_3"
        @click="increase('btn5_3')">
      ({{ getCount.btn5_3 }})
    </FifthButton>
    <FifthButton
        type="orange"
        btnName="btn5_4"
        @click="increase('btn5_4')">
      ({{ getCount.btn5_4 }})
    </FifthButton>
    <FifthButton
        type="black"
        btnName="btn5_5"
        @click="increase('btn5_5')">
      ({{ getCount.btn5_5 }})
    </FifthButton>
  </div>
</template>

<script>
import FifthButton from "@/components/ui/buttons/FifthButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'FifthButtonPage',
  components: {
    FifthButton
  },
  computed: {
    ...mapGetters('fifthButton', [
      'getCount'
    ])
  },
  methods: {
    ...mapActions('fifthButton', [
      'upCount'
    ]),
    increase (btnName) {
      this.upCount(btnName)
    }
  }
}
</script>
