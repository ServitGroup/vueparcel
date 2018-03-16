import routes from "./routes.js";
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
    template: `
    <div id="app">
        <p>
            <h1>Hello App!</h1>
            <router-link to = "/home" > Go to Home </router-link><br/>
            <router-link to = "/contact" > Go to Contact </router-link><br/>
            <router-link to = "/bar" > Go to Bar </router-link><br/>
            <router-link to = "/foo" > Go to Foo </router-link><br/>
            <router-link to = "/about" > Go to About </router-link><br/>
        </p>
        <router-view></router-view> 
    </div>`,
    created() {
        console.log("vue create", this);
    }
});