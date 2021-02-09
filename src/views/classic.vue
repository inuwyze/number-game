<template>
  <div class="plus" 
  :class="isMobile">
  
    
      <countdownBar v-show='timeAttackMode' :width='countDown'/>
    
      <div class="score">
        {{score}}  
      </div>
    <div 
    ref="equation"
    class="question"
    :class="{chk:chk}">
    
    {{x}} <span v-html='operation' ></span> {{y}}
    </div >
  <operations @startTimeAttack='startTimeAttack' v-if="!timeAttackMode"/>
    <div :class="chk" class="ans"> {{ans|zero}}</div>
  <keypad v-if="isMobile" />
  </div>
</template>

<script>
// @ is an alias to /src

import operations from '../components/operations'
import countdownBar from '../components/countdownBar'
import {mapState,mapActions} from 'vuex'
export default {
  created () {
    
  },
components: {
  countdownBar,
  operations
},

computed: {
  ...mapState(['ans','isMobile','operation'])
},
data () {
  return {
    countDown:100,
    score:'',
    timeAttackMode:false,
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
  startTimeAttack(){
    this.score=0;
    this.countDown=100;
    this.timeAttackMode=true
    this.countDownTimer()
  },
  countDownTimer() {
    if(this.countDown > 0) {
        setTimeout(() => {
            this.countDown -= 1
            this.score++
            this.countDownTimer()
        }, 100)
    }
    else{
      this.timeAttackMode=false
    }
    
    console.log('end')
  },
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
        this.score+=20 
        this.chk='correct'
        this.countDown+=30
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
 .score{
   height:4vh;
   font-size: 4vh;
   font-weight: 600;
   color: green;
 }
.plus{
  display: flex;
  padding-top: 5px;
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
