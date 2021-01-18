<template>
  <div>
      <div class="countdown-bar" :style="{width:width+'%'}"></div>
      
  </div>
</template>

<script>
export default {
    props: ['width']
}
</script>

<style scoped>

.countdown-bar{
    position: fixed;
    top: 0;
    left: 0;
    height:5px;

    /* width: 100%; */
    background: green;
    transition: width 0.1s linear;
}
</style>