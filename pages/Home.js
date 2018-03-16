import Logo from "../components/Logo.js";
export default {
    template: `<div><h1>Home test</h1>
        <Logo />
    </div>`,
    name: "Home",
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
    computed: {},
    components: {
        Logo
    }
};