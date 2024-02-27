<template>
  <button class="sample-button" :class="buttonClass">
    <slot>
    </slot>
  </button>
</template>

<script>
  export default {
    name: 'ComponentBtn',
    props: {
      type: {
        type: String,
        default: 'default'
      }
    },
    computed: {
      buttonClass () {
        return `sample-button--${this.type}`;
      }
    }    
  }
</script>

<style scoped lang="less">
  .sample-button {
    width: 110px;
    height: 35px;
    border-radius: 4px;
    font-family: Calibri;
    font-size: 18px;
    color: white;
    cursor: pointer;
    border: none;

    &--warning{
      background-color: #ea3d2f;
    }

    &--positive {
      background-color: #30a74f;
    }

    &--attention {
      background-color: #f3aa18;
    }     

    &--smooth_red {
      background-color: #fde4e1;
      color: #ea3d2f;
    }

    &--smooth_green {
      background-color: #dcf7e3;
      color: #30a74f;
    }

    &--smooth_orange {
      background-color: #fdf3d7;
      color: #f3aa18;
    }

    &--ghost_red {
      color: #ea3d2f;
      border-width: 1px;
      border-style: solid;
      border-color: #ea3d2f;
    }

    &--ghost_green {
      color: #30a74f;
      border-width: 1px;
      border-style: solid;
      border-color: #30a74f;
    }

    &--ghost_orange {
      color: #f3aa18;
      border-width: 1px;
      border-style: solid;
      border-color: #f3aa18;
    }

    &--raised_red {
      color: #ea3d2f;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }

    &--raised_green {
      color: #30a74f;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }

    &--raised_orange {
      color: #f3aa18;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }
  } 
</style>
