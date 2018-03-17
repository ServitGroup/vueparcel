export default {
    template: `<div>
    <slot>
    <b>Navbar</b>
    <p>
    <router-link to = "/home" > Go to Home </router-link>|
    <router-link to = "/bar" > Go to Bar </router-link>|
    <router-link to = "/foo" > Go to Foo </router-link>|
    <router-link to = "/contact" > Go to Contact </router-link>|
    <router-link to = "/about" > Go to About </router-link>|
    <router-link to = "/login" > Go to Login </router-link>|
    <router-link to = "/xxx" > Go to Xxxx Not route </router-link>|
    </p>
    </slot><hr/></div>`,
    name: "Navbar",
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