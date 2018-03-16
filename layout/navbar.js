export default {
    template: `<div>
    <slot>
    <b>Navbar</b>
    <p>
    <router-link to = "/home" > Go to Home </router-link><br/>
    <router-link to = "/login" > Go to Login </router-link><br/>
    <router-link to = "/xxx" > Go to Xxxx Not route </router-link><br/>
    <router-link to = "/contact" > Go to Contact </router-link><br/>
    <router-link to = "/bar" > Go to Bar </router-link><br/>
    <router-link to = "/foo" > Go to Foo </router-link><br/>
    <router-link to = "/about" > Go to About </router-link><br/>
    </p>
    </slot></div>`,
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