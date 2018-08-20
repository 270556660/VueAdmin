//框架公共store
const app = {
    state: {
        menuList: [{
                path: '/',
                title: '小程序列表',
                name: 'appList',
                icon: 'md-list',
                component: () =>
                    import ('~/views/appList/appList.vue')
            },
            {
                path: 'setClassification',
                title: '分类设置',
                name: 'setClassification',
                icon: 'md-apps',
                component: () =>
                    import ('~/views/setClassification/setClassification.vue')
            },
            {
                path: 'addApp',
                title: '新增小程序',
                name: 'addApp',
                icon: 'md-add',
                component: () =>
                    import ('~/views/addApp/addApp.vue')
            }
        ]
    },
    mutations: {
        setMenuList(state, data) {
            state.menuList = data;
        },
    },
    actions: {
        setMenuList({
            commit
        }, data) {
            commit('setMenuList', data);
        },
    }
};

export default app;