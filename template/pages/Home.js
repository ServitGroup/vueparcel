import Counter from "../components/Counter.js"
export default {
    template: `<div><h1>Home Page</h1>
    
        <Counter />
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
        Counter

    }
};