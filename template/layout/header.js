export default {
    template: `<div><slot>Header</slot>}<b>{{$store.state.user.username||'User'}}</b></div>`,
    name: "Header",
    mixins: [],
    data() {
        return {
            theme: "AdminLte"
        };
    },
    created() {
        window.vc = this;
        console.log("vc computer is created");
    },
    mounted() {},
    methods: {},
    computed: {}
};