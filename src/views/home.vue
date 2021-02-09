<template>
  <div id="home">
    
    <div id="homeBtns"
    :class="{bdr:!isMobile}"
    > 
      
      <btn width='200px' @click.native="ola('classic')">classic</btn>
      <btn width='200px' @click.native="ola('timeattack')">time attack</btn>
      <btn width='200px'>exit</btn>
      
    </div>
      
  </div>
</template>

<script>
import btn from "../components/button"
import {mapState} from 'vuex'
export default {
  components: {
    btn
  },
  computed:{
    ...mapState(['isMobile'])
  },
  methods:{
    ola(p){
      // alert('ola')
      this.$router.push(p)
    }
  }
}
</script>

<style>

:root{
  --bckgrnd:linear-gradient(180deg, #5DE7B5 0%, #72EBBF 32.29%, #37DA9F 85.21%, #32CF96 100%);
}


#home{
  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bckgrnd);
}
#homeBtns{
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.bdr{
  flex: 0 1 400px;
  border-radius: 15px;
  margin: 50px;
  border: 4px solid black;
}
.buttons{
  border: 1px solid black;
  border-radius: 17px;
  padding: 10px;

}
</style>