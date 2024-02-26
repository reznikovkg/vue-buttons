<template>
    <button class="sample-button" :style="buttonStyle">
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
      border: {
        type: String,
        default: 'none'
      },
      shadow: {
        type: String,
        default: 'none'
      }
    },
    computed: {
      buttonStyle() {
        return {
          '--btn-background-color': this.backgroundColor,
          '--btn-text-color': this.textColor,
          '--btn-border': this.border,
          '--btn-shadow': this.shadow,
        }
      }
    }    
  }
</script>

<style scoped lang="less">
  .sample-button {
    width: 110px;
    height: 35px;
    border-radius: 4px;
    background: var(--btn-background-color);
    color: var(--btn-text-color);
    border: var(--btn-border);
    box-shadow: var(--btn-);
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