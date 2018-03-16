import Vue from "./node_modules/vue/dist/vue.esm.browser.js";
window.Vue = Vue;
import collect from "collect.js";
import Vuex from "vuex";
window.Vuex = Vuex;
import axios from "axios";
import VueMultianalytics from "vue-multianalytics";
let gaConfig = {
    appName: "Test", // Mandatory
    appVersion: "0.1", // Mandatory
    trackingId: "YOUR_UA", // Mandatory
    debug: true // Whether or not display console logs debugs (optional)
};
let mixpanelConfig = {
    token: "YOUR_TOKEN"
};
Vue.use(VueMultianalytics, {
    modules: {
        ga: gaConfig,
        mixpanel: mixpanelConfig
    }
});

import VueRouter from "vue-router";
window.VueRouter = VueRouter;
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.prototype.$collect = collect;
Vue.use(Vuex);
import ("tachyons");