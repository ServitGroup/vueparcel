export default {
    template: `<div>
    <slot>
    <b>Navbar</b>
    <p>
    <router-link to = "/home" > <b>Home</b> </router-link>|
    <router-link to = "/bar" > <b>Bar</b> </router-link>|
    <router-link to = "/foo" > <b>Foo</b> </router-link>|
    <router-link to = "/contact" > <b>Contact</b> </router-link>|
    <router-link to = "/about" > <b>About</b> </router-link>|
    <router-link to = "/login" > <b>Login</b> </router-link>|
    <router-link to = "/*" > <b>404</b>  </router-link>|
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