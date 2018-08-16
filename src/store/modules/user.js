//用户登陆信息
const app = {
    state: {
        token: ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        setToken({
            commit
        }, token) {
            commit('setToken', token);
        },
    }
};

export default app;