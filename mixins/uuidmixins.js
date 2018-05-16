//=================================
//FILE NAME:  uuidmixins.js
//DATE:       2018-04-07(Sat) 00:17:42
//DESC:       uuid shortuuid
//=================================
export default {
    data() {
        return {};
    },
    methods: {
        uuid() {
            const s4 = () =>
                Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
        },
        shortuuid() {
            return (
                Math.random()
                .toString(36)
                .substring(2, 15) +
                Math.random()
                .toString(36)
                .substring(2, 15)
            );
        }
    },
    created() {
        console.log("uuid mixins created.");
    }
};