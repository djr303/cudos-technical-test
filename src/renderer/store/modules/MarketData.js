import axios from 'axios'

export const GET_MARKET_DATA = 'GET_MARKET_DATA'
export const SUCCSSS_GET_MARKET_DATA = 'SUCCESS_GET_MARKET_DATA'
export const ERROR_GET_MARKET_DATA = 'ERROR_GET_MARKET_DATA'

const state = {
  marketData: [],
  marketDataError: null
}

const mutations = {
  [SUCCSSS_GET_MARKET_DATA] (state, data) {
    state.marketData = data
  },
  [ERROR_GET_MARKET_DATA] (state, data) {
    state.marketDataError = data
  }
}

const actions = {
  [GET_MARKET_DATA] ({ commit }) {
    axios.get('https://api.nomics.com/v1/markets?key=f8ab7618c9f5579b4b754d2411b69eb7')
      .then((response) => {
        commit(SUCCSSS_GET_MARKET_DATA, response.data)
      })
      .catch((error) => {
        console.error(error)
        commit(SUCCSSS_GET_MARKET_DATA, error)
      })
  }
}

export default {
  state,
  mutations,
  actions
}
