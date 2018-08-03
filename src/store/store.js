import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app'; //框架样式
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        token:''
    },
    mutations: {},
    actions: {},
    modules: {
        app
    }
});

export default store;