<template>
  <PageLayout>
    <section class="p-16">
      <div class="button-grid">
        <div class="button-grid__column">
          <ComponentBtn type="warning" mode="primary"/>
          <ComponentBtn type="positive" mode="primary">
            POSITIVE
          </ComponentBtn>
          <ComponentBtn type="attention" mode="primary">
            ATTENTION
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="warning" mode="smooth">
            SMOOTH
          </ComponentBtn>
          <ComponentBtn type="positive" mode="smooth">
            SMOOTH
          </ComponentBtn>
          <ComponentBtn type="attention" mode="smooth">
            SMOOTH
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="warning" mode="ghost">
            GHOST
          </ComponentBtn>
          <ComponentBtn type="positive" mode="ghost">
            GHOST
          </ComponentBtn>
          <ComponentBtn type="attention" mode="ghost">
            GHOST
          </ComponentBtn>
        </div>
        <div class="button-grid__column">
          <ComponentBtn type="warning" mode="raised">
            RAISED
          </ComponentBtn>
          <ComponentBtn type="positive" mode="raised">
            RAISED
          </ComponentBtn>
          <ComponentBtn type="attention" mode="raised">
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
