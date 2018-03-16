const Home = () =>
    import ("../pages/Home.js"); //lazy load
import Contact from "../pages/Contact.js";
const routes = [{
        path: "/contact",
        component: Contact
    },
    {
        path: "/about",
        component: () =>
            import ("../pages/About.js") //lazyload in route
    },
    {
        path: "/home",
        component: Home
    }
];

export default routes;