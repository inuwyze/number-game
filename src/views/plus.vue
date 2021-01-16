<template>
  <div class="plus" 
  :class="isMobile">
    <div 
    ref="equation"
    class="question"
    :class="{chk:chk}">

    {{x}} <span v-html='operation' ></span> {{y}}
    </div >
    <div :class="chk" class="ans"> {{ans|zero}}</div>
  <operations/>
  </div>
</template>

<script>
// @ is an alias to /src

import operations from '../components/operations'
import {mapState,mapActions} from 'vuex'
export default {
components: {
  operations
},

computed: {
  ...mapState(['ans','isMobile','operation'])
},
data () {
  return {
    x:Math.floor(Math.random()*100),  
    y:Math.floor(Math.random()*100),
         
    chk:'',

  }
},
watch: {
  ans(){
    this.check()
  },
  operation(v){
    this.generateXY(v)
    
  }
},
methods: {
  ...mapActions(['clrAll']),
  generateXY(v){
    while(v=='&minus;' && this.x<this.y){
      this.x=Math.floor(Math.random()*20);  
        
      this.y=Math.floor(Math.random()*20);
      // console.log(this.x)
      // console.log(this.y)
    }
    while(v=='&times;' && this.x>20 && this.x>20){
      this.x=Math.floor(Math.random()*20);  
        
      this.y=Math.floor(Math.random()*20);
      // console.log(this.x)
      // console.log(this.y)
    }
    while(v=='&divide;' && !Number.isInteger(this.x/this.y)){
      this.x=Math.floor(Math.random()*200);  
      this.y=Math.floor(Math.random()*20)+1;
        // console.log(this.x/this.y)
    }
  },
  check(){
    console.log(this.x+this.y)
    console.log(this.ans)
    let condition={
      '&plus;':this.x+this.y,
      '&minus;':this.x-this.y,
      '&times;':this.x*this.y,
      '&divide;':this.x/this.y,

    }
    
    if(condition[this.operation ]==this.ans)
      {
        this.chk='correct'
        let that=this
        setTimeout(function(){ 
          that.clrAll()
          that.resetXY()}, 200)
        
      }
    else
      this.chk='wrong'

  },
  resetXY(){
    this.x=Math.floor(Math.random()*100)
    this.y=Math.floor(Math.random()*100)
    this.generateXY(this.operation)
  }
},
filters: {
  zero(v){
    return v?v:0
  }
}


}
</script>
<style scoped>
.plus{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  /* align-items: center; */
  align-content: center;
  
}

.question{
  font-size: 8vh;
  
  /* margin-top:50px ; */
}
.correct{
  color: green;
}
.ans{
  font-size: 30vh;
  font-weight: 700;
}
.plus{
  content:"\002B" ;
}
</style>
