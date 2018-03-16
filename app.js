import routes from "./routes.js";
const router = new VueRouter({
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
    template: `
    <div id="app">
        <h1>Hello App!</h1>
        <p>
            <router-link to = "/foo" > Go to Foo </router-link> 
            <router-link to = "/bar" > Go to Bar </router-link> 
            <router-link to = "/home" > Go to Home </router-link> 
            </p>
            <router-view></router-view> 
    </div>`,
    created() {
        console.log("vue create", this);
    }
});