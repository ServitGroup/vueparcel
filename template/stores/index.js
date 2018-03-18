import module1 from "./module1.js";
import module2 from "./module2.js";
import user from "./user.js";
const store = new Vuex.Store({
    namespaced: true,
    state: {
        count: 0,
        overlay: "block"
    },
    mutations: {
        increment(state, val) {
            console.log(state, val);
            state.count += val;
        },
        show(state) {
            state.overlay = "block";
            console.log("store-----commit--show", state.overlay);
        },
        hide(state) {
            state.overlay = "none";
            console.log("store-----commit--hide", state.overlay);
        }
    },
    actions: {},
    getters: {
        overlaystyle: state => {
            let ovr = { display: state.overlay };
            console.log("overlay--", ovr);
            return ovr;
        }
    },

    modules: {
        a: module1,
        user: user,
        module: module2
    }
});

export default store;