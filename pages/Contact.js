export default {
    template: `<div><H1>contact</H1>
    <hr/>
    <v-select print-exclude v-model="selected" :options="['foo','bar']"></v-select>
    <hr/>
    <v-print>test</v-print>
    <br/>
    <input type="button" value="print" @click="this.print" />
    </div>`,
    name: "Contact",
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
    mixins: [],
    data() {
        return {
            theme: "AdminLte",
            selected: ""
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