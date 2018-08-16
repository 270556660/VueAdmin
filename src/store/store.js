import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app'; //框架样式
import user from './modules/user';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        app,
        user
    }
});

export default store;