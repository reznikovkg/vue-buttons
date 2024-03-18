<template>
  <div class="button-8th-page">
    <EighthButton type="default" :fill="false" @click="() => increment('btn1')">
      ({{ getCount.btn1 }})
    </EighthButton>

    <EighthButton type="primary" :fill="false" @click="() => increment('btn2')">
      ({{ getCount.btn2 }})
    </EighthButton>

    <EighthButton type="default" :fill="true" @click="() => increment('btn3')">
      ({{ getCount.btn3 }})
    </EighthButton>

    <EighthButton type="primary" :fill="true" @click="() => increment('btn4')">
      ({{ getCount.btn4 }})
    </EighthButton>
  </div>
</template>

<script>
import EighthButton from '@/components/ui/buttons/EighthButton.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Button8thPage',
  components: {
    EighthButton
  },
  computed: {
    ...mapGetters('eighthButton', [
      'getCount'
    ])
  },
  methods: {
    ...mapActions('eighthButton', [
      'incrementButtonCount'
    ]),
    increment(btnKey) {
      this.incrementButtonCount(btnKey)
    }
  }
}
</script>

<style scoped>
.button-8th-page {
  background-color: rgb(51, 51, 51);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
