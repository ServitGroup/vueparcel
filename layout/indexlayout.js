import Headerpage from "./header.js";
import Footerpage from "./footer.js";
import Navbarpage from "./navbar.js";

export default {
    template: `<div>
    <Headerpage>Index layout MyHeader Override</Headerpage>
    <Navbarpage/>
    <router-view></router-view> 
    <Footerpage />
    </div>`,
    name: "Main",
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
        Headerpage,
        Navbarpage,
        Footerpage
    }
};