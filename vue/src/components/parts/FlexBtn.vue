<template>
  <div>
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexBtn',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  max-width: 40%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 0 auto;
  padding: 40px 0;
}
</style>
