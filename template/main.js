import App from "./pages/app.js";
import store from "./stores/index.js";
import eventBus from "./utils/eventBus.js";
import router from "./routes/router.js";

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