export default {
    template: `<div><h1>Login</h1><button @click="login">Login</button></div>`,
    name: "Login",
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
        login() {
            this.$router.push("/");
        }
    },
    computed: {}
};