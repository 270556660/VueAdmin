const dynamicRouters = [{
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            requiresAuth: true,
        },
        component: () =>
            import ('~/views/main.vue'),
        children: [{
                path: '/',
                meta: {
                    title: '小程序列表'
                },
                name: 'appList',
                icon: 'md-list',
                component: () =>
                    import ('~/views/appList/appList.vue')
            },
            {
                path: 'setClassification',
                meta: {
                    title: '分类设置'
                },
                name: 'setClassification',
                icon: 'md-apps',
                component: () =>
                    import ('~/views/setClassification/setClassification.vue')
            },
            {
                path: 'addApp',
                meta: {
                    title: '新增小程序'
                },
                name: 'addApp',
                icon: 'md-add',
                component: () =>
                    import ('~/views/addApp/addApp.vue')
            }
        ]
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ('~/components/errorPage/404.vue')
    }
]

export default dynamicRouters