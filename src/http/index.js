import axios from 'axios';
import store from '@/store/store';
import router from '@/router/index';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.github.com';

// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        if (store.state.token) {
            //如果存在token的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                // 通过状态码判断token是否失效或者token是否错误，若是，直接返回登录页面
                case 401:
                    router.push({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break;
            }
        }
        return Promise.reject(error)
    })

export default axios