import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Repository from '@/views/repository'
import store from '@/store/store'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'index',
        component:Index
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/repository',
        name:'repository',
        component:Repository,
        meta:{
            requiresAuth:true
        }
    }
]

let router=new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // 通过vuex state获取当前的token是否存在
        if (store.state.token) {
            next()
        } 
        else {
            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
    } 
    else {
        next() // 确保一定要调用 next()
    }
})

//页面刷新时，通过判断localStorage中token是否存在从而重新dispatch登录操作，否则刷新页面后，vuex状态消失，会重新返回到登录页面
if(window.localStorage.getItem('token')){
    store.dispatch('Login',window.localStorage.getItem('token'))
}

export default router