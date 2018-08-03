import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import Input from 'iview/src/components/input';
import axios from './http/index';
import store from './store/store';
import router from './router/index';
import App from './App.vue';

Vue.use(iView);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

new Vue({
    axios,
    router,
    store,
    render: h => h(App)
}).$mount('#app');