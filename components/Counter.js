export default {
    template: `<div>
        <span>{{$store.state.count||0}}</span>
        <input type="button" @click="increment(1)"value="+"/>
        <input type="button" @click="increment(-1)"value="-"/>
        <br/>
        <br/>
        <br/>
    </div>`,
    name: "Counter",
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
        increment(val) {
            this.$store.commit("increment", val);
        }
    },
    computed: {},
    components: {}
};