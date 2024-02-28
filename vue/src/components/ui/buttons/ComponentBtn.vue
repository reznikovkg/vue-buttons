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
  background-color: white;
  font-family: Calibri;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border: none;

  &--warning {
    background-color: #ea3d2f;
  }

  &--positive {
    background-color: #37be5b;
  }

  &--attention {
    background-color: #f3aa18;
  }

  &--smooth-red {
    background-color: lighten(#ea3d2f, 40%);
    color: #ea3d2f;
  }

  &--smooth-green {
    background-color: lighten(#37be5b, 40%);
    color: #37be5b;
  }

  &--smooth-orange {
    background-color: lighten(#f3aa18, 40%);
    color: #f3aa18;
  }

  &--ghost-red {
    color: #ea3d2f;
    border: 1px solid #ea3d2f;
  }

  &--ghost-green {
    color: #37be5b;
    border: 1px solid #37be5b;
  }

  &--ghost-orange {
    color: #f3aa18;
    border: 1px solid #f3aa18;
  }

  &--raised-red {
    color: #ea3d2f;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
  }

  &--raised-green {
    color: #37be5b;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
  }

  &--raised-orange {
    color: #f3aa18;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
  }
}
</style>
