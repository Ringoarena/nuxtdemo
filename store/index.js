export const state = () => ({
  authUser: null,
  interestRate: 10,
})

export const mutations = {
  SET_USER(state, user) {
    state.authUser = user
  },
  SET_INTEREST_RATE(state, newRate) {
    state.interestRate = newRate
  }
}

export const actions = {
  nuxtServerInit (vuexContext, { req }) {
    const { commit } = vuexContext
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login (vuexContext, credentials) {
    const { commit } = vuexContext
    try {
      const { data } = await this.$axios.post('/api/login', credentials)
      commit('SET_USER', data)
    } catch (error) {
      throw new Error(error.message)
    }
  },
  async logout (vuexContext) {
    const { commit } = vuexContext
    await this.$axios.post('/api/logout')
    commit('SET_USER', null)
  },
  newInterestRate(vuexContext, payload) {
    const { commit } = vuexContext
    const parsed =  parseInt(payload)
    if(isNaN(parsed)) {
      console.warn('Invalid input')
    } else {
      commit('SET_INTEREST_RATE', parsed)
    }
  }
}