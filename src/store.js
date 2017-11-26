import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({
  state: {
    navbarTitle: 'title Vuex',
  },

  getters: {
    titleCount: (state) => {
      return state.navbarTitle.length
    }
  },
  mutations: {
    changeTitle(state, payload) {
      state.navbarTitle = payload
    }
  }
})

export default store
