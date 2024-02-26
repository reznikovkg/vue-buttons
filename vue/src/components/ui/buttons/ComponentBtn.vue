<template>
  <button :class = "['simple-button', type]">
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
        default: "attention",
        validator: function (value) {
          return ["warning", "positive", "attention",
                  "smooth_red", "smooth_green", "smooth_orange",
                  "ghost_red", "ghost_green", "ghost_orange",
                  "raised_red", "raised_green", "raised_orange"].includes(value);
        }
      }
    }
  }
</script>

<style lang="less">
  .simple-button{
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
  .warning {
    background-color: #ea3d2f;
    border: none;
  }
  .positive {
    background-color: #30a74f;
    border: none;
  }
  .attention {
    background-color: #f3aa18;
    border: none;
  }
  .smooth_red {
    background-color: #fde4e1;
    color: #ea3d2f;
    border: none;
  }
  .smooth_green {
    background-color: #dcf7e3;
    color: #30a74f;
    border: none;
  }
  .smooth_orange {
    background-color: #fdf3d7;
    color: #f3aa18;
    border: none;
  }
  .ghost_red {
    color: #ea3d2f;
    border-width: 1px;
    border-color: #ea3d2f;
  }
  .ghost_green {
    color: #30a74f;
    border-width: 1px;
    border-color: #30a74f;
  }
  .ghost_orange {
    color: #f3aa18;
    border-width: 1px;
    border-color: #f3aa18;
  }
  .raised_red {
    color: #ea3d2f;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    border: none;
  }
  .raised_green {
    color: #30a74f;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    border: none;
  }
  .raised_orange {
    color: #f3aa18;
    box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
    border: none;
  }

</style>