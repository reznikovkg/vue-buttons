<template>
  <button class="button">
    <slot>
      BUTTON
    </slot>
  </button>
</template>

<script>
export default {
  name: 'FourthButton'
}
</script>

<style>

.button {
  display: inline-block;
  position: relative;
  width: 240px;
  height: 60px;

  border-radius: 27px;

  box-shadow: 0 2px 15px purple;
  background: linear-gradient(to right, blue, red);

  color: #fff;
  font: 700 14px/60px "Droid Sans", sans-serif;
  letter-spacing: 0.15em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: 0;
  outline: none;
}

.button::before {
  content: '›';
  position: absolute;
  right: 16px;
  font-size: 50px;
  margin-top: -4px;
  width: 24px;
  height: 24px;
  border-left-color: transparent;
  border-right-color: transparent;
}

.button::after {
  position: absolute;
  z-index: 1;
  content: '';
  box-shadow: 0px 0px 1px 1px white;
  border: 2px solid white;
  border-radius: 27px;
  width: 230px;
  height: 50px;
  top: 3px;
  left: 3px;
  right: 2px;
  bottom: 2px;
}

.button:active {
  box-shadow: none;
}

.button:hover {
  transform: scale(0.95);
}

</style>