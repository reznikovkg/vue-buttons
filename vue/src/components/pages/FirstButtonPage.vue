<template>
  <PageLayout>
    <div class="main-container">
      <div class="buttons-container">
        <FirstButton color="green" @click="() => increment('btn1')">
          Button ({{ getCount.btn1 }})
        </FirstButton>
        <FirstButton color="white" @click="() => increment('btn2')">
          Button ({{ getCount.btn2 }})
        </FirstButton>
        <FirstButton color="red" @click="() => increment('btn3')">
          Button ({{ getCount.btn3 }})
        </FirstButton>
      </div>
      <div class="buttons-container">
        <FirstButton disabled color="green" @click="() => increment('btn4')">
          Disabled ({{ getCount.btn4 }})
        </FirstButton>
        <FirstButton disabled color="white" @click="() => increment('btn5')">
          Disabled ({{ getCount.btn5 }})
        </FirstButton>
        <FirstButton disabled color="red" @click="() => increment('btn6')">
          Disabled ({{ getCount.btn6 }})
        </FirstButton>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import FirstButton from "@/components/ui/buttons/FirstButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'FirstButtonPage',
  components: {
    FirstButton,
    PageLayout
  },
  computed: {
    ...mapGetters('firstButton', [
      'getCount'
    ])
  },
  methods: {
    ...mapActions('firstButton', [
      'incrementButtonCount'
    ]),
    increment(btnKey) {
      this.incrementButtonCount(btnKey)
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  zoom: 200%;
  gap: 20px;
  margin-top: 100px;
}

.buttons-container {
  display: flex;
  gap: 10px;
}
</style>
