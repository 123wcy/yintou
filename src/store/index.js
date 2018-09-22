import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      enterType: '',
      enterTypeScore: '',
      enterTypeTitle: '',      
    },
    mutations: {
      changeType (state,newType) {
        state.enterType = newType
      },
      changeTypeScore (state,newType) {
        state.enterTypeScore = newType
      },
      changeTypeTitle (state,newType) {
        state.enterTypeTitle = newType
      },
    }
  })
export default {
    store
}