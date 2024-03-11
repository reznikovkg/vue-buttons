<template>
  <PageLayout>
    <FourthButton @click.native="() => increment('b1')" bg-start="khaki" bg-end="darkorange" box-shadow-color="orange">
      Subscribe (<span>{{ getButtonCounts.b1 }}</span>)
    </FourthButton>

    <FourthButton @click.native="() => increment('b2')" bg-start="orange" bg-end="deeppink" box-shadow-color="hotpink">
      Click here (<span>{{ getButtonCounts.b2 }}</span>)
    </FourthButton>

    <FourthButton @click.native="() => increment('b3')" bg-start="deeppink" bg-end="red" box-shadow-color="mediumvioletred">
      Download (<span>{{ getButtonCounts.b3 }}</span>)
    </FourthButton>

    <!--default-->
    <FourthButton @click.native="() => increment('b4')">
      Play now (<span>{{ getButtonCounts.b4 }}</span>)
    </FourthButton>

    <FourthButton @click.native="() => increment('b5')" bg-start="deeppink" bg-end="mediumpurple" box-shadow-color="purple">
      Explore (<span>{{ getButtonCounts.b5 }}</span>)
    </FourthButton>

    <FourthButton @click.native="() => increment('b6')" bg-start="mediumpurple" bg-end="rebeccapurple" box-shadow-color="purple">
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
