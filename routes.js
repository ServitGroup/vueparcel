const Foo = {
    template: "<div>foo</div>"
};
const Bar = {
    template: "<div>bar</div>"
};
const Home = () =>
    import ("./pages/Home.js");
import Contact from "./pages/Contact.js";
const routes = [{
        path: "/contact",
        component: Contact
    },
    {
        path: "/foo",
        component: Foo
    },
    {
        path: "/about",
        component: () =>
            import ("./pages/About.js")
    },
    {
        path: "/bar",
        component: Bar
    },
    {
        path: "/home",
        component: Home
    }
];
export default routes;