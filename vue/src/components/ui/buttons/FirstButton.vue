<template>
  <button class="first-button" :class="getColor">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    getColor() {
      return this.color;
    }
  }
}
</script>

<style>
  .first-button {
    border: none;
    color: white;
    padding: 10px 35px;
    font-size: 18px;
    border-radius: 6px;
    position: relative;
  }

  .first-button:after{
    content:'';
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 6px;
  }

  .first-button:hover {
    box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset;
    cursor: pointer;
  }

  .first-button:active {
    box-shadow: none;
  }

  .first-button:active::after {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .first-button:disabled {
    box-shadow: none;
    cursor: default;
  }

  .first-button:disabled::after {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .green {
    background: #5cbb98;
  }

  .white {
    background: #e6ebed;
    color: #6e8a95;
    border: 1px solid #d5dce0;
  }

  .red {
    background: #e0886a;
  }
</style>
