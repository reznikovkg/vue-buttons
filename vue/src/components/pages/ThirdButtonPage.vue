<template>
  <PageLayout>
    <section class="p-16">
      <div class="button-grid">
        <div class="button-grid__column">
          <ThirdButton mode="primary" @click="() => incrementCount(0)">
            WARNING ({{ getButtonValues[0] }})
          </ThirdButton>
          <ThirdButton  
            mode="primary" 
            color="#37be5b"
            @click="() => incrementCount(1)"
          >
            POSITIVE ({{ getButtonValues[1] }})
          </ThirdButton>
          <ThirdButton 
            mode="primary" 
            color="#f3aa18"
            @click="() => incrementCount(2)"
          >
            ATTENTION ({{ getButtonValues[2] }})
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton 
            mode="smooth" 
            color="#fde4e1"
            @click="() => incrementCount(3)"
          >
            SMOOTH ({{ getButtonValues[3] }})
          </ThirdButton>
          <ThirdButton 
            mode="smooth" 
            color="#dcf7e3" 
            smoothColor="#37be5b"
            @click="() => incrementCount(4)"
          >
            SMOOTH ({{ getButtonValues[4] }})
          </ThirdButton>
          <ThirdButton  
            mode="smooth" 
            color="#fdf3d7" 
            smoothColor="#f3aa18"
            @click="() => incrementCount(5)"
          >
            SMOOTH ({{ getButtonValues[5] }})
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton mode="ghost" @click="() => incrementCount(6)">
            GHOST ({{ getButtonValues[6] }})
          </ThirdButton>
          <ThirdButton 
            mode="ghost"
            color="#37be5b"
            @click="() => incrementCount(7)"
          >
            GHOST ({{ getButtonValues[7] }})
          </ThirdButton>
          <ThirdButton 
            mode="ghost" 
            color="#f3aa18"
            @click="() => incrementCount(8)"
          >
            GHOST ({{ getButtonValues[8] }})
          </ThirdButton>
        </div>
        <div class="button-grid__column">
          <ThirdButton mode="raised" @click="() => incrementCount(9)">
            RAISED ({{ getButtonValues[9] }})
          </ThirdButton>
          <ThirdButton 
            mode="raised" 
            color="#37be5b"
            @click="() => incrementCount(10)"
          >
            RAISED ({{ getButtonValues[10] }})
          </ThirdButton>
          <ThirdButton 
            mode="raised" 
            color="#f3aa18"
            @click="() => incrementCount(11)"
          >
            RAISED ({{ getButtonValues[11] }})
          </ThirdButton>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import ThirdButton from "@/components/ui/buttons/ThirdButton.vue"
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ThirdButtonPage',
  components: {
    PageLayout,
    ThirdButton
  },
  computed: {
    ...mapGetters('thirdButton', [
      'getButtonValues'
    ])
  },
  methods: {
    ...mapActions('thirdButton', [
      'incrementButtonValue'
    ]),
    incrementCount (index) {
      this.incrementButtonValue(index)
    }
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
