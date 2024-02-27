<template>
  <PageLayout>
    <SeventhButton color1=#c9c9c9 color2=#e3e3e3 color3=#fdfdfd color4=#ffffff textColor="black">
      DEFAULT
    </SeventhButton>

    <SeventhButton color1=#f1bb46 color2=#eeac18 color3=#f1bb46 color4=#f5cc75>
      PRIMARY
    </SeventhButton>
    
    <SeventhButton color1=#0b747a color2=#0fa2a9 color3=#13ced8 color4=#31e4ed>
      INFO
    </SeventhButton>
    
    <SeventhButton color1=#788811 color2=#a0b516 color3=#c8e31c color4=#d3e949>
      SUCCESS
    </SeventhButton>
    
    <SeventhButton color1=#cb4b06 color2=#f85e0c color3=#f9803e  color4=#fba070>
      WARNING
    </SeventhButton>
    
    <SeventhButton color1=#b5122d color2=#e31637 color3=#ec415d color4=#f16f85>
      DANGER
    </SeventhButton>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import SeventhButton from '../ui/buttons/SeventhButton.vue';

export default {
  name: 'SeventhButtons',
  components: {
    PageLayout,
    SeventhButton
  }
}
</script>

<style>
</style>