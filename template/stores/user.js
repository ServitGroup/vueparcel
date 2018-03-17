import api from "../api/api.js";
import router from "../routes/router.js";
export default {
    namespaced: true,
    state: {
        username: "Mr. Tan Angular"
    },
    mutations: {
        login(state, playload) {
            console.log(state, playload);
            state.username = playload.name;
        }
    },
    actions: {
        login(ctx, payload) {
            // ctx = commit/getters/rootGetters/rootState/state
            console.log("this=", this, "ctx=", ctx, "playload-", payload);
            api
                .login(payload)
                .then(rs => {
                    console.log("logined->", rs);
                    if (rs.data.length > 0) {
                        router.push("/");
                        ctx.commit("login", rs.data[0]);
                    }
                })
                .catch(console.log);
        }
    },
    getters: {}
};