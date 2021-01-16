<template>
  <div 
  class="keypad"
  >
      
      <div class="row">
          <div class="col" @click="inp(1)">1</div>
          <div class="col" @click="inp(2)">2</div>
          <div class="col" @click="inp(3)">3</div>
      </div>
      <div class="row">
          <div class="col" @click="inp(4)">4</div>
          <div class="col" @click="inp(5)">5</div>
          <div class="col" @click="inp(6)">6</div>
      </div>
      <div class="row">
          <div class="col" @click="inp(7)">7</div>
          <div class="col" @click="inp(8)">8</div>
          <div class="col" @click="inp(9)">9</div>
      </div>
      <div class="row">
          <div class="col" @click="inp(0)">0</div>
          <!-- <div class="col" @click="clrAll">clr all</div> -->
          <div class="col center" @click="clr">
              <span class='clr'></span>
          </div>
          
      </div>
      
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

    methods: {
        ...mapActions(['inp','clrAll','clr'])
    }
}

</script>

<style>
    .keypad{
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .row{
        display: flex;
    }
    .col{
        flex:1 1 100%;
        border: 2px solid rgb(184, 183, 183);
        padding: 20px;
        font-size:2em ;
    }
    .col:active{
        background: rgb(219, 218, 218);
    }
    .clr{
        background: url("../assets/clrIcon.png");
        height: 50px;
        width: 50px;
        display: block;   
    }
    .center{
        display: flex;
        justify-content: center;
    }
</style>