<template>
  <PageLayout>
    <section class="p-16">
      <div class="button-grid">
        <div class="button-grid__column">
          <ThirdButton :index="0" mode="primary"/>
          <ThirdButton 
            :index="1" 
            mode="primary" 
            color="#37be5b"
          >
            POSITIVE
          </ThirdButton>
          <ThirdButton 
            :index="2" 
            mode="primary" 
            color="#f3aa18"
          >
            ATTENTION
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton 
            :index="3" 
            mode="smooth" 
            color="#fde4e1"
          >
            SMOOTH
          </ThirdButton>
          <ThirdButton 
            :index="4" 
            mode="smooth" 
            color="#dcf7e3" 
            smoothColor="#37be5b"
          >
            SMOOTH
          </ThirdButton>
          <ThirdButton 
            :index="5" 
            mode="smooth" 
            color="#fdf3d7" 
            smoothColor="#f3aa18"
          >
            SMOOTH
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton :index="6" mode="ghost">
            GHOST
          </ThirdButton>
          <ThirdButton 
            :index="7" 
            mode="ghost"
            color="#37be5b"
          >
            GHOST
          </ThirdButton>
          <ThirdButton 
            :index="8" 
            mode="ghost" 
            color="#f3aa18"
          >
            GHOST
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton 
            :index="9" 
            mode="raised"
          >
            RAISED
          </ThirdButton>
          <ThirdButton 
            :index="10" 
            mode="raised" 
            color="#37be5b"
          >
            RAISED
          </ThirdButton>
          <ThirdButton 
            :index="11" 
            mode="raised" 
            color="#f3aa18"
          >
            RAISED
          </ThirdButton>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import ThirdButton from "@/components/ui/buttons/ThirdButton.vue";

export default {
  name: 'ThirdButtonPage',
  components: {
    PageLayout,
    ThirdButton
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
