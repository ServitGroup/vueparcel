import App from "./pages/app.js";
import routes from "./routes/routes.js";
import store from "./stores/index.js";
import eventBus from "./utils/eventBus.js";
const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

const unsync = Vue._sync(store, router); // done. Returns an unsync callback fn

Vue.prototype.$bus = eventBus;

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