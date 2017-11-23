import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {
    navbarTitle: 'title Vuex',
    getters: {
      titleCount: (state) => {
        state.navbarTitle.length
      }
    }
  }
})

export default store
