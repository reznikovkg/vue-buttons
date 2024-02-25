<template>
  <button :class="buttonClass" >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SeventhButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    buttonClass() {
      return 'button-' + this.type;
    }
  }
}
</script>

<style>

.button-default{
  background:linear-gradient(45deg, #c9c9c9 0%, #e3e3e3 50%, #fdfdfd 50%, #ffffff 100%);
  color: black;
}

.button-primary {
  background:linear-gradient(45deg, #f1bb46 0%, #eeac18 50%, #f1bb46 50%, #f5cc75 100%);
  color: white;
}

.button-info {
  background: linear-gradient(45deg, #0b747a 0%, #0fa2a9 50%, #13ced8 50%, #31e4ed 100%);
  color: white;
}

.button-success {
  background: linear-gradient(45deg, #788811 0%, #a0b516 50%, #c8e31c 50%, #d3e949 100%);
  color: white;
}

.button-warning {
  background: linear-gradient(45deg, #cb4b06 0%, #f85e0c 50%, #f9803e 50%, #fba070 100%);
  color: white;
}

.button-danger {
  background: linear-gradient(45deg, #b5122d 0%, #e31637 50%, #ec415d 50%, #f16f85 100%);
  color: white;
}

button {
  margin:20px 35px;
  cursor: pointer;
  padding:10px;
  border: none;
  font-size: bold;
}

</style>
