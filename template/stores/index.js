import module1 from "./module1.js";
import module2 from "./module2.js";
import user from "./user.js";
const store = new Vuex.Store({
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state, val) {
            console.log(state, val);
            state.count += val;
        }
    },
    actions: {},
    getters: {},
    modules: {
        a: module1,
        user: user,
        module: module2
    }
});

export default store;