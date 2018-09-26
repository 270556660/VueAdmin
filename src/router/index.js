import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import util from '~/utils/index';
import store from '~/store/store';
import dynamicRouters from '~/router/routes';

Vue.use(VueRouter)

let router = new VueRouter({
    // mode: 'history',   //在创建router对象中，如果不配置mode，就会使用默认的hash模式，该模式下路径格式化为#!开关。
    routes: [{
        path: '/login',
        name: 'login',
        meta: {
            title: '登陆'
        },
        component: () =>
            import ('~/views/login.vue')
    }]
})




//页面刷新时，通过判断localStorage中token是否存在从而重新dispatch登录操作，否则刷新页面后，vuex状态消失，会重新返回到登录页面
let token = util.getItem('token');
let menu = util.getItem('menu');
if (token) {
    store.dispatch('setToken', token);
    util.filterNemu(dynamicRouters, JSON.parse(menu));
    store.dispatch('setMenuList', dynamicRouters);
}else{}

// router.addRoutes(store.state.app.menuList);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    util.title(to.meta.title);

    // 通过vuex state获取当前的token是否存在
    if (store.state.user.token) {
        next({
            name: 'login',
            query: {
                redirect: to.fullPath
            }
        })
    } else if (store.state.user.token && to.name == 'login') {
        // 判断是否已经登录且前往的是登录页
        next({
            name: 'appList'
        });
    } else {
        next()
    }
})

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});



export default router