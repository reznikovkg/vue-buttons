  <template>
  <PageLayout>
    <div>
      <SecondButton style="--stC:#FFA500; --enC:#DC143C"/>
      <SecondButton style="--stC:#00BFFF; --enC:#9400D3"/>
    </div>
    <div>
      <SecondButton/>
      <SecondButton style="--stC:#C71585; --enC:#9400D3"/>
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
