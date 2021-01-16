import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ans:'',
    isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?'mobileView':'',
    operation:'&plus;',
  },
  mutations: {
    inp(state,x){
      state.ans+=x
    },
    clrAll(state){
      state.ans=''
    },
    clr(state){
      state.ans=state.ans.slice(0, -1); 
    },
    setOperation(state,op){
      state.operation=op; 
    }
  },
  actions: {
    inp({commit},x){
      commit('inp',x)
    },
    clrAll({commit}){
      commit('clrAll')
    },
    clr({commit}){
      commit('clr')
    },
    setOperation({commit},op){
      console.log(op)
      commit('setOperation',op)
    }
  },
  modules: {
  }
})
