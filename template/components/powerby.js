export default {
    template: `<div><b>power by: 
  <a target="_blank" href="https://github.com/limweb">thongchai lim</a> and 
  <a target="_blank" href="https://github.com/tanangular">tanangular</a></b></div>`,
    name: "powerby",
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