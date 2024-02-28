<template>
  <PageLayout>
    <section class="p-16">
      <div class="button-grid">
        <div class="button-grid__column">
          <ComponentBtn type="warning"/>
          <ComponentBtn type="positive">
            POSITIVE
          </ComponentBtn>
          <ComponentBtn type="attention">
            ATTENTION
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="smooth-red">
            SMOOTH
          </ComponentBtn>
          <ComponentBtn type="smooth-green">
            SMOOTH
          </ComponentBtn>
          <ComponentBtn type="smooth-orange">
            SMOOTH
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="ghost-red">
            GHOST
          </ComponentBtn>
          <ComponentBtn type="ghost-green">
            GHOST
          </ComponentBtn>
          <ComponentBtn type="ghost-orange">
            GHOST
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="raised-red">
            RAISED
          </ComponentBtn>
          <ComponentBtn type="raised-green">
            RAISED
          </ComponentBtn>
          <ComponentBtn type="raised-orange">
            RAISED
          </ComponentBtn>
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
