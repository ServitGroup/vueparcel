import routes from "./routes/routes.js";
import Mainapp from "./layout/main.js";

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
});

window.vm = new Vue({
    el: "#app",
    store,
    router,
    template: `<Mainapp/>`,
    created() {
        console.log("vue create", this);
    },
    components: {
        Mainapp
    }
});