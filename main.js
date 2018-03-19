import App from "./pages/app.js";
import store from "./stores/index.js";
import eventBus from "./utils/eventBus.js";
import router from "./routes/router.js";
import vueprint from "./components/vueprint.js";

const unsync = Vue._sync(store, router); // done. Returns an unsync callback fn

router.beforeEach((to, from, next) => {
    console.log("beforeEach");
    // can use store at this
    if (to.path == "/noroute") {
        next(false);
    } else {
        store.commit("show");
        console.log("overlay ------------>block", store.state.overlay);
        next();
    }
});

router.afterEach(route => {
    console.log("afterEach", route);
    store.commit("hide");
});

router.onError(err => {
    console.log("Handling this error", err);
});

Vue.prototype.$bus = eventBus;

Vue.component("v-select", Vue._vSelect);
vueprint(Vue);

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