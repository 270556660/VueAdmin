import axios from 'axios';
import store from '~/store/store';
import router from '~/router/index';
import util from '~/utils/index';
import {
    Message
} from 'iview';

var instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' //'multipart/form-data';//表单上传file
    }
});

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        var token = store.state.user.token;
        if (config.url.indexOf("login") > -1) {
            //如果登陆的话清除token
            config.headers.Authorization = "";
        } else if (token) {
            //如果存在token的话，则每个http header都加上token
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    })

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        //对响应数据做些事  
        if (response.data && response.data.ret != 1) {
            //如果为-2返回到登录页面
            if (response.status) {
                Message.error(response.data.msg);
                switch (response.status) {
                    // 通过状态码判断token是否失效或者token是否错误，若是，直接返回登录页面
                    case 401:
                        util.removeItem('token');
                        router.push({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        })
                        break;
                }
            } else {
                Message.warning(response.data.msg);
            }
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    })

export default instance