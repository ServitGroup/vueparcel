import Contact from "../pages/Contact.js";
const routes = [{
        path: "contact",
        component: Contact
    },
    {
        path: "about",
        component: () =>
            import ("../pages/About.js") //lazyload in route
    }
];

export default routes;