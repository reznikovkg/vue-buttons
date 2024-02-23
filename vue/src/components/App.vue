<template>
	<div class="wrapper">
		<twelveBtn :purple ="true"/>
		<twelveBtn :green="true"/>
		<twelveBtn :orange="true"/>
		<twelveBtn :blue="true"/>
		<twelveBtn :brown="true"/>
		<twelveBtn :lime="true"/>
  </div>

</template>

<script>
import twelveBtn from "@/components/ui/buttons/twelveBtn";

export default {
  components: {
		twelveBtn
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');

.wrapper{
	width: 40%;
	padding: 40px;
	margin: 0 auto;
	display: flex;
	grid-gap: 20px;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>
