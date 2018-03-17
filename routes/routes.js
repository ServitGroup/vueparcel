import route1 from "./routes1.js";
import route2 from "./routes2.js";
import Indexlayout from "../layout/indexlayout.js";
import Login from "../pages/Login.js";
import NotFoundView from "../pages/p404.js";
import Home from "../pages/Home.js"; //lazy load
const route3 = [{
        path: "/login",
        component: Login
    },
    {
        path: "/",
        component: Indexlayout,
        children: [{
                path: "home",
                alias: "", // for default Component view
                name: "home",
                component: Home
            },
            ...route2,
            ...route1
        ]
    },
    {
        path: "*",
        component: NotFoundView
    }
];
export default route3;