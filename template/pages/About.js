import mixistemplate from "../mixins/mixintemplate.js";
import crudmixin from "../mixins/mixincrud.js"
export default {
    template: `<h1>About</h1>`,
    name: "About",
    mixins: [mixistemplate, crudmixin],
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