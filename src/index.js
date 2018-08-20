import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from './axios/index';
import store from './store/store';
import router from './router/index';
import app from './app.vue';
import "./styles/app.css";

Vue.use(iView);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.http = axios;

new Vue({
    axios,
    router,
    store,
    render: h => h(app)
}).$mount('#app');