<template>
  <div class="btnBorder" :style="{width:width,height:height}">
      <!-- {{width}} -->
      <div class="btnPlate" :style="{padding:padding}">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        height:{
            type:String,
            default:'fit-content',
        },
        width:{
            type:String,
            default:'fit-content',
        },
        padding:{
            type:String,
            default:'15px',
        }
        }
}
</script>

<style>
.btnBorder{
    border: 4px solid black;
    border-radius: 17px;
    padding: 4px;
    /* max-width: 300px;
    min-width: 200px; */

    background: linear-gradient(to bottom,rgba(255, 255, 255, 0.4),rgba(88, 225, 159, 0.22),rgba(20, 133, 79, 0.5),rgba(0, 0, 0, 0.21));
    transition: transform 0.1s ease-in;
    }

.btnPlate{
    background: #dfdddd;
    border-radius:14px ;
    
    text-transform:uppercase;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

 .btnBorder:hover {
    /* background: #dddddd; */
    transform: scale(1.03);
}
 .btnBorder:active {
    /* background: #dddddd; */
    transform: scale(0.95);
}

</style>