<template>
  <PageLayout>
    <div>
      <EleventhButton type="successful" @click="() => increment(0)">
        SUCCESSFUL (<span>{{ getButtonCounts[0] }}}</span>)
      </EleventhButton>
      <EleventhButton type="info" @click="() => increment(1)">
        INFO (<span>{{ getButtonCounts[1] }}}</span>)
      </EleventhButton>
      <EleventhButton type="warning" @click="() => increment(2)">
        WARNING (<span>{{ getButtonCounts[2] }}}</span>)
      </EleventhButton>
      <EleventhButton type="danger" @click="() => increment(3)">
        DANGER (<span>{{ getButtonCounts[3] }}}</span>)
      </EleventhButton>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import EleventhButton from "@/components/ui/buttons/EleventhButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    PageLayout,
    EleventhButton
  },
  computed: {
    ...mapGetters('EleventhButton', [
      'getButtonCounts'
    ])
  },
  methods: {
    ...mapActions('EleventhButton', [
      'incrementButtonCount'
    ]),
    increment(index) {
      this.incrementButtonCount(index)
    }
  }
}
</script>

<style>
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
}
</style>
