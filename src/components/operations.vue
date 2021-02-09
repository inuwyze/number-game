<template>
  <div style="position:absolute;right:0">
        
        
        <div
        v-for="x in operations"
        class="ops"
        :class="{active:operation==x}"
        :key="x"
        @click="setOperation(x)">
            <span v-html='x' ></span>
        </div>

  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data () {
        return {
            operations:['&plus;','&minus;','&times;','&divide;']
        }
    },
    computed: {
      ...mapState(['operation'])  
    },
    methods: {
        ...mapActions(['setOperation'])
    }
}
</script>

<style>

 .ops{
     border: 1px solid rgb(218, 218, 218);
     height: 45px;
     width: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
 }
 .active{
     background: rgb(214, 213, 213);
 }
</style>