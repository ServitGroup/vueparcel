import Headerpage from "./header.js";
import Footerpage from "./footer.js";
import Navbarpage from "./navbar.js";
import HelloWorld from "../components/HelloWorld.js";
import Logo from "../components/Logo.js";
import powerby from "../components/powerby.js";
import overlay from "../components/overlay.js";
export default {
    template: `<div>
    <overlay/>
    <vue-progress-bar></vue-progress-bar>
    <Headerpage>Index layout MyHeader Override</Headerpage>
    <Logo />
    <HelloWorld />
    <Navbarpage/>
    <router-view><Home/></router-view> 
    <powerby/><br/>
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
        Footerpage,
        HelloWorld,
        Logo,
        powerby,
        overlay
    }
};