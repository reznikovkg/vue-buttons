<template>
  <button class="button" :style="buttonStyles" >
    <slot >
    </slot>
  </button>
</template>

<script>
export default {
  name: 'SeventhButton',
  props: {
    color1: {
      type: String,
      default: 'default'
    },
    color2: {
      type: String,
      default: 'default'
    },
    color3: {
      type: String,
      default: 'default'
    },
    color4: {
      type: String,
      default: 'default'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },

  computed: {
    buttonStyles () {
      return {
        '--color1': this.color1,
        '--color2': this.color2,
        '--color3': this.color3,
        '--color4': this.color4,
        '--textColor': this.textColor
      }
    }
  }

}
</script>

<style lang="less">
.button {
  margin:20px 35px;
  cursor: pointer;
  padding:10px;
  border: none;
  font-size: bold;
  background: linear-gradient(45deg,var(--color1) 0%,var(--color2) 50%,var(--color3) 50%,var(--color4) 100%);
  color: var(--textColor);

  &:hover {
    transform: scale(0.95);
    background: linear-gradient(45deg,var(--color4) 0%,var(--color3) 50%,var(--color2) 50%,var(--color1) 100%);
  }
}
</style>
