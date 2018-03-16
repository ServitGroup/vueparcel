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
    template: `<h1>Test</h1>`,
    created() {
        console.log("vue create", this);
    }
});