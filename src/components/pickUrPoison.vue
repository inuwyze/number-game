<template>
  <div id="page">
      <div class="head">
          <div>{{emote}}</div>
          <div>{{score}}</div>
      </div>
      <div id="container">
        <div class="poison">
            <btn @click.native="sel('&plus;')"
            padding="35px">
                <svg style="position:absolute" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1414 0V28M0 13.8586H28" stroke="black" stroke-width="10"/>
                </svg>
            </btn>
        </div>
        <div class="poison">
            <btn padding="35px" @click.native="sel('&minus;')">
                <svg style="position:absolute"
                width="28" height="28" viewBox="0 0 44 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.189941 5.01038H43.1177" stroke="black" stroke-width="16"/>
                </svg>
            </btn>
        </div>
      </div>
      <div id="container">
        <div class="poison">
            <btn padding="35px" @click.native="sel('&times;')">
            <svg style="position:absolute"
            width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17749 8.99396L27.0061 26.8225M8.82424 26.9957L26.9957 8.82426" stroke="black" stroke-width="8"/>
            </svg>
            </btn>
        </div>
        <div class="poison">
            <btn padding="35px" @click.native="sel('&divide;')">
           <svg style="position:absolute" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.74 29.463L29.2137 10.4646" stroke="black" stroke-width="7"/>
<path d="M14.0912 10.9386L13.8769 10.7303C12.8808 9.76169 11.288 9.78399 10.3194 10.7801C9.35078 11.7763 9.37308 13.369 10.3692 14.3377L10.5835 14.546C11.5796 15.5146 13.1724 15.4923 14.141 14.4962C15.1096 13.5 15.0873 11.9073 14.0912 10.9386Z" fill="black" stroke="black" stroke-width="4"/>
<path d="M29.3774 25.8028L29.1632 25.5945C28.1671 24.6258 26.5743 24.6481 25.6057 25.6443C24.637 26.6404 24.6593 28.2332 25.6555 29.2018L25.8697 29.4101C26.8659 30.3787 28.4586 30.3564 29.4272 29.3603C30.3959 28.3642 30.3736 26.7714 29.3774 25.8028Z" fill="black" stroke="black" stroke-width="4"/>
</svg>





            </btn>
        </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
props: ['score'],
created () {
    this.emote=this.emotes[Math.floor(Math.random()*this.emotes.length)];
},
data () {
    return {
        emotes:['🤜(˵ ͡~◞  ͡°˵)🤜','ᘳ๏ ͟ʖ๏ᘰ','└[☉ᗝ☉]┘','ლ(⌐■ ͜ʖ■ლ)','ᕦ⭖👅⭖ᕥ',"¯\\_(⪩ ͜ʖ⪨)_/¯",'👉( ﾟ. ﾟ)👉','(づ￢ ل͜￢ )づ','ᕦ(❍ヘ❍)ᕥ'],
        emote:'',
    }
},
methods: {
    ...mapActions(['setOperation']),
    sel(x){
        // alert('yo')
        this.setOperation(x);
        this.$emit('startTimeAttack');
    }
}
}
</script>

<style>
    .head{
        color: black;
        position: fixed;
        top: 5%;
        font-size: 40px;
        font-weight: 900;
        /* font-family:'montserrat'; */
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
    }
    #container{
        
        display: flex;
        justify-content: space-around;
        width: 40vw;
        /* padding: 20px; */
       
    }
    #page{
        background: var(--bckgrnd);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .poison{
        padding: 15px;

    }
</style>