<template>
  <button class="main-block__element"
          :style="{backgroundColor: backgroundColor, color: textColor, borderWidth: borderWidth, borderStyle: 'solid', borderColor: borderColor,  boxShadow: boxShadow }">
    <slot>
    </slot>
  </button>
</template>

<script>
  export default {
    name: 'ComponentBtn',
    props: {
      backgroundColor: {
        type: String,
        default: 'white'
      },
      textColor: {
        type: String,
        default: 'white'
      },
      borderWidth: {
        type: String,
        default: '0px'
      },
      borderColor: {
        type: String,
        default: 'black'
      },
      boxShadow: {
        type: String,
        default: '0px rgba(0, 0, 0, 0)'
      }
    }
  }
</script>

<style scoped>
  .main-block__element {
    width: 110px;
    height: 35px;
    border-radius: 4px;
    padding: 0.5% 1%;
    box-sizing: border-box;
    margin: 3% 0.75%;
    font-family: Calibri;
    font-size: 18px;
    color: white;
    cursor: pointer;
    display: block;
  }
</style>