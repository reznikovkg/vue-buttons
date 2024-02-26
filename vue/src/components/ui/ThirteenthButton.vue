<template>
    <button  class="ThirteenthButton" :class ="settingButton"  >Button</button>
</template>
  
  <script>
  export default {
    name: 'ThirteenthButton',
    props: ['settingButton'],
     
      
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style  scoped>
    .ThirteenthButton{
      width:150px;
      height:80px;
      transition: .3s all;
      background-color: #F7F7FA;
      color: #5C5D68;
      border-radius:5px;
      font-size:24px;
      box-shadow: -1px 21px 57px -12px   rgba(0,0,0,0.75);
      font-weight: 700;
      margin: 52px;
      border: 1px solid #F7F7FA;
       
    
  
  
      &:hover{
        
        cursor:pointer;
      }
  
      &:active{
        transform:  scale(0.90);
        font-weight: 600;
      }
    }
    .black{
        color: #5C5D68;
        background-color: #F7F7FA;
        border: 1px solid #F7F7FA;
        box-shadow:  -2px 11px 22px -2px   rgba(0,0,0,0.75);
    }
    .blue{
        color: #2164D1;
        background-color: #F7F7FA;
        border:1px solid #F7F7FA;
        box-shadow:  -2px 11px 22px -2px #2164D1 ;
    }
    .green{
        color: #38833A;
        background-color: #F5FAF5;
        border: 1px solid #F5FAF5;
        box-shadow:  -2px 11px 22px -2px  #38833A;
    }
     .red{
        color: #C7372D;
        background-color: #F7EBEA;
        border: 1px solid #F7EBEA;
        box-shadow:  -2px 11px 22px -2px  #C7372D;
    }
    
  </style>
  