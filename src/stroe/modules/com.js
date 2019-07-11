import * as types from '../types' 

const state = {
  DisplayList: false,
  total: false,
  whenSearch: false
}

const mutations = {
  [types.COM_SHOW_SEARCH_LIST] (state,status) {
    state.DisplayList = status
  },
  [types.SHOW_TOTAL_LIST] (state,status) {
    state.total = status
  }
}

const actions = {
  setShowSearchList ({ commit },status) {
    commit(types.COM_SHOW_SEARCH_LIST,status)
  },
  setShowTotalList ({ commit },status) {
    commit(types.SHOW_TOTAL_LIST,status)
  }
}

const getters = {
  DisplayList: state => state.DisplayList,
  total: state => state.total,
  whenSearch: state =>state.whenSearch
}

export default {
  state,
  mutations,
  actions,
  getters
}