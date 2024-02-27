<template>
  <PageLayout>
    <section class="p-16">
      <div>
        <div class="button-grid">
          <div class="button-grid__column">
            <ComponentBtn type="warning">WARNING</ComponentBtn>
            <ComponentBtn type="positive">POSITIVE</ComponentBtn>
            <ComponentBtn type="attention">ATTENTION</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn type="smooth_red">SMOOTH</ComponentBtn>
            <ComponentBtn type="smooth_green">SMOOTH</ComponentBtn>
            <ComponentBtn type="smooth_orange">SMOOTH</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn type="ghost_red">GHOST</ComponentBtn>
            <ComponentBtn type="ghost_green">GHOST</ComponentBtn>
            <ComponentBtn type="ghost_orange">GHOST</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn type="raised_red">RAISED</ComponentBtn>
            <ComponentBtn type="raised_green">RAISED</ComponentBtn>
            <ComponentBtn type="raised_orange">RAISED</ComponentBtn>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
  import PageLayout from '../parts/PageLayout';
  import ComponentBtn from "@/components/ui/buttons/ComponentBtn.vue";
  export default {
    name: 'ThirdButtonPage',
    components: {
      PageLayout,
      ComponentBtn
    }
  }
</script>

<style lang="less">
  .button-grid {
    display: flex;

    &__column {
      flex: 1;
      max-width: 150px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
</style>
