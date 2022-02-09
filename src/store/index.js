// Vue와 Vuex 모듈 불러오기
import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Vue에 Vuex 등록하기
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
