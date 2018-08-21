import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import util from '~/utils/index';
import store from '~/store/store';
import constantRouterMap from '~/router/routes';
Vue.use(VueRouter)



let router = new VueRouter({
    // mode: 'history',   //在创建router对象中，如果不配置mode，就会使用默认的hash模式，该模式下路径格式化为#!开关。
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    console.log(to)
    util.title(to.meta.title);
    // 判断该路由是否需要登录权限
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 通过vuex state获取当前的token是否存在
        if (store.state.user.token) {
            next()
        } else {
            next({
                name: 'login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        if (store.state.user.token && to.name == 'login') {
            // 判断是否已经登录且前往的是登录页
            next({
                name: 'index'
            });
        } else {
            next() // 确保一定要调用 next()
        }
    }
})

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

//页面刷新时，通过判断localStorage中token是否存在从而重新dispatch登录操作，否则刷新页面后，vuex状态消失，会重新返回到登录页面
let token = util.getItem('token');
if (token) {
    store.dispatch('setToken', token);
}

export default router