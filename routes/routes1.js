const Foo = {
    template: "<div>foo</div>"
};
const Bar = {
    template: "<div>bar</div>"
};

const routes = [
    { path: "bar", component: Bar },
    { path: "foo", component: Foo }
];

export default routes;