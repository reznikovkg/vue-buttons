<template>
  <PageLayout>
    <FourthButton
      bg-start="khaki"
      bg-end="darkorange"
      box-shadow-color="orange"
      @click="() => increment('b1')"
    >
      Subscribe (<span>{{ getButtonCounts.b1 }}</span>)
    </FourthButton>

    <FourthButton
      bg-start="orange"
      bg-end="deeppink"
      box-shadow-color="hotpink"
      @click="() => increment('b2')"
    >
      Click here (<span>{{ getButtonCounts.b2 }}</span>)
    </FourthButton>

    <FourthButton
      bg-start="deeppink"
      bg-end="red"
      box-shadow-color="mediumvioletred"
      @click="() => increment('b3')"
    >
      Download (<span>{{ getButtonCounts.b3 }}</span>)
    </FourthButton>

    <!--default-->
    <FourthButton @click="() => increment('b4')">
      Play now (<span>{{ getButtonCounts.b4 }}</span>)
    </FourthButton>

    <FourthButton
      bg-start="deeppink"
      bg-end="mediumpurple"
      box-shadow-color="purple"
      @click="() => increment('b5')"
    >
      Explore (<span>{{ getButtonCounts.b5 }}</span>)
    </FourthButton>

    <FourthButton
      bg-start="mediumpurple"
      bg-end="rebeccapurple"
      box-shadow-color="purple"
      @click="() => increment('b6')"
    >
      Read more (<span>{{ getButtonCounts.b6 }}</span>)
    </FourthButton>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import FourthButton from "@/components/ui/buttons/FourthButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'FourthButtonPage',
  components: {
    PageLayout,
    FourthButton
  },
  computed: {
    ...mapGetters('fourthButton', [
      'getButtonCounts'
    ])
  },
  methods: {
    ...mapActions('fourthButton', [
      'incrementButtonCount'
    ]),
    increment(index){
      this.incrementButtonCount(index)
    }
  }
}
</script>
