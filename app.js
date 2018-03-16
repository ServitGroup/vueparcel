const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const routes = [
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar }
];

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
            </p>
            <router-view></router-view> 
    </div>`,
    created() {
        console.log("vue create", this);
    }
});