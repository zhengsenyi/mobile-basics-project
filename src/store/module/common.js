export default {
  state: {
    num: 1
  },
  mutations: {
    SET_NUM: (state, num) => {
      state.num = num
    }
  },
  actions: {
    setNum: ({ commit }, num) => {
      commit('SET_NUM', num)
    }
  }
}