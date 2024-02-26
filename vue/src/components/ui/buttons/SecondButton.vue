<template>
    <button class="btn" :style="btnStyle">
    </button>
</template>

<script>
export default {
    name: 'SecondButton',
    props: {
        startColor: {
            Type: String,
            default: 'blue'
        },
        endColor: {
            Type: String,
            default: 'red'
        }
    },
    computed: {
        btnStyle () {
            return {
                '--stC': this.startColor,
                '--enC': this.endColor
            };
        }
    }
}
</script>

<style> 
.btn {
    border-radius: 50px;
    position: relative;
    height: 50px;
    width: 150px;
    margin: 10px;
    font-size: large;
    cursor: pointer;
    background: linear-gradient(white, white) padding-box, linear-gradient(90deg,  var(--stC), var(--enC)) border-box;
    border: 4px solid transparent;

    &::before {
        content: "MENU ≡";
        display: flex;
        justify-content: center;
        align-items: center;
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(90deg, var(--stC), var(--enC));
    }
}
</style>