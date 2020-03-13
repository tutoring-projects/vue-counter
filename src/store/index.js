import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: "abc@example.com",
      id: 1234,
    },

    counter: 0
  },

  mutations: {
    increment (state, payload) {
      state.counter += payload
    },

    deincrement (state, payload) {
      state.counter -= payload
    },
  },

  actions: {
    
  },
})
