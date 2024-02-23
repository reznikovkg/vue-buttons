<script>
  export default {
    name: "CustomBtn",
    data () {
      return {
        status: 1
      }
    },
    methods: {
      change () {
        this.status *= -1
        let status = this.status;

        if (status === -1)
          this.$el.id = this.$el.id.concat("-clicked")
        else
          this.$el.id = this.$el.id.replace("-clicked", "")
      }
    }
  }
</script>

<template>
  <div id="buttons">
    <button id="successful-button" @click="change">
      SUCCESS
    </button>
    <button id="info-button" @click="change">
      INFO
    </button>
    <button id="warning-button" @click="change">
      WARNING
    </button>
    <button id="danger-button" @click="change">
      DANGER
    </button>
  </div>
</template>

<style scoped lang="less">
  button {
    font-family: "Montserrat Alternates", sans-serif;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
  }

  #successful-button:hover {
    background-color: white;
    color: #04AA6D;
    border: 2px solid #04AA6D;
  }

  #successful-button {
    background-color: #04AA6D;
    color: white;
    border: 2px solid #04AA6D;
  }

  #successful-button-clicked {
    background-color: #04AA6D;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
  }

  #info-button {
    background-color: #f0c502;
    color: white;
    border: 2px solid #f0c502;
  }

  #info-button:hover {
    background-color: white;
    color: #f0c502;
    border: 2px solid #f0c502;
  }

  #info-button-clicked {
    background-color: #f0c502;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
  }

  #warning-button {
    background-color: #e17b01;
    color: white;
    border: 2px solid #e17b01;
  }

  #warning-button:hover {
    background-color: white;
    color: #e17b01;
    border: 2px solid #e17b01;
  }

  #warning-button-clicked {
    background-color: #e17b01;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
  }

  #danger-button {
    background-color: #b8154c;
    color: white;
    border: 2px solid #b8154c;
  }

  #danger-button:hover {
    background-color: white;
    color: #b8154c;
    border: 2px solid #b8154c;
  }

  #warning-button-clicked {
    background-color: #b8154c;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
  }
</style>




















