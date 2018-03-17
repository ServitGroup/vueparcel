export default {
    template: `<h1 style="cursor:pointer" @click="home">404</h1>`,
    name: "NotFoundView",
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
    methods: {
        home() {
            this.$router.push("/");
        }
    },
    computed: {}
};