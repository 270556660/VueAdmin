import main from '~/views/main.vue';
const routes = [{
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            requiresAuth: true,
        },
        component: main,
        children: [{
                path: '/',
                title: '小程序列表',
                name: 'md-list',
                component: () =>
                    import ('~/views/appList/appList.vue')
            },
            {
                path: 'setClassification',
                title: '分类设置',
                name: 'md-apps',
                component: () =>
                    import ('~/views/setClassification/setClassification.vue')
            },
            {
                path: 'addApp',
                title: '新增小程序',
                name: 'md-add',
                component: () =>
                    import ('~/views/addApp/addApp.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登陆',
        },
        component: () =>
            import ('~/views/login.vue')
    }
]

export default routes