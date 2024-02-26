  <template>
  <PageLayout>
    <div>
        <SecondButton --stC="purple" --enC="white">
        </SecondButton>
        <SecondButton stC="black" enC="white">
        </SecondButton>
        <SecondButton stC="black" enC="white">
        </SecondButton>
        <SecondButton stC="black" enC="white">
        </SecondButton>
    </div>
  </PageLayout>
  </template>
  
  <script>
  import PageLayout from '../parts/PageLayout';
  import SecondButton from "@/components/ui/buttons/SecondButton.vue";
  
  export default {
    name: 'SecondButtonPage',
    components: {
      PageLayout,
      SecondButton
    }
  }
  </script>
  
  <style>
  </style>
  