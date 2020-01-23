import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from './actions/index'
import state from './state/index'
import mutations from "./mutations/index";

const getters = { //computed properties
};

const modules = {}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
});

export default store;