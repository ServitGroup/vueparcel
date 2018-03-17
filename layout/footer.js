export default {
    template: `<div><hr/><slot>Footer</slot></div>`,
    name: "Footer",
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