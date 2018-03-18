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
                next(vm => {
                    // vm.$roo.$refs.overlay.style.display = "block";
                });
            }
        } else {
            next(vm => {
                // vm.$roo.$refs.overlay.style.display = "block";
            });
        }
    },
    data() {
        return {
            crudmixins: true
        };
    },
    created() {
        console.log("mixins crud is created");
    }
};