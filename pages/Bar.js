import actions from "../stores/actions.js";
import mutations from "../stores/mutations.js";
import getters from "../stores/getters.js";
export default {
    beforeRouteEnter(to, from, next) {
        console.log("route เข้า component ", this);
        // Pass a callback to next (optional)
        next(vm => {
            // this callback has access to component instance (ie: 'this') via `vm`
            vm.$nextTick(() => {
                console.log("check vm", vm);
                // vm.$root.$refs.overlay.style.display = "none";
                vm.$store.commit("hide");
            });
        });
    },

    beforeRouteLeave(to, from, next) {
        console.log("่ก่อน ออก จาก Component นี้ ");

        if (this.update_save || this.insert_save) {
            if (confirm("ข้อมุูลที่แก้ไข ยังไม่ saved ต้องการ saveก่อน หรือไม่ ? ")) {
                next(false);
            } else {
                // this.update_save = false;
                // this.insert_save = false;
                next(vm => {
                    // vm.$roo.$refs.overlay.style.display = "block";
                });
            }
        } else {
            //   this.update_save = false;
            //   this.insert_save = false;
            next(vm => {
                // vm.$roo.$refs.overlay.style.display = "block";
            });
        }
    },
    template: `<div>
    <h1>bar</h1>
    <input type="button" @click="callapi"  value="TestApi&AddMoudule2Vuex" />
    </div>`,
    name: "Bar",
    mixins: [],
    data() {
        return {
            theme: "AdminLte",
            modulename: "bar"
        };
    },
    created() {
        window.vc = this;
        console.log("vc computer is created");
    },
    mounted() {},
    methods: {
        callapi() {
            let modulename = this.modulename;
            if (!this.$store._modulesNamespaceMap[modulename + "/"]) {
                console.log("Call API");
                this.$http
                    .get("http://localhost:3000/crudmodule")
                    .then(rs => {
                        console.log("rs ==>", rs.data);
                        if (rs.data) {
                            rs.data.actions = actions;
                            rs.data.mutations = mutations;
                            rs.data.getters = getters;
                            this.$store.registerModule(modulename, rs.data);
                            console.log(
                                modulename,
                                "===>",
                                this.$store.state[modulename].name
                            );
                        }
                    })
                    .catch(console.log);
            } else {
                console.log("Not Call Data is stored");
            }
        }
    },

    computed: {}
};