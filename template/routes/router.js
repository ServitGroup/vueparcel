import routes from "./routes.js";
const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

export default router;