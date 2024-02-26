<template>
    <button class="btn" :style="btnStyle">
       MENU  ≡
    </button>
</template>

<script>
export default {
    name: 'SecondButton',
    props: {
        bgStart: {
            Type: String,
            default: 'black'
        },
        bgEnd: {
            Type: String,
            default: 'red'
        }
    },
    computed: {
        btnStyle () {
            return {
                '--bg-start': this.bgStart,
                '--bg-end': this.bgEnd
            };
        }
    }
}
</script>

<style scoped lang="less"> 
.btn {
    border: none;
    position: relative;
    height: 50px;
    width: 150px;
    margin: 10px;
    border-radius: 50px;
    font-size: large;
    cursor: pointer;

    /*background:linear-gradient(90deg,blue,red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/

    &::before{
        content: "";
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
        border-radius: 50px;
        z-index: -1;
        background:linear-gradient(90deg, var(--bg-start), var(--bg-end));
    }
}
</style>