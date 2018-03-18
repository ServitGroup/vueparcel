const Foo = {
    template: "<div><h1>foo</h1></div>"
};
const Bar = {
    template: "<div><h1>bar</h1></div>"
};

const routes = [
    { path: "bar", component: Bar },
    { path: "foo", component: Foo }
];

export default routes;