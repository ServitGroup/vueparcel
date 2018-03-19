export default function install(Vue) {
    const vueprn = {
        template: `<div id="printable" :class="{ 'print-only': !this.visible }">
                  <slot></slot>
                </div>`,
        name: "vueprn",
        props: {
            visible: {
                type: Boolean,
                default: true
            }
        },
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

    var VuePrint = Vue.extend(vueprn);

    Vue.component("v-print", VuePrint);

    Vue.directive("print-only", {
        bind: function() {
            var className = "print-only";
            if (this.el.classList) this.el.classList.add(className);
            else this.el.className += " " + className;
        }
    });

    Vue.directive("print-exclude", {
        bind: function() {
            var className = "print-exclude";
            if (this.el.classList) this.el.classList.add(className);
            else this.el.className += " " + className;
        }
    });

    Vue.mixin({
        methods: {
            print: function() {
                if (window) window.print();
                else console.log("Can't print outside the browser");
            }
        }
    });
}