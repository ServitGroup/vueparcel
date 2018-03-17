import App from "./pages/app.js";
import routes from "./routes/routes.js";

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
    template: `<App/>`,
    created() {
        console.log("vue create", this);
    },
    components: {
        App
    }
});