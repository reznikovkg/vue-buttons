<template>
  <button class="sample-button" :class="buttonClass">
    <slot>
      WARNING
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
    },
    mode: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    buttonClass () {
      return `sample-button--${this.type}--${this.mode}`;
    }
  }
}
</script>

<style scoped lang="less">
.sample-button {
  width: 110px;
  height: 35px;
  border-radius: 4px;
  background-color: white;
  font-family: Calibri;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border: none;

  &--warning {

    &--primary {
      background-color: #ea3d2f;
    }
    
    &--smooth {
      background-color: lighten(#ea3d2f, 40%);
      color: #ea3d2f;
    }

    &--ghost {
      color: #ea3d2f;
      border: 1px solid #ea3d2f;
    }

    &--raised {
      color: #ea3d2f;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }
  }

  &--attention {

    &--primary {
      background-color: #f3aa18;
    }
    
    &--smooth {
      background-color: lighten(#f3aa18, 40%);
      color: #f3aa18;
    }

    &--ghost {
      color: #f3aa18;
      border: 1px solid #f3aa18;
    }

    &--raised {
      color: #f3aa18;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }
  }

  &--positive {

    &--primary {
      background-color: #37be5b;
    }
    
    &--smooth {
      background-color: lighten(#37be5b, 40%);
      color: #37be5b;
    }

    &--ghost {
      color: #37be5b;
      border: 1px solid #37be5b;
    }

    &--raised {
      color: #37be5b;
      box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
