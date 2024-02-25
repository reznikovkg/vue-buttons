<template>
  <PageLayout>
    <section class="p-16">
      <div>
        <div class="button-grid">
          <div class="button-grid__column">
            <ComponentBtn backgroundColor="red">WARNING</ComponentBtn>
            <ComponentBtn backgroundColor="green">POSITIVE</ComponentBtn>
            <ComponentBtn backgroundColor="orange">ATTENTION</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn backgroundColor="mistyrose" text-color="red">SMOOTH</ComponentBtn>
            <ComponentBtn backgroundColor="palegreen" text-color="green">SMOOTH</ComponentBtn>
            <ComponentBtn backgroundColor="palegoldenrod" text-color="orange">SMOOTH</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn text-color="red" borderWidth="1px" borderColor="red">GHOST</ComponentBtn>
            <ComponentBtn text-color="green" borderWidth="1px" borderColor="green">GHOST</ComponentBtn>
            <ComponentBtn text-color="orange" borderWidth="1px" borderColor="orange">GHOST</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn text-color="red" boxShadow="0px 3px 5px -3px rgba(0, 0, 0, 0.3)">RAISED</ComponentBtn>
            <ComponentBtn text-color="green" boxShadow="0px 3px 5px -3px rgba(0, 0, 0, 0.3)">RAISED</ComponentBtn>
            <ComponentBtn text-color="orange" boxShadow="0px 3px 5px -3px rgba(0, 0, 0, 0.3)">RAISED</ComponentBtn>
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
    gap: 10px;

    &__column {
      flex: 1;
      max-width: 150px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

</style>
