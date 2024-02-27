<template>
    <button class="tenth-btn" :class="tenthBtnClass">
      <slot />
  </button>
</template>

<script>
export default {
  name: 'TenthButton',
  props: {
    color: String,
    rounded: Boolean,
    bordered: Boolean
  },
  computed: {
    tenthBtnClass () {
      return [
        `tenth-btn--${this.color}`,
        this.rounded ? `tenth-btn--rounded` : ``,
        this.bordered ? `` : `tenth-btn--bordered`
      ];
    }
  }
}
</script>

<style scoped lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

.tenth-btn {
  font-size: 14px;
  font-weight: bold;
  padding: 5px 20px;
  box-shadow: 0px 2px 2px #000000;
  margin: 10px;
  cursor: pointer;

  &--rounded {
    border-radius: 20px;
  }

  &--bordered {
    border-color: transparent !important;
  }
  
  &--red {
    border: 4px solid #983235;
    background-color: #ea4545;
    color: white;
  }

  &--green {
    border: 4px solid #2c9a30;
    background-color: #47d44c;
    color: #156f11;
  }

  &--blue {
    border: 4px solid #1b3780;
    background-color: #3560da;
    color: white;
  }
}
</style>
