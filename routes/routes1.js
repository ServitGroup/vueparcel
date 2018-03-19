const Foo = {
    template: "<div><h1>foo</h1></div>"
};
import Bar from "../pages/Bar.js";

const routes = [
    { path: "bar", component: Bar },
    { path: "foo", component: Foo }
];

export default routes;