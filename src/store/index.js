import { createStore } from 'vuex'
import { fetchUserInfo, fetchIssues } from '@/services'
import _get from 'lodash/get'

export default createStore({
  state () {
    return {
      userInfo: null,
      issues: null,
    }
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    },
    setIssues (state, payload) {
      state.issues = payload
    }
  },
  actions: {
    getUserInfo ({commit}) {
      fetchUserInfo().then((res) => {
        const payload = _get(res, 'data', {}) || {}
        commit('setUserInfo', payload)
      })
    },
    getIssues ({commit}) {
      fetchIssues().then((res) => {
        const payload = _get(res, 'data', []) || []
        commit('setIssues', payload)
      })
    }
  }
})