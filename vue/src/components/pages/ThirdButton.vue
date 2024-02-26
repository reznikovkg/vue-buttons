<template>
  <PageLayout>
    <section class="p-16">
      <div>
        <div class="button-grid">
          <div class="button-grid__column">
            <ComponentBtn :style="{'background-color':'#ea3d2f'}">WARNING</ComponentBtn>
            <ComponentBtn  :style="{'background-color':'#30a74f'}">POSITIVE</ComponentBtn>
            <ComponentBtn  :style="{'background-color':'#f3aa18'}">ATTENTION</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn :style="{'background-color':'#fde4e1', color:'#ea3d2f'}">SMOOTH</ComponentBtn>
            <ComponentBtn :style="{'background-color':'#dcf7e3', color:' #30a74f'}">SMOOTH</ComponentBtn>
            <ComponentBtn :style="{'background-color':'#fdf3d7', color:' #f3aa18'}">SMOOTH</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn :style="{border:'1px solid #ea3d2f', color:'#ea3d2f'}">GHOST</ComponentBtn>
            <ComponentBtn :style="{border:'1px solid #30a74f', color:'#30a74f'}">GHOST</ComponentBtn>
            <ComponentBtn :style="{border:'1px solid #f3aa18', color:'#f3aa18'}">GHOST</ComponentBtn>
          </div>
          <div class="button-grid__column">
            <ComponentBtn :style="{color:'#ea3d2f', 'box-shadow':' 0px 3px 5px -3px rgba(0, 0, 0, 0.3)'}">RAISED</ComponentBtn>
            <ComponentBtn :style="{color:'#30a74f', 'box-shadow':' 0px 3px 5px -3px rgba(0, 0, 0, 0.3)'}">RAISED</ComponentBtn>
            <ComponentBtn :style="{color:'#f3aa18', 'box-shadow':' 0px 3px 5px -3px rgba(0, 0, 0, 0.3)'}">RAISED</ComponentBtn>
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
