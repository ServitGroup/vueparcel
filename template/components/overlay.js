export default {
    template: `<div id="overlay" ref="overlay"  v-bind:style='$store.getters.overlaystyle'>
                <div class="preloader">
                    <div class="timer"></div>
                </div>
            </div>`,
    name: "Overlay",
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