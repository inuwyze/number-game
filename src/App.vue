<template>
  <div id="app" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <!-- <div id="nav">
      <router-link to="/">plus</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    
  </div>
</template>
<script>
// import keypad from './components/keypad'

import {mapActions,mapState} from 'vuex'
export default{
  computed: {
    ...mapState(['isMobile'])
  },
  components: {
    // keypad
  },
  
  methods: {
    ...mapActions(['inp','clr']),
    _keyListenery(e){
      if(e.keyCode ==8)
        {this.clr()
        return}
      // console.log(e.keyCode)
      if(e.keyCode>=48 && e.keyCode<=57)
        this.inp(e.key)
    },
    
  },
    mounted() {
    window.addEventListener("keydown", this._keyListenery);
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

  height:100%;
}
body{
    height: 100vh; /* Nice to not have to think about the HTML element parent */
    margin: 0;
}
.mobileView{
  height: 50vh;
}
/* #nav {
  
} */
/* 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
