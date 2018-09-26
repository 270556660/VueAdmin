//框架公共store
const app = {
    state: {
        menuList: []
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