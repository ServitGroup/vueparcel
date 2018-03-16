const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };
const Home = () =>
    import ("./pages/Home.js");
const routes = [
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar },
    { path: "/home", component: Home }
];

export default routes;